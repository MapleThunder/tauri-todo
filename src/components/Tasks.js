import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks/useTasks";

export function Tasks() {
  const { tasks } = useTasks("1");
  let projectName = "";

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
