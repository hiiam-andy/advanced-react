import { classNames } from 'shared/lib/classNames/сlassNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
// eslint-disable-next-line max-len
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { password, username, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      {error && <div>{error}</div>}
      <Input
        autofocus
        placeholder={t('Введите username')}
        type="text"
        className={styles.input}
        value={username}
        onChange={onChangeUsername}
      />

      <Input
        placeholder={t('Введите пароль')}
        type="text"
        className={styles.input}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={styles.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
