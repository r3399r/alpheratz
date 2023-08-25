import { Navigate, Route, Routes } from 'react-router-dom';
import UserList from './page/UserList';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
