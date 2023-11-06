const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// задержка для имитации реального ответа
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  next();
});

// эндпоинт логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8')
    );
    const { users = [] } = db;

    const userFormBd = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFormBd) {
      return res.json(userFormBd);
    }

    return res.status(403).json({ message: 'Пользователь не найден' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

// проверка авторизации

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: ' Не авторизован' });
  }
  return next();
});

server.use(router);

server.listen(8000, () => {
  console.log('Server on port 8000');
});
