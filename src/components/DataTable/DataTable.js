import React from 'react';
import useStore from '../../store/useStore';

import './DataTable.scss';

const DataTable = () => {
  const parts = useStore((state) => state.parts);

  const renderData = () => {
    return parts.map((part, index) => {
      return (
        <tr key={index}>
          <td>{part.PartNumber}</td>
          <td>{part.Description}</td>
        </tr>
      );
    });
  };

  if (parts.length === 0) {
    return null;
  }

  return (
    <table>
      <caption>(mock) Parts table</caption>
      <thead>
        <tr>
          <th scole="col">Part #</th>
          <th scole="col">Description</th>
        </tr>
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};

export default DataTable;
