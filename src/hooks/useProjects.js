import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firebase } from "../firebase";

export function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const q = query(
      collection(firebase, "projects"),
      where("userId", "==", "7iFwbJODRJNzEnKzFbvh"),
      orderBy("projectId")
    );
    onSnapshot(q, (snapshot) => {
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
