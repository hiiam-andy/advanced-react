// то, что возвращает бэкенд
export interface User {
  id: string;
  username: string
}

// интерфейс для стейта
export interface UserSchema {
  authData?: User // если есть, значит пользователь авторизован
}
