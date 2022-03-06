import { firebase } from "../firebase";

export function Checkbox({ id }) {
  function archiveTask() {
    firebase.firestore().collection("tasks").doc(id).update({ archived: true });
  }

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="chackbox" />
    </div>
  );
}
