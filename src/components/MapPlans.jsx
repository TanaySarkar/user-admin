import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Input, Table, ToggleSwitch } from './common';

const MapPlans = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const modifiedData = [
      {
        name: 'Plane Name #1',
        code: 'PC001',
        propertyName: 'Property Name 1',
        resources: 7,
        accessPeriod: '1 Year',
        price: 12000.0,
        isEnabled: true,
      },
      {
        name: 'Plane Name #2',
        code: 'PC002',
        propertyName: 'Property Name 1',
        resources: 7,
        accessPeriod: '1 Year',
        price: 12000.0,
        isEnabled: false,
      },
      {
        name: 'Plane Name #3',
        code: 'PC003',
        propertyName: 'Property Name 1',
        resources: 7,
        accessPeriod: '1 Year',
        price: 12000.0,
        isEnabled: true,
      },
      {
        name: 'Plane Name #4',
        code: 'PC004',
        propertyName: 'Property Name 1',
        resources: 7,
        accessPeriod: '1 Year',
        price: 12000.0,
        isEnabled: false,
      },
    ];
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
      path: 'slPlan',
      label: 'Select Plan',
      content: (pro) => (
        <div className="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" />
          </label>
        </div>
      ),
    },
    {
      path: 'name',
      label: 'Name',
    },
    {
      path: 'code',
      label: 'Code',
    },
    {
      path: 'propertyName',
      label: 'Property Name',
    },
    {
      path: 'resources',
      label: 'No. of Resources',
    },
    {
      path: 'accessPeriod',
      label: 'Access Period',
    },
    {
      path: 'price',
      label: 'Plan Price',
    },
    {
      path: 'isEnabled',
      content: (provider) => (
        <ToggleSwitch
          name={'providerEnable' + provider.id}
          checked={provider.isEnabled}
          onChange={() => handleToggle(provider.id)}
        />
      ),
      label: 'Enable / Disable',
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
          <Link to="/add-corporate" className="btn btn-inverse-primary px-3">
            <i className="mdi mdi-plus-circle-outline me-1"></i> Add New User
          </Link>
        </div>
      </div>
      <Table items={data} columns={columns} />
    </>
  );
};

export default MapPlans;
