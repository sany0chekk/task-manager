import { Link, NavLink } from "react-router-dom";
import SearchTasks from "./SearchTasks";
import { FaTasks } from "react-icons/fa";
import { IoIosSettings, IoMdHelpCircle } from "react-icons/io";

const Navigation = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-neutral-700 rounded-md flex-col md:flex-row">
      <Link to="/" className="font-semibold text-lg max-md:hidden">
        Task Manager
      </Link>

      <SearchTasks />

      <nav className="flex items-center gap-5 md:ml-auto">
        {[
          [<FaTasks key="task-icon" />, "Task", "/tasks"],
          [<IoIosSettings key="settings-icon" />, "Settings", "/settings"],
          [<IoMdHelpCircle key="help-icon" />, "Help", "/help"],
        ].map(([icon, title, url], index) => {
          return (
            <NavLink
              key={index}
              to={url}
              className={(isActive) =>
                `font-normal transition -tracking-wide hover:opacity-50 flex items-center gap-1 p-2 rounded-md bg-neutral-500 ${
                  isActive && "bg-neutral-400"
                }`
              }
            >
              {icon}
              <p className="hidden max-md:order-1 md:block">{title}</p>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
