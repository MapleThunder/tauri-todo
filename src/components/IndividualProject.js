import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { FaTrashAlt } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { firebase } from "../firebase";
import styled from "@emotion/styled";

export function IndividualProject({ project }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  async function deleteProject(docId) {
    const taskDocRef = doc(firebase, "projects", docId);
    try {
      await deleteDoc(taskDocRef);
      setProjects([...projects]);
      setSelectedProject("INBOX");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <span className="dot">•</span>
      <span className="project-name">{project.name}</span>
      <span
        className="project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <FaTrashAlt />
        {showConfirm && (
          <DeleteModal>
            <div className="inner">
              <p>Are you sure you want to delete this project ?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
              </button>
              <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
            </div>
          </DeleteModal>
        )}
      </span>
    </>
  );
}

const DeleteModal = styled.div`
  position: relative;

  .inner {
    display: block !important;
    box-shadow: var(--bs);
    position: absolute;
    border-radius: 3px;
    z-index: 99;
    width: 200px !important;
    padding: 10px;
    top: 10px;
    right: 0;
    background-color: white;

    p {
      margin-top: 5px;
      margin-bottom: 5px;
      line-height: normal;
      font-weight: normal;
      font-size: 15px;
    }

    button {
      width: 75px;
      background-color: var(--delete);
      color: #fff !important;
      border: 1px solid transparent;
      margin-right: 5px;
      margin-top: 10px;
      font-weight: bold;
      font-size: 13px !important;
      line-height: 17px;
      padding: 6px 12px 7px 12px;
      position: relative;
      display: inline-block;
      white-space: nowrap;
      border-radius: 3px !important;
      text-decoration: none !important;
      text-align: center;
      cursor: pointer;
    }

    span {
      color: #555;
      cursor: pointer;
      font-size: 14px;
      margin: 2px 5px;
      font-weight: normal;
    }
  }
`;
