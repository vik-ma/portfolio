"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

// Context for Modal component to deal with the additional modal 
// opened by enlarging a preview image on a project's page

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
