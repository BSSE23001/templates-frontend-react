const { createContext, useContext, useState } = require("react");


const ToastContext = createContext();

export const ToastContextProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    const addToast = ({title = '', message, type = "success"}) => {
        const id = Date.now();
        setToasts([...toasts, {id,title,message,type}]);
        setTimeout(()=>removeToast(id), 3000);
    };

    const removeToast = (id) => {
        setToasts((prev)=>prev.filter((t) => t.id !== id));
    }

    return (
        <ToastContext.Provider value={{toasts,addToast}}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);