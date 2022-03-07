import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { firebase } from "../firebase";
import { format, differenceInDays } from "date-fns";
import { collatedTasksExist } from "../helpers/collatedTasksExist";

export function useTasks(selectedProject) {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let qry;
    if (selectedProject && !collatedTasksExist(selectedProject)) {
      qry = query(
        collection(firebase, "tasks"),
        where("userId", "==", "7iFwbJODRJNzEnKzFbvh"),
        where("projectId", "==", selectedProject)
      );
    } else if (selectedProject === "TODAY") {
      qry = query(
        collection(firebase, "tasks"),
        where("userId", "==", "7iFwbJODRJNzEnKzFbvh"),
        where("date", "==", format(Date.now(), "DD/MM/YYYY"))
      );
    } else if (selectedProject === "INBOX" || selectedProject === 0) {
      qry = query(
        collection(firebase, "tasks"),
        where("userId", "==", "7iFwbJODRJNzEnKzFbvh"),
        where("date", "==", "")
      );
    } else {
      qry = query(
        collection(firebase, "tasks"),
        where("userId", "==", "7iFwbJODRJNzEnKzFbvh")
      );
    }

    onSnapshot(qry, (snapshot) => {
      let newTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
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
  }, [selectedProject]);

  return { tasks, archivedTasks };
}
