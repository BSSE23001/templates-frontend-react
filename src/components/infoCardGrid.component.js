import React from 'react';
import { Card, Col, Row , Container } from 'react-bootstrap';

/**
 * InfoCardGrid
 *
 * Props:
 * - cards: Array of {
 *     title: string | JSX,
 *     body: string | JSX,
 *     footer?: string | JSX,
 *     icon?: JSX,
 *     variant?: string (default: 'light'),
 *     onClick?: function
 *   }
 * - columns: Number of columns in a row (default: 3)
 */
const InfoCardGrid = ({ cards = [], columns = 3 }) => {
  const colSize = Math.floor(12 / columns); // Bootstrap 12-column grid

  return (
    <Container>
        <Row className="g-4">
        {cards.map((card, idx) => (
            <Col key={idx} md={colSize}>
            <Card
                bg={card.variant || 'light'}
                text={card.variant === 'light' ? 'dark' : 'white'}
                className="shadow-sm h-100"
                onClick={card.onClick}
                style={{ cursor: card.onClick ? 'pointer' : 'default' }}
            >
                <Card.Body>
                <div className="d-flex align-items-center mb-2">
                    {card.icon && <span className="me-2 fs-4">{card.icon}</span>}
                    <Card.Title className="mb-0">{card.title}</Card.Title>
                </div>
                <Card.Text>{card.body}</Card.Text>
                </Card.Body>
                {card.footer && (
                <Card.Footer className="small text-muted">{card.footer}</Card.Footer>
                )}
            </Card>
            </Col>
        ))}
        </Row>
    </Container>
  );
};

export default InfoCardGrid;


// EXAMPLE USAGE
// import { PeopleFill, BookHalf, AwardFill } from 'react-bootstrap-icons';
// export const DashboardCards = () => {
//   const cardData = [
//     {
//       title: 'Total Students',
//       body: '1,240 enrolled',
//       icon: <PeopleFill />,
//       variant: 'primary',
//       footer: 'Updated just now',
//       onClick: () => alert('Students clicked'),
//     },
//     {
//       title: 'Courses Available',
//       body: '38 active courses',
//       icon: <BookHalf />,
//       variant: 'success',
//       footer: 'Includes upcoming ones',
//     },
//     {
//       title: 'Top Performer',
//       body: 'Alice Johnson',
//       icon: <AwardFill />,
//       variant: 'warning',
//       footer: 'Last week\'s assessment',
//     },
//   ];

//   return <InfoCardGrid cards={cardData} columns={3} />;
// };