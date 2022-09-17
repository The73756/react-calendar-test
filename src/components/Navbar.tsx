import { Layout, Menu } from 'antd';
import { Dispatch, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const items = [{ label: 'Войти', key: '1', onClick: () => navigate(RouteNames.LOGIN) }];
  const authItems = [
    { label: user.username, key: '1' },
    { label: 'Выйти', key: '2', onClick: () => dispatch(AuthActionCreators.logout()) },
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
