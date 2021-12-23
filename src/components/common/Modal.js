const Modal = ({ id, header, children }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable form-moal">
        <div className="modal-content">
          <div className="modal-header">
            {header && (
              <h5 className="modal-title" id={`${id}Label`}>
                {header}
              </h5>
            )}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
