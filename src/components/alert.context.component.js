import { useAlert } from "../contexts/alert.context"
import { Alert } from 'react-bootstrap';

const AlertContextComponent = () => {
    const {alert} = useAlert();
    if(!alert) return null;

    return (
        <div className="position-fixed top-0 start-0 w-100 d-flex justify-content-center" style={{ zIndex: 999999999 }}>
            <Alert 
                variant={alert.type} 
                className="mt-2"
                style={{ width: 'fit-content' }}
            >
                {alert.message}
            </Alert>
        </div>
    );
};

export default AlertContextComponent;