import { useToast } from "../contexts/toast.context";
import { Toast, ToastContainer } from "react-bootstrap";


const ToastContextComponent = () => {
    const {toasts} = useToast();

    return (
        <ToastContainer position="bottom-end">
            {toasts.map((t) => (
            <Toast 
                key={t.id}
                bg={t.type}
                className="m-2"
                style={{ width: 'fit-content' }}
            >
            {t.title && (
              <Toast.Header closeButton={false}>
                <strong className="me-auto">{t.title}</strong>
              </Toast.Header>
            )}
            <Toast.Body className="text-white">{t.message}</Toast.Body>
            </Toast>
            ))}
        </ToastContainer>
    );

}

export default ToastContextComponent;


//  Example Usage
//   export const NotificationDemo = () => {
//   const { addToast } = useToast();

//   return (
//     <>
//       <Button
//         onClick={() => addToast({ title: 'Success', message: 'Saved successfully!', variant: 'success' })}
//         className="me-2"
//       >
//         Success
//       </Button>
//       <Button
//         onClick={() => addToast({ title: 'Error', message: 'Something went wrong!', variant: 'danger' })}
//       >
//         Error
//       </Button>
//     </>
//   );
// }