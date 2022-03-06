import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export function Sidebar() {
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar_generic">
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
  </div>;
}
