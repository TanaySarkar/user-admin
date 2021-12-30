import React from 'react';

const getFieldStyle = (isDragging) => {
  const style = {
    margin: 5,
    backgroundColor: '#b66dff',
    color: '#fff',
    padding: 8,
    textAlign: 'left',
  };
  style.opacity = isDragging ? 0.5 : 1;
  return style;
};

const ItemsTemplate = ({ fields }) => {
  const rows = fields.map((field) => (
    <div key={field} style={getFieldStyle(false)}>
      {field}
    </div>
  ));
  return <div>{rows}</div>;
};

export default ItemsTemplate;
