import styled from "@emotion/styled";
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
    <CheckboxStyles
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </CheckboxStyles>
  );
}

const CheckboxStyles = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: content;
  line-height: 16px;

  .checkbox {
    cursor: pointer;
    border: var(--border);
    border-color: gray;
    color: #343434;
    height: 16px;
    width: 16px;
    display: block;
    border-radius: 16px;
  }
`;
