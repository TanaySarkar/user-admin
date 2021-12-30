import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ items, columns, onSort, sortColumn }) => (
  <table className="table">
    <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
    <TableBody data={items} columns={columns} />
  </table>
);

export default Table;
