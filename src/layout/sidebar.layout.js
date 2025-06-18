import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SidebarNavigation from '../components/sidebarNavigation.component';
import {
  DashCircle,
  PeopleFill,
  Boxes,
} from 'react-bootstrap-icons';

const SidebarLayout = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: 'Dashboard',
      label: 'Dashboard',
      icon: <DashCircle />,
      tooltip: 'Check the Output',
      onClick: () => navigate('/dashboard')
    },
    {
      key: 'Employees',
      label: 'Employees',
      icon: <PeopleFill />,
      section: 'Management',
      tooltip: 'Manage Employees',
      onClick: () => navigate('/employees')
    },
    {
      key: 'Products',
      label: 'Products',
      icon: <Boxes />,
      section: 'Management',
      tooltip: 'Manage Products',
      onClick: () => navigate('/products')
    }
  ];

  return (
    <div className="d-flex">
      <SidebarNavigation brand="Management System" items={items} />
      <div className="p-4 w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
