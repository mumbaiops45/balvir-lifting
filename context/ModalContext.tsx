"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const ModalCtx = createContext<{ open: boolean; toggle: () => void }>({
  open: false, toggle: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalCtx.Provider value={{ open, toggle: () => setOpen(o => !o) }}>
      {children}
    </ModalCtx.Provider>
  );
}

export const useModal = () => useContext(ModalCtx);
