
import React from 'react';

const DatePicker = ({ value, onChange }) => (
    <input
        type="date"
        value={value}
        onChange={onChange}
        style={{ padding: '8px', fontSize: '1rem', margin: '5px 0' }}
    />
);

export default DatePicker;
