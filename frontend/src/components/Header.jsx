import { useDispatch, useSelector } from "react-redux";
import { unAuthUser } from "../reducer/userReducer";
import { NavLink, useNavigate } from "react-router";
import { externRouter } from "../utils/helper";
import { triggerNotification } from "../reducer/notificationReducer";

const Header = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(unAuthUser());
    window.localStorage.clear();
  };
  triggerNotification;

  return (
    <nav>
      <div className="nav-group">
        <span
          className="pointer"
          onClick={() =>
            dispatch(
              triggerNotification({
                content: "Not available yet",
                type: "info",
              }),
            )
          }
        >
          <img src="/icons/apple-icon.svg" width={20} />
        </span>

        <NavLink
          to="/blogs"
          data-testid={"blogs-link"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active-link" : ""
          }
        >
          blogs
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active-link" : ""
          }
        >
          users
        </NavLink>
      </div>
      <div className="nav-group">
        {user && <>{user.username} is logged in</>}
        <button onClick={handleLogout} data-testid="logout-btn" name="logout">
          logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
