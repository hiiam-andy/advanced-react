// import { BugButton } from 'app/providers/errorBoundary';
// import { Counter } from 'entities/Counter';
// import { Input } from 'shared/ui/Input/Input';
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t } = useTranslation('main');
  // const [value, setValue] = useState('');
  // const onChange = (val: string) => {
  //   setValue(val);
  // };

  return (
    <div>
      {/* <BugButton /> */}
      {/* <Counter /> */}
      {/* <Input value={value} onChange={onChange} placeholder={'Введите текст'} /> */}
      {t('Главная страница')}
    </div>
  );
}
