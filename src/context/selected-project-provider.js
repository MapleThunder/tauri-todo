import { createContext, useContext, useState } from "react";

const SelectedProjectContext = createContext();

function SelectedProjectProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState("INBOX");

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
}

function useSelectedProjectValue() {
  return useContext(SelectedProjectContext);
}

export { SelectedProjectProvider, useSelectedProjectValue };
