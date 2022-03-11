import { useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { collatedTasksExist, getTitle, getCollatedTitle } from "../helpers";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import styled from "@emotion/styled";

export function Tasks() {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = "";

  if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: TTodo`;
  }, [projectName]);

  return (
    <TasksStyles data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </TasksStyles>
  );
}

const TasksStyles = styled.div`
  width: 656px;
  background-color: white;
  margin-left: 266px;
  border-right: var(--border);
  min-height: calc(100vh);
  vertical-align: top;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 80px;
  padding-bottom: 84px;

  @media (max-width: 900px) {
    margin-left: 0;
    width: auto;
  }

  h2 {
    font-size: 20px;
    font-weight: normal;
    margin: 0 30px 20px 0;
  }

  .add-task {
    margin-top: 20px;
  }

  .task-list li {
    display: flex;
    line-height: 18px;
    color: #333;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    list-style-type: none;
    border-bottom: var(--border);
  }
`;
