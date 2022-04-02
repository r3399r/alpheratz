import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './constant/Page';
import MyTsum from './page/myTsum/MyTsum';
import Version from './page/Version/Version';

const AppRoutes = () => (
  <Routes>
    <Route path={`/alpheratz/${Page.MyTsum}`} element={<MyTsum />} />
    <Route path={`/alpheratz/${Page.Version}`} element={<Version />} />
    <Route path="/alpheratz/*" element={<Navigate to={Page.MyTsum} />} />
  </Routes>
);

export default AppRoutes;
