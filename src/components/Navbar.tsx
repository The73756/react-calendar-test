import { Layout, Menu } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const auth = true;

  const items = [{ label: 'Войти', key: '1', onClick: () => navigate(RouteNames.LOGIN) }];
  const authItems = [
    { label: 'Антоха', key: '1',  },
    { label: 'Выйти', key: '2', onClick: () => console.log('sdfsdfsfd') },
  ];

  return (
    <Layout.Header>
      <Menu
        theme='dark'
        mode='horizontal'
        selectable={false}
        items={auth ? authItems : items}
        style={{ justifyContent: 'end' }}
      />
    </Layout.Header>
  );
};

export default Navbar;
