import { Header } from "./components/layouts/Header";
import { Content } from "./components/layouts/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
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
