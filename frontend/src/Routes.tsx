import { Navigate, Route, Routes } from 'react-router-dom';
import Editor from './page/editor';
import UserList from './page/UserList';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="/editor" element={<Editor />} />
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
