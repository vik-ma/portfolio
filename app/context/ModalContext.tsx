"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ModalContextProps {
  isEnlargeModalOpen: boolean;
  setIsEnlargeModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextProps>({
  isEnlargeModalOpen: false,
  setIsEnlargeModalOpen: () => {},
});

/* @ts-ignore */
export const ModalContextProvider = ({ children }) => {
  const [isEnlargeModalOpen, setIsEnlargeModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isEnlargeModalOpen: isEnlargeModalOpen,
        setIsEnlargeModalOpen: setIsEnlargeModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
