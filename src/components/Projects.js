import { useState } from "react";
import { useSelectedProjectValue } from "../context/selected-project-provider";
import { useProjectsValue } from "../context/projects-context";
import styled from "@emotion/styled";
import { IndividualProject } from "./IndividualProject";

export function Projects({ activeValue = null }) {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => (
      <ProjectsStyles
        key={project.projectId}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={active === project.projectId ? "active project" : "project"}
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setActive(project.projectId);
              setSelectedProject(project.projectId);
            }
          }}
        >
          <IndividualProject project={project} />
        </div>
      </ProjectsStyles>
    ))
  );
}

const ProjectsStyles = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;

  &:hover .project-delete {
    display: flex;
  }

  div:nth-of-type(1) {
    padding: 5px 0;
    padding-left: 10px;
    padding-right: 15px;
    width: 100%;
    display: flex;
    align-items: center;

    svg {
      color: var(--light-grey);
    }
  }

  &.active,
  &:hover {
    font-weight: bold;
    background-color: white;
  }

  &:nth-of-type(1) {
    .dot {
      color: var(--colour-1);
    }
  }
  &:nth-of-type(2) {
    .dot {
      color: var(--colour-3);
    }
  }
  &:nth-of-type(3) {
    .dot {
      color: var(--colour-3);
    }
  }
  &:nth-of-type(4) {
    .dot {
      color: var(--colour-4);
    }
  }
  &:nth-of-type(5) {
    .dot {
      color: var(--colour-5);
    }
  }

  .dot {
    margin-right: 10px;
    font-size: 30px;
  }

  .project-delete {
    margin-left: auto;
    display: none;

    svg {
      color: var(--light-grey);
    }
  }
`;
