import React from 'react';
import './ImageUpload.css';
import blankImg from './blank.jpg';

const ImageUploader = (props) => {
  const { handleFile, label, classes, error } = props;
  const defaultData = {
    name: 'No file chosen',
    url: blankImg,
    isImage: false,
  };
  const [fileData, setFileData] = React.useState(defaultData);
  const hiddenFileInput = React.useRef(null);

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFileData({
      name: fileUploaded.name,
      url: URL.createObjectURL(fileUploaded),
      isImage: true,
    });
    handleFile(fileUploaded);
  };

  const handleDelete = () => {
    setFileData(defaultData);
    handleFile(null);
  };

  return (
    <div className={classes ? `form-group ${classes}` : 'form-group'}>
      {label && (
        <label>
          {label} {props.required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className="file-input d-flex align-items-end">
        <div className="img-group me-3">
          <img className="img" src={fileData.url} alt="" />
          {fileData.isImage && (
            <button className="cancel" onClick={handleDelete}>
              <i className="mdi mdi-close"></i>
            </button>
          )}
        </div>
        <div className="text">
          <p className="mb-2">{fileData.name}</p>
          <button
            type="button"
            className="btn btn-gradient-primary"
            onClick={() => hiddenFileInput.current.click()}
          >
            Upload a file
          </button>
        </div>
        <input
          type="file"
          ref={hiddenFileInput}
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};
export default ImageUploader;
