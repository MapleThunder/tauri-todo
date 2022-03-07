import { Header } from "./components/layouts/Header";
import { Content } from "./components/layouts/Content";
import "./styles/base.scss";

export function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}
