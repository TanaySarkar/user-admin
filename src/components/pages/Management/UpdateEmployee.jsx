import { Input, Select, ToggleSwitch } from '../../common';
import { citys } from '../../../services/contries';

const UpdateEmployee = ({ tableData, tableUpdate, userData, userUpdate }) => {
  const handleInput = ({ currentTarget: input }) => {
    const updatedOne = { ...userData };
    updatedOne[input.name] = input.value;
    userUpdate(updatedOne);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = [...tableData];
    const user = newData.find((p) => p.id === userData.id);

    for (const prop in userData) {
      user[prop] = userData[prop];
    }

    tableUpdate(newData);

    let colsePopup = document.getElementById('colsePopup');
    colsePopup.dispatchEvent(new Event('click'));
  };

  const defaultDate = (date) => {
    const d = Date.parse(date);
    const dStr = new Date(d);
    return dStr.toISOString().split('T')[0];
  };

  return (
    <form className="update-provider" onSubmit={handleSubmit}>
      <div className="row">
        <Input
          label="Employee Name"
          name="name"
          classes="col-md-6"
          value={userData.name}
          required
          onChange={handleInput}
        />
        <Input
          label="Employee Code"
          name="code"
          classes="col-md-6"
          value={userData.code}
          required
          onChange={handleInput}
        />
        <Input
          label="Date Of Joning"
          name="dob"
          type="date"
          classes="col-md-6"
          value={defaultDate(userData.dateTime)}
          required
          onChange={handleInput}
        />
        <Select
          options={citys}
          label="Link Employee To"
          name=""
          classes="col-md-6"
          defaultValue="IN"
          required
          onChange={handleInput}
        />
        <Input
          label="Contact Number"
          name="contactNumber"
          classes="col-md-6"
          value={userData.contactNumber}
          onChange={handleInput}
        />
        <Input
          label="Email"
          name="email"
          classes="col-md-6"
          value={userData.email}
          onChange={handleInput}
        />
        <Input
          type="textarea"
          label="Address Line 1"
          name="addressLine1"
          classes="col-md-6"
          rows={3}
          value={userData.addressLine1}
          required
          onChange={handleInput}
        />
        <Input
          type="textarea"
          label="Address Line 2"
          name="addressLine2"
          classes="col-md-6"
          rows={3}
          value={userData.addressLine2}
          required
          onChange={handleInput}
        />
        <Select
          name="country"
          label="Country"
          classes="col-md-6"
          options={citys}
          onChange={handleInput}
          defaultValue="IN"
        />
        <Select
          name="state"
          label="State"
          classes="col-md-6"
          options={citys}
          defaultValue={userData.cityCode}
          onChange={handleInput}
        />
        <Select
          name="city"
          label="City"
          classes="col-md-6"
          options={citys}
          defaultValue={userData.cityCode}
          onChange={handleInput}
        />
        <Input
          label="Postal Code"
          name="postalCode"
          classes="col-md-6"
          value={userData.postalCode}
          onChange={handleInput}
        />
        <div className="form-group col-md-6">
          <label>Enable / Desable</label>
          <br />
          <ToggleSwitch
            name="isEnabled"
            checked={userData.isEnabled}
            onChange={() => {
              const providerCopy = { ...userData };
              providerCopy.isEnabled = !providerCopy.isEnabled;
              userUpdate(providerCopy);
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
        <button type="submit" className="btn btn-gradient-primary">
          Onboard &amp; Convert as Member
        </button>
      </div>
    </form>
  );
};

export default UpdateEmployee;
