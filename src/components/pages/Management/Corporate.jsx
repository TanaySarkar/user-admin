import { useState, useEffect } from 'react';

import { Table, Modal, Input, ToggleSwitch, Select } from '../../common';
import { corporateData } from '../../../services/fackCorporate';
import { citys } from '../../../services/contries';
import { Link } from 'react-router-dom';

const Corporate = () => {
  const [data, setData] = useState([]);
  const [sortColumn, setSortColumn] = useState({
    column: 'id',
    order: 'asc',
  });
  const [countries, setCountries] = useState([]);

  const [providerData, setProviderData] = useState();

  const updateCountries = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setData(corporateData);
    updateCountries();
  }, []);

  const handleToggle = (userId) => {
    const usersData = [...data];
    const user = usersData.find((p) => p.id === userId);
    user.isEnabled = !user.isEnabled;
    setData(usersData);
  };

  const handleInput = ({ currentTarget: input }) => {
    const updatedOne = { ...providerData };
    updatedOne[input.name] = input.value;
    setProviderData(updatedOne);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usersData = [...data];
    const user = usersData.find((p) => p.id === providerData.id);

    for (const prop in providerData) {
      user[prop] = providerData[prop];
    }

    setData(usersData);

    let colsePopup = document.getElementById('colsePopup');
    colsePopup.dispatchEvent(new Event('click'));
  };

  const handleDelete = () => {
    const newData = data.filter((d) => d.id !== providerData.id);
    setData(newData);

    let colsePopup = document.getElementById('colsePopup');
    colsePopup.dispatchEvent(new Event('click'));
  };

  const columns = [
    {
      key: 'name',
      content: (provider) => (
        <button
          type="button"
          className="btn btn-link p-0"
          data-bs-toggle="modal"
          data-bs-target="#providerDetails"
          onClick={() => setProviderData(provider)}
        >
          {provider.name}
        </button>
      ),
      label: 'Name',
    },
    { path: 'email', label: 'Email ID' },
    { path: 'contactNumber', label: 'Contact Number' },
    { path: 'companyName', label: 'Company name' },
    { path: 'address', label: 'Address' },
    { path: 'onboardBy', label: 'Onboard By' },
    { path: 'dateTime', label: 'Onboard Date' },
    {
      key: 'isEnabled',
      content: (provider) => (
        <ToggleSwitch
          name={'providerEnable' + provider.id}
          checked={provider.isEnabled}
          onChange={() => handleToggle(provider.id)}
        />
      ),
      label: 'Action',
    },
  ];

  return (
    <>
      <div className="row mb-4">
        <div className="col-xxl-4 col-lg mb-4 mb-lg-0">
          <form>
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify" />
              </div>
              <input
                type="text"
                className="form-control bg-transparent border-0 border-bottom"
                placeholder="Search"
                autoComplete="off"
              />
            </div>
          </form>
        </div>
        <div className="col-lg text-end">
          <Link
            to="/add-corporate"
            className="btn btn-outline-primary btn-icon-text btn-sm"
          >
            <i className="mdi mdi-plus-circle-outline me-2"></i> Add New User
          </Link>
        </div>
      </div>
      <Table
        items={data}
        columns={columns}
        onSort={() => setSortColumn({ sortColumn })}
        sortColumn={sortColumn}
      />
      <Modal id="providerDetails" header="Provider User Details">
        {providerData && (
          <form className="update-provider" onSubmit={handleSubmit}>
            <div className="row">
              <Input
                label="Provider Name"
                name="name"
                classes="col-md-6"
                value={providerData.name}
                onChange={handleInput}
              />
              <Input
                label="Date Of Birth"
                name="dob"
                classes="col-md-6"
                value={providerData.dob}
                onChange={handleInput}
              />
              <Input
                label="Contact Number"
                name="contactNumber"
                classes="col-md-6"
                value={providerData.contactNumber}
                onChange={handleInput}
              />
              <Input
                label="Email"
                name="email"
                classes="col-md-6"
                value={providerData.email}
                onChange={handleInput}
              />
              <Input
                type="textarea"
                label="Address Line 1"
                name="address"
                classes="col-md-6"
                rows={3}
                value={providerData.address}
                required
                onChange={handleInput}
              />
              <Input
                type="textarea"
                label="Address Line 2"
                name="address"
                classes="col-md-6"
                rows={3}
                value={providerData.address}
                required
                onChange={handleInput}
              />
              <Select
                name="cityCode"
                label="Country"
                classes="col-md-6"
                options={countries}
                onChange={handleInput}
                defaultValue="IN"
              />
              <Select
                name="cityCode"
                label="State"
                classes="col-md-6"
                options={citys}
                value={providerData.cityCode}
                onChange={handleInput}
              />
              <Select
                name="cityCode"
                label="City"
                classes="col-md-6"
                options={citys}
                value={providerData.cityCode}
                onChange={handleInput}
              />
              <Input
                label="Postal Code"
                name="postalCode"
                classes="col-md-6"
                value={providerData.postalCode}
                onChange={handleInput}
              />
              <Input
                label="Company Name"
                name="companyName"
                classes="col-md-6"
                value={providerData.companyName}
                onChange={handleInput}
              />
              <div className="form-group col-md-6">
                <label>Enable / Desable</label>
                <br />
                <ToggleSwitch
                  name="isEnabled"
                  checked={providerData.isEnabled}
                  onChange={() => {
                    const providerCopy = { ...providerData };
                    providerCopy.isEnabled = !providerCopy.isEnabled;
                    setProviderData(providerCopy);
                  }}
                />
              </div>
            </div>
            <div className="text-end mt-3">
              <button
                type="button"
                className="btn btn-light me-2"
                data-bs-dismiss="modal"
                id="colsePopup"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-gradient-danger me-2"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button type="submit" className="btn btn-gradient-primary">
                Update
              </button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};

export default Corporate;
