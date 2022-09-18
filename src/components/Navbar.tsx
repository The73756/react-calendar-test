import { Layout, Menu } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const items = [{ label: 'Войти', key: '1', onClick: () => navigate(RouteNames.LOGIN) }];
  const authItems = [
    { label: user.username, key: '1' },
    { label: 'Выйти', key: '2', onClick: logout },
  ];

  return (
    <Layout.Header>
      <Menu
        theme='dark'
        mode='horizontal'
        selectable={false}
        items={isAuth ? authItems : items}
        style={{ justifyContent: 'end' }}
      />
    </Layout.Header>
  );
};

export default Navbar;
