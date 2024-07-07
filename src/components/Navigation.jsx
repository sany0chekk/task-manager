import { Link, NavLink } from "react-router-dom";
import SearchTasks from "./SearchTasks";
import { FaTasks } from "react-icons/fa";
import { IoIosSettings, IoMdHelpCircle } from "react-icons/io";

const Navigation = () => {
  return (
    <div className="flex items-center p-4 bg-neutral-700 rounded-md">
      <Link to="/" className="font-semibold text-lg">
        Task Manager
      </Link>

      <SearchTasks />

      <nav className="flex items-center gap-5 ml-auto">
        {[
          [
            <>
              <FaTasks /> Tasks
            </>,
            "/tasks",
          ],
          [
            <>
              <IoIosSettings /> Settings
            </>,
            "/settings",
          ],
          [
            <>
              <IoMdHelpCircle /> Help
            </>,
            "/help",
          ],
        ].map(([title, url], index) => {
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
              {title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
