// src/App.js
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Table from './components/Table';
import Checkbox from './components/Checkbox';
import DatePicker from './components/DatePicker';
import Card from './components/Card';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agree: false,
    date: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setFormData(prev => ({ ...prev, agree: !prev.agree }));
  };

  const handleDateChange = (e) => {
    setFormData(prev => ({ ...prev, date: e.target.value }));
  };

  const handleSubmit = () => {
    setTableData(prev => [...prev, formData]);
    setFormData({ name: '', email: '', agree: false, date: '' });
  };

  const columns = ["Name", "Email", "Agree", "Date"];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Reusable Components Demo</h1>
      <Card>
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'name' } })}
        />
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: 'email' } })}
        />
        <Checkbox
          label="I agree to the terms"
          checked={formData.agree}
          onChange={handleCheckboxChange}
        />
        <DatePicker
          value={formData.date}
          onChange={handleDateChange}
        />
        <Button text="Submit" onClick={handleSubmit} />
      </Card>
      <Table
        columns={columns}
        data={tableData.map(item => ({
          Name: item.name,
          Email: item.email,
          Agree: item.agree ? 'Yes' : 'No',
          Date: item.date
        }))}
      />
    </div>
  );
}

export default App;
