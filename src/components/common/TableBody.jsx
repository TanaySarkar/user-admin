import React from 'react';
import _ from 'lodash';

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td key={item.id + column.path}>
              {column.content ? column.content(item) : _.get(item, column.path)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
