
import React from 'react';

const Checkbox = ({ label, checked, onChange }) => (
    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', margin: '5px 0' }}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span style={{ marginLeft: '8px' }}>{label}</span>
    </label>
);

export default Checkbox;
