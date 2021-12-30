const TableHeader = ({ columns, onSort, sortColumn }) => {
  const raiseSort = (column) => {
    if (sortColumn.column === column)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.column = column;
      sortColumn.order = 'asc';
    }
    onSort(sortColumn);
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path}
            onClick={column.noaction ? null : () => raiseSort(column.path)}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
