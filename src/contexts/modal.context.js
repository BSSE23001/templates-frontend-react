import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({
    show: false,
    title: null,
    body: null,
    footerButtons: null,
    backdrop: true,
    size: 'md',
    centered: true,
    scrollable: false,
  });

  const showModal = (config = {}) => {
    setModalConfig({
      ...modalConfig, // fallback defaults
      ...config,      // override with new values
      show: true,
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, show: false }));
  };

  return (
    <ModalContext.Provider value={{modalConfig, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);