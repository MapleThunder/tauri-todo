import { Tasks } from "../Tasks";
import { Sidebar } from "./Sidebar";

export function Content() {
  return (
    <section>
      <Sidebar />
      <Tasks />
    </section>
  );
}
