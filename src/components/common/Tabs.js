const Tabs = ({ data }) => {
  return (
    <div className="data-tabs">
      <nav className="nav nav-tabs" id="nav-tab" role="tablist">
        {data.map(({ tabName, tabFor, active = false }) => (
          <button
            key={tabFor}
            className={active ? 'nav-link active' : 'nav-link'}
            id={`nav-${tabFor}-tab`}
            data-bs-toggle="tab"
            data-bs-target={`#nav-${tabFor}`}
            type="button"
            role="tab"
            aria-controls={`nav-${tabFor}`}
            aria-selected={active}
          >
            {tabName}
          </button>
        ))}
      </nav>
      <div className="card">
        <div className="card-body">
          <div className="tab-content" id="nav-tabContent">
            {data.map(({ tabName, tabFor, element, active = false }) => {
              let classModified = 'tab-pane fade';
              if (active) classModified += 'show active';
              return (
                <div
                  key={tabFor + 'tab'}
                  className={classModified}
                  id={`nav-${tabFor}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${tabFor}-tab`}
                >
                  {element}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
