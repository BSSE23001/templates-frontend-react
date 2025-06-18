// pages/Employee.jsx
import React, { useState } from 'react';
import DynamicTabs from '../components/dynamicTabs.component';
import DynamicForm from '../components/dynamicForm.component';
import DataTable from '../components/datatable.component';
import { PersonAdd, Table } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

const EmployeePage = () => {
  const formSchema = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter employee name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter employee email', required: true },
    { name: 'position', label: 'Position', type: 'text', placeholder: 'e.g. Developer, HR', required: true },
    { name: 'department', label: 'Department', type: 'select', required: true,
      options: [
        { label: 'Engineering', value: 'Engineering' },
        { label: 'HR', value: 'HR' },
        { label: 'Sales', value: 'Sales' },
        { label: 'Support', value: 'Support' },
      ]
    }
  ];

  const [data, setData] = useState(() => {
    const stored = localStorage.getItem('employees');
    return stored ? JSON.parse(stored) : [];
  });

  const handleFormSubmit = (formData) => {
    const newData = { ...formData, id: data.length + 1 };
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));
  };

  const tableColumns = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Position', key: 'position' },
    { label: 'Department', key: 'department' },
  ];

  const tabs = [
    {
      eventKey: 'form',
      title: 'Add Employee',
      icon: <PersonAdd />,
      tooltip: 'Add a new employee',
      content: (
        <DynamicForm
          fields={formSchema}
          onSubmit={handleFormSubmit}
          submitLabel="Add Employee"
        />
      )
    },
    {
      eventKey: 'table',
      title: 'Employee List',
      icon: <Table />,
      tooltip: 'View all employees',
      content: (
        <DataTable
          data={data}
          columns={tableColumns}
          filterKeys={['name', 'email', 'position', 'department']}
          title="All Employees"
        />
      )
    }
  ];

  return (
    <Container className="mt-4">
      <h3 className="mb-3 text-success">Employee Management</h3>
      <DynamicTabs tabs={tabs} />
    </Container>
  );
};

export default EmployeePage;
