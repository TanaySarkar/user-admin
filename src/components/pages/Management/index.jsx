import { NavLink, Outlet } from 'react-router-dom';

const Management = () => {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-contacts" />
          </span>
          User Management
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span />
              Overview
              <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="data-tabs">
            <nav className="nav nav-tabs" id="nav-tab" role="tablist">
              <NavLink className="nav-link" to="/user-management/provider">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/user-management/profile">
                Profile
              </NavLink>
              <NavLink className="nav-link" to="/user-management/corporate">
                Corporate
              </NavLink>
            </nav>
            <div className="card">
              <div className="card-body">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;
