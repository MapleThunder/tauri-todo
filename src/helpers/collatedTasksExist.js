import { collatedTasks } from "../constants/collatedTasks";

export const collatedTasksExist = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);
