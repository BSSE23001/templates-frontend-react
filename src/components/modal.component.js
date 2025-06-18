import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalComponent = ({
  show,                     // Boolean: Modal visibility
  onClose,                  // Function: Callback to close modal
  title = null,             // Optional title
  body = null,              // Optional body JSX/content
  footerButtons = null,     // Optional footer JSX (buttons/actions)
  backdrop = true,          // Default backdrop true (can be 'static')
  size = 'md',              // sm, md, lg, xl
  centered = true,          // Center modal
  scrollable = false,       // Enable scroll inside modal body
}) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop={backdrop}
      size={size}
      centered={centered}
      scrollable={scrollable}
    >
      {/* Conditionally render title only if provided */}
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}

      {/* Conditionally render body */}
      {body && <Modal.Body>{body}</Modal.Body>}

      {/* Conditionally render footer if buttons/actions are provided */}
      {footerButtons && (
        <Modal.Footer>
          {footerButtons}
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default ModalComponent;


// Example Usage
//  export const SomeComponent = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className="container mt-5">
//       <Button variant="primary" onClick={() => setShowModal(true)}>Open Modal</Button>

//       <ModalComponent
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         title="Confirm Action"
//         body={<p>Are you sure you want to delete this record?</p>}
//         footerButtons={
//           <>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//             <Button variant="danger" onClick={() => { alert("Deleted"); setShowModal(false); }}>Delete</Button>
//           </>
//         }
//         size="md"
//         centered={true}
//         scrollable={false}
//       />
//     </div>
//   );
// };