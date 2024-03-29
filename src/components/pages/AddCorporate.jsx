import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Input, ToggleSwitch, Select, ImageUploader } from '../common';
import { citys } from '../../services/contries';

const AddCorporate = () => {
  const [providerData, setProviderData] = useState();

  const handleInput = ({ currentTarget: input }) => {
    const updatedOne = { ...providerData };
    updatedOne[input.name] = input.value;
    setProviderData(updatedOne);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(providerData);
  };
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

          <form onSubmit={handleSubmit}>
            <div className="row">
              <Input
                label="Corporate Name"
                name="name"
                placeholder="Enter Member Name"
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <ImageUploader
                label="Upload Corporate Logo"
                classes="col-md-6"
                required
                handleFile={(filedata) => console.log(filedata)}
              />
              <Input
                label="Corporate Code"
                name="ccCode"
                placeholder="Auto Generate"
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <Input
                label="Contact Person Name"
                name="contactName"
                placeholder="Enter Contact Person Name"
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <Input
                label="Contact Number"
                name="contactNumber"
                placeholder="Enter Contact Number"
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <Input
                label="Land Phone Number"
                name="landNumber"
                placeholder="Enter Land Phone Number"
                classes="col-md-6"
                onChange={handleInput}
              />
              <Input
                label="Email ID"
                name="email"
                placeholder="Enter Email ID"
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <Input
                label="Alternative Email ID"
                name="altEmail"
                placeholder="Enter Email ID"
                classes="col-md-6"
                onChange={handleInput}
              />
              <Input
                type="textarea"
                label="Address Line 1"
                name="address"
                placeholder="Enter Address Line #1"
                classes="col-md-6"
                rows={3}
                required
                onChange={handleInput}
              />
              <Input
                type="textarea"
                label="Address Line 2"
                name="address2"
                placeholder="Enter Address Line #2"
                classes="col-md-6"
                rows={3}
                onChange={handleInput}
              />
              <Select
                name="cityCode"
                label="Country"
                placeholder="Select Country"
                options={citys}
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <Select
                name="cityCode"
                label="State"
                placeholder="Select State"
                options={citys}
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <Select
                name="cityCode"
                label="City"
                placeholder="Select City"
                options={citys}
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <Input
                label="Postal Code"
                name="postalCode"
                placeholder="Enter Postal Code"
                classes="col-md-6"
                required
                onChange={handleInput}
              />
              <div className="form-group col-md-6">
                <label>Enable / Desable</label>
                <br />
                <ToggleSwitch
                  name="isEnabled"
                  onChange={() => {
                    const providerCopy = { ...providerData };
                    providerCopy.isEnabled = !providerCopy.isEnabled;
                    setProviderData(providerCopy);
                  }}
                />
              </div>
            </div>
            <div className="text-end mt-3">
              <button type="submit" className="btn btn-gradient-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCorporate;
