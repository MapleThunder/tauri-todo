import { useState, useEffect } from "react";
import firebase from "firebase";
import { format, differenceInDays } from "date-fns";
import { collatedTasksExist } from "../helpers";

export function useTasks(selectedProject) {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "7iFwbJODRJNzEnKzFbvh");

    // if (selectedProject && !collatedTasksExist(selectedProject)) {
    //   unsubscribe = unsubscribe.where("projectId", "==", selectedProject);
    // }
    // else {
    //   if (selectedProject === "TODAY") {
    //     unsubscribe = unsubscribe.where(
    //         "date",
    //         "==",
    //         format(Date.now(), "DD/MM/YYYY")
    //       )
    //   }
    //   else {
    //     if (selectedProject === "INBOX" || selectedProject === 0) {
    //       unsubscribe = unsubscribe.where("date", "==", "")
    //     }
    //   }
    // }
    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            format(Date.now(), "DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                differenceInDays(task.date, Date.now()) <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
}

export function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", "7iFwbJODRJNzEnKzFbvh")
      .orderBy("projectId")
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          docId: project.id,
          ...project.data(),
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects };
}
