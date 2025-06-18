import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertContextProvider = ({children}) => {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type='info') => {
        setAlert({message, type});
        setTimeout(()=> setAlert(null), 3000);
    };

    return (
        <AlertContext.Provider value={{alert, showAlert}}>
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => useContext(AlertContext);