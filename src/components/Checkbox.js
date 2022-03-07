import { doc, updateDoc } from "firebase/firestore";
import { firebase } from "../firebase";

export function Checkbox({ id }) {
  async function archiveTask(e) {
    e.preventDefault();
    console.log(e);
    const taskDocRef = doc(firebase, "tasks", id);
    try {
      await updateDoc(taskDocRef, { archived: true });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
}
