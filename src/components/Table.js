import React from 'react';

const Table = ({ columns, data }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col, colIndex) => (
            <td key={colIndex} style={{ border: '1px solid #ccc', padding: '10px' }}>{row[col]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;