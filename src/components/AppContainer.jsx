import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import AppFooter from './AppFooter';

const AppContainer = () => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<Management />} />
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </div>
      <AppFooter />
    </div>
  );
};

export default AppContainer;