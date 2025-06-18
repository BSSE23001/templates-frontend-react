import React from 'react';
import { Modal } from 'react-bootstrap';
import { useModal } from '../contexts/modal.context';

const ModalContextComponent = () => {
  const { modalConfig, closeModal } = useModal();

  return (
      <Modal
      show={modalConfig.show}
      onHide={closeModal}
      backdrop={modalConfig.backdrop}
      size={modalConfig.size}
      centered={modalConfig.centered}
      scrollable={modalConfig.scrollable}
    >
      {modalConfig.title && (
        <Modal.Header closeButton>
          <Modal.Title>{modalConfig.title}</Modal.Title>
        </Modal.Header>
      )}

      {modalConfig.body && <Modal.Body>{modalConfig.body}</Modal.Body>}

      {modalConfig.footerButtons && <Modal.Footer>{modalConfig.footerButtons}</Modal.Footer>}
    </Modal>
  );
};

export default ModalContextComponent;



// Example Usage
//  export const SomeComponent = () => {
//   const { showModal, closeModal } = useModal();

//   const handleClick = () => {
//     showModal({
//       title: 'Context Modal',
//       body:
//       <>
//         <p>This modal is opened from context!</p>
//         <h1>You are talli Balli</h1>
//       </>
//       ,
//       footerButtons: (
//         <>
//           <Button variant="secondary" onClick={() => closeModal()}>
//             Close
//           </Button>
//         </>
//       ),
//     });
//   };

//   return <Button onClick={handleClick}>Open Modal</Button>;
// };