import { useState } from "react";
import styled from "@emotion/styled";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context/selected-project-provider";
import { Projects } from "../Projects";
import { AddProject } from "../AddProject";

export function Sidebar() {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <SidebarStyles data-testid="sidebar">
      <ul className="generic">
        <li
          data-testid="inbox"
          className={active === "inbox" ? "active" : undefined}
        >
          <div
            data-testid="inbox-action"
            aria-label="Show inbox tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setActive("inbox");
                setSelectedProject("INBOX");
              }
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          data-testid="today"
          className={active === "today" ? "active" : undefined}
        >
          <div
            data-testid="today-action"
            aria-label="Show todays tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive("today");
              setSelectedProject("TODAY");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setActive("today");
                setSelectedProject("TODAY");
              }
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          data-testid="next_7"
          className={active === "next_7" ? "active" : undefined}
        >
          <div
            data-testid="next_7-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive("next_7");
              setSelectedProject("NEXT_7");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setActive("next_7");
                setSelectedProject("NEXT_7");
              }
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 Days</span>
          </div>
        </li>
      </ul>

      <div
        className="middle"
        aria-label="Show/hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setShowProjects(!showProjects);
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </SidebarStyles>
  );
}

const SidebarStyles = styled.div`
  user-select: none;

  width: 266px;
  height: calc(100vh);
  padding-top: 74px;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  border-right: var(--border);
  background-color: var(--background-colour);

  @media (max-width: 900px) {
    display: none;
  }

  li {
    &:hover .project-delete {
      display: flex;
    }
  }

  .generic {
    li {
      list-style-type: none;
      color: var(--text-colour);
      display: flex;
      cursor: pointer;
      line-height: 1.5;
      font-size: 15px;
      padding-left: 0;
      padding-right: 0;

      div:nth-of-type(1) {
        display: flex;
        padding: 10px 0 10px 10px;
        width: 100%;

        span:first-of-type {
          margin-right: 10px;
          display: flex;
          align-items: center;

          svg {
            width: 18px;
            height: 18px;
            color: #555;
          }
        }
      }

      &.active,
      &:hover {
        font-weight: bold;
        background-color: white;
      }
    }
  }

  .middle {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    border-bottom: var(--border);
    padding-left: 10px;
    cursor: pointer;

    span {
      color: #0000008a;
      margin-right: 10px;

      svg.hidden-projects {
        transform: rotate(-90deg);
      }
    }

    h2 {
      margin: 0;
      color: var(--text-colour);
      font-size: 15px;
      font-weight: bold;
      padding-bottom: 20px;
    }
  }

  .projects {
    padding-left: 3px;
  }
`;
