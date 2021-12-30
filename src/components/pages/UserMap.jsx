import { NavLink } from 'react-router-dom';
import { Input } from '../common';
import Counter from '../common/Counter';
import DragMultySelect from '../common/DragMultySelect';
import MapPlans from '../MapPlans';
import bike from '../../assets/motorcycle.svg';

const UserMap = () => {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-home" />
          </span>
          Add New Corporate
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
      <div className="card">
        <div className="card-body">
          <div
            className="btn-group d-flex mb-5"
            role="group"
            aria-label="Basic example"
          >
            <NavLink
              className="btn btn btn-inverse-primary"
              to="/add-corporate"
            >
              Onboard Corporate
            </NavLink>
            <NavLink
              className="btn btn btn-inverse-primary"
              to="/onboard-employee"
            >
              Onboard Corporate Employee
            </NavLink>
            <NavLink className="btn btn btn-inverse-primary" to="/user-map">
              Map Properties
            </NavLink>
          </div>
          <form>
            <div className="fieldset">
              <h3 className="legend">Map Properties</h3>
              <DragMultySelect />
            </div>
            <div className="fieldset">
              <h3 className="legend">Map Plans</h3>
              <div className="accordion" id="accordionPlans">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#plancollapse-1"
                      aria-expanded="true"
                      aria-controls="plancollapse-1"
                    >
                      Property Code - Property Name #5
                    </button>
                  </h2>
                  <div
                    id="plancollapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionPlans"
                  >
                    <div className="accordion-body">
                      <MapPlans />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#plancollapse-2"
                      aria-controls="plancollapse-2"
                    >
                      Property Code - Property Name #6
                    </button>
                  </h2>
                  <div
                    id="plancollapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionPlans"
                  >
                    <div className="accordion-body">More Content</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#plancollapse-3"
                      aria-controls="plancollapse-3"
                    >
                      Property Code - Property Name #7
                    </button>
                  </h2>
                  <div
                    id="plancollapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionPlans"
                  >
                    <div className="accordion-body">More Content</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fieldset">
              <h3 className="legend">Map Services</h3>
              <div className="accordion" id="accordionServices">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#servicescollapse-1"
                      aria-expanded="true"
                      aria-controls="servicescollapse-1"
                    >
                      Property Code - Property Name #5
                    </button>
                  </h2>
                  <div
                    id="servicescollapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionServices"
                  >
                    <div className="accordion-body">
                      <h4>Value Added Services</h4>
                      <table className="table">
                        <tr>
                          <td>
                            <div className="form-check p-0">
                              <label class="form-check-label">
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                />
                                Bike Parking
                              </label>
                            </div>
                            <i
                              class="mdi mdi-information text-warning fs-5 p-0"
                              style={{
                                verticalAlign: 'middle',
                                marginRight: 4,
                              }}
                            ></i>{' '}
                            Cost Per Unit Is Rs. ##
                          </td>
                          <td>
                            VAS Label
                            <br />
                            Name #1 *
                          </td>
                          <td>
                            <Counter />
                          </td>
                          <td>Total Service Cost *</td>
                          <td>
                            <div style={{ maxWidth: '200px' }}>
                              <Input />
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#servicescollapse-2"
                      aria-controls="servicescollapse-2"
                    >
                      Property Code - Property Name #6
                    </button>
                  </h2>
                  <div
                    id="servicescollapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionServices"
                  >
                    <div className="accordion-body">More Content</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#servicescollapse-3"
                      aria-controls="servicescollapse-3"
                    >
                      Property Code - Property Name #7
                    </button>
                  </h2>
                  <div
                    id="servicescollapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionServices"
                  >
                    <div className="accordion-body">More Content</div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserMap;
