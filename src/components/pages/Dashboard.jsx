const Dashboard = () => {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-home" />
          </span>
          Dashboard
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
        <div className="col-12">
          <div className="card grid-margin">
            <div className="card-body">
              <h4 className="card-title">Notifications</h4>
              <div className="row mb-n5">
                <div className="col-lg-6 mb-5">
                  <div className="group-card">
                    <h5 className="group-header bg-gradient-primary">
                      Booking
                    </h5>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td> New Booking </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-outline-success btn-sm"
                              >
                                Booking ID
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td> New Booking </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-outline-success btn-sm"
                              >
                                Booking ID
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="group-card">
                    <h5 className="group-header bg-gradient-primary">
                      Help Desk
                    </h5>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td> New Issue </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-outline-primary btn-sm"
                              >
                                Issue ID
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td> New Issue </td>
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-outline-primary btn-sm"
                              >
                                Issue ID
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="group-card">
                    <h5 className="group-header bg-gradient-primary">
                      Booking Modification Request
                    </h5>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td> New Request </td>
                            <td className="text-end">
                              <a href="#">Booking ID</a>
                            </td>
                          </tr>
                          <tr>
                            <td> New Request </td>
                            <td className="text-end">
                              <a href="#">Booking ID</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="group-card">
                    <h5 className="group-header bg-gradient-primary">
                      New User Alert
                    </h5>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td> User Name </td>
                            <td className="text-end">
                              <a href="#">User Type</a>
                            </td>
                          </tr>
                          <tr>
                            <td> User Name </td>
                            <td className="text-end">
                              <a href="#">User Type</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-xxl-3 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
              <img
                src="assets/images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle-image"
              />
              <h4 className="font-weight-normal mb-3">
                Total Active Providers
                <i className="mdi mdi-chart-line mdi-24px ms-2" />
              </h4>
              <h2 className="mb-5">
                10 <small>out of 25</small>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3 stretch-card grid-margin">
          <div className="card bg-gradient-info card-img-holder text-white">
            <div className="card-body">
              <img
                src="assets/images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle-image"
              />
              <h4 className="font-weight-normal mb-3">
                Total Active Members
                <i className="mdi mdi-bookmark-outline mdi-24px ms-2" />
              </h4>
              <h2 className="mb-5">
                10 <small>out of 25</small>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img
                src="assets/images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle-image"
              />
              <h4 className="font-weight-normal mb-3">
                Upcoming Bookings
                <i className="mdi mdi-diamond mdi-24px ms-2" />
              </h4>
              <h2 className="mb-5">10</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3 stretch-card grid-margin">
          <div className="card bg-gradient-primary card-img-holder text-white">
            <div className="card-body">
              <img
                src="assets/images/dashboard/circle.svg"
                className="card-img-absolute"
                alt="circle-image"
              />
              <h4 className="font-weight-normal mb-3">
                Total Active Providers
                <i className="mdi mdi-chart-line mdi-24px ms-2" />
              </h4>
              <h2 className="mb-5">
                10 <small>out of 25</small>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
