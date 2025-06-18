// Dashboard.jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InfoCardGrid from '../components/infoCardGrid.component';
import ProgressBarComponent from '../components/progressCard.component';

const Dashboard = () => {
  const cardData = [
    { title: 'Users', body: '1,234', variant: 'info' },
    { title: 'Revenue', body: '$56,789', variant: 'success' },
    { title: 'Products', body: '320', variant: 'warning' },
    { title: 'Feedbacks', body: '210', variant: 'danger' },
  ];

  const progressData = [
    { label: 'Profile Completion', now: 80, variant: 'success' },
    { label: 'Project Completion', now: 55, variant: 'info' },
    { label: 'Target Achievement', now: 30, variant: 'warning' },
  ];

  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>

      <Row className="mb-4">
        {cardData.map((card, idx) => (
          <Col key={idx} sm={12} md={6} lg={3} className="mb-3">
            <InfoCardGrid {...card} />
          </Col>
        ))}
      </Row>

      <h4 className="mt-5">Progress</h4>
      {progressData.map((bar, idx) => (
        <ProgressBarComponent key={idx} {...bar} />
      ))}

    </div>
  );
};

export default Dashboard;
