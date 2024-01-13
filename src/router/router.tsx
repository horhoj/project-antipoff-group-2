import { Navigate, Route, Routes } from 'react-router-dom';
import { UserListPage } from '~/pages/UserListPage';
import { UserPage } from '~/pages/UserPage';
import { ROUTES } from '~/router/routePaths';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.USER_LIST} element={<UserListPage />} />
        <Route path={ROUTES.USER} element={<UserPage />} />
        <Route path={'*'} element={<Navigate to={ROUTES.USER_LIST} />} />
      </Routes>
    </>
  );
};
