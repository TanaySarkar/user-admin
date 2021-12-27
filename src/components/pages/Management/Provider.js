import { useState, useEffect } from 'react';

import { Table, Modal, Input, ToggleSwitch } from '../../common';

const providerData = [
  {
    id: 'PC001',
    name: 'Provider Name',
    email: 'example@mail.com',
    contactNumber: '987654321',
    contactName: 'Contact Name #1',
    address: 'Address Line #1',
    onboardBy: 'Self',
    dateTime: '29-Nov-2021 09:30 AM',
    action: 'Action 1',
    status: 'User Request',
    isEnabled: true,
  },
  {
    id: 'PC002',
    name: 'Provider Name',
    email: 'example@mail.com',
    contactNumber: '987654321',
    contactName: 'Contact Name #2',
    address: 'Address Line #1',
    onboardBy: 'Self',
    dateTime: '29-Nov-2021 09:30 AM',
    action: 'Action 1',
    status: 'User Request',
    isEnabled: false,
  },
  {
    id: 'PC003',
    name: 'Provider Name',
    email: 'example@mail.com',
    contactNumber: '987654321',
    contactName: 'Contact Name #2',
    address: 'Address Line #1',
    onboardBy: 'Self',
    dateTime: '29-Nov-2021 09:30 AM',
    action: 'Action 1',
    status: 'User Request',
    isEnabled: false,
  },
  {
    id: 'PC004',
    name: 'Provider Name',
    email: 'example@mail.com',
    contactNumber: '987654321',
    contactName: 'Contact Name #2',
    address: 'Address Line #1',
    onboardBy: 'Self',
    dateTime: '29-Nov-2021 09:30 AM',
    action: 'Action 1',
    status: 'User Request',
    isEnabled: true,
  },
];

const Provider = () => {
  const [data, setData] = useState([]);

  const [sortColumn, setSortColumn] = useState({
    column: 'id',
    order: 'asc',
  });

  useEffect(() => setData(providerData), []);

  const handleToggle = (userId) => {
    const usersData = [...data];
    const user = usersData.find((p) => p.id === userId);
    user.isEnabled = !user.isEnabled;
    setData(usersData);
  };

  const columns = [
    { path: 'id', label: 'Provider Code' },
    {
      key: 'name',
      content: (provider) => (
        <button
          type="button"
          className="btn btn-link p-0"
          data-bs-toggle="modal"
          data-bs-target="#providerDetails"
        >
          {provider.name}
        </button>
      ),
      label: 'Name',
    },
    { path: 'email', label: 'Email ID' },
    { path: 'contactNumber', label: 'Contact Numb' },
    { path: 'contactName', label: 'Contact Perso' },
    { path: 'address', label: 'Address' },
    { path: 'onboardBy', label: 'Onboard By' },
    { path: 'dateTime', label: 'Onboard Date' },
    { path: 'action', label: 'Action' },
    { path: 'status', label: 'Status' },
    {
      key: 'isEnabled',
      content: (provider) => (
        <ToggleSwitch
          name={'providerEnable' + provider.id}
          checked={provider.isEnabled}
          onChange={() => handleToggle(provider.id)}
        />
      ),
      label: 'Enable',
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
          <button
            type="button"
            className="btn btn-outline-primary btn-icon-text btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="mdi mdi-plus-circle-outline me-2"></i>
            Add New User
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <Table
          items={data}
          columns={columns}
          onSort={() => setSortColumn({ sortColumn })}
          sortColumn={sortColumn}
        />
      </div>
      <Modal id="providerDetails" header="Provider User Details">
        <form className="update-provider">
          <div className="row">
            <Input
              label="Name"
              name="providerName"
              classes="col-md-6"
              placeholder="Enter Name"
            />
            <Input
              label="Contact Person Name"
              name="providerContactName"
              classes="col-md-6"
              placeholder="Enter Contact Name"
            />
            <Input
              type="textarea"
              label="Address Line 1"
              name="providerAddress1"
              classes="col-md-6"
              rows={3}
              required
            />
            <Input
              type="textarea"
              label="Address Line 2"
              name="providerAddress2"
              classes="col-md-6"
              rows={3}
              required
            />
            <div className="form-group col-md-6">
              <label htmlFor="providerCity" className="form-label">
                City <span className="text-danger">*</span>
              </label>
              <select
                id="providerCity"
                className="form-select"
                aria-label="Default select example"
                defaultValue={0}
              >
                <option value={0}>City</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="providerCountry" className="form-label">
                Country <span className="text-danger">*</span>
              </label>
              <select
                id="providerCountry"
                className="form-select"
                aria-label="Default select example"
                defaultValue={0}
              >
                <option value={0}>Country</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <Input
              label="Email"
              name="providerEmail"
              classes="col-md-6"
              placeholder="example@email.com"
            />
            <Input
              label="Contact Number"
              name="providerContact"
              classes="col-md-6"
              placeholder="+91 9876 xxx xxx"
            />
          </div>
          <div className="text-end mt-3">
            <button
              type="button"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-gradient-danger me-2">
              Delete
            </button>
            <button type="submit" className="btn btn-gradient-primary">
              Update
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Provider;
