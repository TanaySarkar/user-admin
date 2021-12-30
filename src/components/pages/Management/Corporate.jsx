import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import { Table, Modal, ToggleSwitch } from '../../common';
import { corporateData } from '../../../services/fackCorporate';
import UpdateCorporate from './UpdateCorporate';

const Corporate = () => {
  const [data, setData] = useState([]);
  const [sortColumn, setSortColumn] = useState({
    column: 'name',
    order: 'asc',
  });

  const [providerData, setProviderData] = useState();

  const loadData = async () => {
    const modifiedData = await corporateData.map(({ address, ...rest }) => ({
      ...rest,
      addressLine1: address.line1,
      addressLine2: address.line2,
    }));
    setData(modifiedData);
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleToggle = (userId) => {
    const usersData = [...data];
    const user = usersData.find((p) => p.id === userId);
    user.isEnabled = !user.isEnabled;
    setData(usersData);
  };

  const columns = [
    {
      path: 'name',
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
    { path: 'id', label: 'Code' },
    { path: 'contactNumber', label: 'Phone Number' },
    { path: 'email', label: 'Email ID' },
    {
      path: 'address',
      content: (provider) => (
        <span>
          {provider.addressLine1}
          <br />
          {provider.addressLine2}
        </span>
      ),
      label: 'Address',
    },
    {
      path: 'properties',
      content: (provider) => (
        <>
          {provider.properties.map((p, i) => (
            <p className="mb-0" key={provider.id + 'link' + i}>
              <a href={p.link}>{p.name}</a>
            </p>
          ))}
        </>
      ),
      label: 'Properties Linked',
    },
    { path: 'dateTime', label: 'Onboard Date' },
    {
      path: 'isEnabled',
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

  const sortedData = _.orderBy(data, [sortColumn.column], [sortColumn.order]);

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
          <Link to="/add-corporate" className="btn btn-inverse-primary px-3">
            <i className="mdi mdi-plus-circle-outline me-1"></i> Add New User
          </Link>
        </div>
      </div>
      <Table
        items={sortedData}
        columns={columns}
        onSort={(sort) => setSortColumn({ ...sort })}
        sortColumn={sortColumn}
      />
      <Modal id="providerDetails" header="Provider User Details">
        {providerData && (
          <UpdateCorporate
            tableData={sortedData}
            tableUpdate={(update) => setData(update)}
            userData={providerData}
            userUpdate={(update) => setProviderData(update)}
          />
        )}
      </Modal>
    </>
  );
};

export default Corporate;
