import { createContext, useContext } from "react";
import { useProjects } from "../hooks/useProjects";

const ProjectsContext = createContext();

function ProjectsProvider({ children }) {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjectsValue() {
  return useContext(ProjectsContext);
}

export { ProjectsProvider, useProjectsValue };
