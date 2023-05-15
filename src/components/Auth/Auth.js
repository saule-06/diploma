import "./Auth.css";
import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          Hello <Link to="/orders">{user.displayName}</Link>!
          <button className="Test button" onClick={logOut}><span>Sign out</span></button>
        </span>
      ) : (
        <span>
          {/* Hello guest! */}
          <button className="Test button" onClick={logIn}><span>Sign in</span></button>
        </span>
      )}
    </div>
  );
}