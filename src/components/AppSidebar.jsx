import { NavLink } from 'react-router-dom';

const AppSidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-image">
              <img src="assets/images/faces/face1.jpg" alt="profile" />
              <span className="login-status online" />
              {/*change to offline or busy as needed*/}
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
          </a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user-management">
            <span className="menu-title">User Management</span>
            <i className="mdi mdi-contacts menu-icon" />
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span className="menu-title">Property Settings</span>
            <i className="menu-arrow" />
            <i className="mdi mdi-crosshairs-gps menu-icon" />
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add New Property
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  View Property List
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#booking-basic"
            aria-expanded="false"
            aria-controls="booking-basic"
          >
            <span className="menu-title">Booking Management</span>
            <i className="menu-arrow" />
            <i className="mdi mdi-file-document-box menu-icon" />
          </a>
          <div className="collapse" id="booking-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add New Booking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  View Bookings
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="menu-title">Masters Management</span>
            <i className="mdi mdi-format-list-bulleted menu-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#general-pages"
            aria-expanded="false"
            aria-controls="general-pages"
          >
            <span className="menu-title">Access Management</span>
            <i className="menu-arrow" />
            <i className="mdi mdi-medical-bag menu-icon" />
          </a>
          <div className="collapse" id="general-pages">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Provider Access
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Member Access
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Corporate Access
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="menu-title">Reports &amp; Analytics</span>
            <i className="mdi mdi-chart-bar menu-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AppSidebar;
