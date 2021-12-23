import Member from '../Member';
import Provider from '../Provider';
import { Tabs } from '../common';

const usertabs = [
  { tabName: 'Home', tabFor: 'home', element: <Provider />, active: true },
  { tabName: 'Profile', tabFor: 'profile', element: <Member /> },
  { tabName: 'Contact', tabFor: 'contact', element: <p>sfd</p> },
];

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
          <Tabs data={usertabs} />
        </div>
      </div>
    </>
  );
};

export default Management;
