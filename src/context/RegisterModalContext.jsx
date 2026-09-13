import { createContext, useContext, useState } from "react";
import RegisterModal from "../components/RegisterModal";

const defaultValue = {
  isOpen: false,
  modalStep: 1,
  setModalStep: () => {},
  openRegisterModal: () => {},
  closeRegisterModal: () => {},
};

const RegisterModalContext = createContext(defaultValue);

export function RegisterModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  const openRegisterModal = (step = 1) => {
    setModalStep(step);
    setIsOpen(true);
  };

  const closeRegisterModal = () => {
    setIsOpen(false);
  };

  return (
    <RegisterModalContext.Provider
      value={{
        isOpen,
        modalStep,
        setModalStep,
        openRegisterModal,
        closeRegisterModal,
      }}
    >
      {children}
      <RegisterModal />
    </RegisterModalContext.Provider>
  );
}

export function useRegisterModal() {
  const context = useContext(RegisterModalContext);
  return context || defaultValue;
}
