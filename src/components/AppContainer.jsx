import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import Member from './pages/Management/Member';
import Provider from './pages/Management/Provider';
import Corporate from './pages/Management/Corporate';
import AddCorporate from './pages/AddCorporate';
import OnboardEmployee from './pages/OnboardEmployee';
import UserMap from './pages/UserMap';
import ErrorPage from './pages/ErrorPage';
import AppFooter from './AppFooter';

const AppContainer = () => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<Management />}>
            <Route path="provider" element={<Provider />} />
            <Route path="profile" element={<Member />} />
            <Route path="corporate" element={<Corporate />} />
            <Route
              path=""
              element={<Navigate replace to="/user-management/provider" />}
            />
          </Route>
          <Route path="/add-corporate" element={<AddCorporate />} />
          <Route path="/onboard-employee" element={<OnboardEmployee />} />
          <Route path="/user-map" element={<UserMap />} />
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <AppFooter />
    </div>
  );
};

export default AppContainer;
