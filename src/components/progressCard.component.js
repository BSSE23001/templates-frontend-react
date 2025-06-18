import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

/**
 * ProgressCard
 *
 * Props:
 * - title?: string | JSX (optional heading)
 * - description?: string | JSX (optional subtext)
 * - progress: number (required, 0 to 100)
 * - label?: string (default shows percent)
 * - variant?: Bootstrap variant ('success', 'info', 'danger', etc.)
 * - striped?: boolean
 * - animated?: boolean
 */
const ProgressCard = ({
  title,
  description,
  progress,
  label,
  variant = 'primary',
  striped = false,
  animated = false,
}) => {
  return (
    <Card className="shadow-sm">
      {title && <Card.Header className="fw-bold">{title}</Card.Header>}
      <Card.Body>
        {description && <Card.Text>{description}</Card.Text>}

        <ProgressBar
          now={progress}
          label={label || `${progress}%`}
          striped={striped}
          animated={animated}
          variant={variant}
        />
      </Card.Body>
    </Card>
  );
};

export default ProgressCard;


// EXAMPLE COMPONENT USAGE
// export const ProgressExample = () => (
//   <div className="container mt-4">
//     <ProgressCard
//       title="Course Completion"
//       description="You've completed 75% of the React course."
//       progress={75}
//       variant="success"
//       striped
//       animated
//     />

//     <div className="mt-4" />

//     <ProgressCard
//       title="Storage Used"
//       description="5.4 GB of 10 GB used"
//       progress={54}
//       variant="info"
//       label="5.4 GB"
//     />
//   </div>
// );