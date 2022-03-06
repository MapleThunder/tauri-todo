import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export function Sidebar() {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul>
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>

      <div className="middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
        <ul className="projects"></ul>
      </div>
    </div>
  );
}
