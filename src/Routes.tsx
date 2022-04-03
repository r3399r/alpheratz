import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './constant/Page';
import MyTsum from './page/myTsum/MyTsum';
import Version from './page/Version/Version';

const AppRoutes = () => (
  <Routes>
    <Route path={Page.MyTsum} element={<MyTsum />} />
    <Route path={Page.Version} element={<Version />} />
    <Route path="/*" element={<Navigate to={Page.MyTsum} />} />
  </Routes>
);

export default AppRoutes;
