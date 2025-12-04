"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type CursorVariant = "default" | "hover";

interface CursorContextType {
  cursorVariant: CursorVariant;
  textEnter: () => void;
  textLeave: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  const textEnter = () => setCursorVariant("hover");
  const textLeave = () => setCursorVariant("default");

  return (
    <CursorContext.Provider value={{ cursorVariant, textEnter, textLeave }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context)
    throw new Error("useCursor must be used inside a CursorProvider");
  return context;
};
