import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/actions/index";
import Button from "react-bootstrap/Button";
import "./index.css";

export const Loguin = () => {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect, logout } = useAuth0();

  const [mouseOver, setMouseOver] = useState({});

  const handleMouseOver = () => {
    setMouseOver({ user });
  };

  const handleMouseOut = () => {
    setMouseOver({});
  };

  useEffect(() => {
    if (user) {
      dispatch(LoginUser(user, isAuthenticated));
    }
  }, [user]);
  return (
    <>
      {isAuthenticated ? (
        <div
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={() => handleMouseOut()}
          className="content_auth_0"
        >
          <div className="content_image">
            <Button variant="outline-light" onClick={() => logout()}>
              Logout
            </Button>
          </div>
          <div>
            <img className="image_auth_0" src={user?.picture}></img>
          </div>
          {/* {handleSubmit()} */}
          <div className="onMouseOver">
            <span>{mouseOver.user?.given_name}</span>
            <span>{mouseOver.user?.email}</span>
          </div>
        </div>
      ) : (
        <Button variant="outline-light" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      )}
    </>
  );
};
