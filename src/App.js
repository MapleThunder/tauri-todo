import { Header } from "./components/layouts/Header";
import { Content } from "./components/layouts/Content";
import { ProjectsProvider } from "./context/projects-context";
import { SelectedProjectProvider } from "./context/selected-project-provider";
import "./styles/base.scss";

export function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}
