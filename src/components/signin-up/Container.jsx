import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Socialmediaicons from "../socialMediaIcons/Socialmediaicons";
import "./style.scss";
import { useRecoilState } from "recoil";
import { $Users } from "../../store/atom";
import { useRef, useState } from "react";

const Container = () => {
  const [joinType, setjoinType] = useState();
  const [Users] = useRecoilState($Users);
  const email = useRef();

  const handleChange = () => {
    let email_value = email.current.value;
    let pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,}\b/;
    let email_valid = pattern.test(email_value);
    if (email_valid) {
      // valid email pattern
      searchMail(email_value);
    } else {
      //incorrect email pattern
      setjoinType();
    }
  };

  function searchMail(email) {
    let emailIndex = Users.findIndex((user) => {
      return user.email.toLowerCase() == email.toLowerCase();
    });
    if (emailIndex == -1) {
      //email not found in our sys. Invoke to registration
      setjoinType("register");
      // alert("register");
    } else {
      //email found in our sys. Invoke to login
      setjoinType("login");
      // alert("login");
    }
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            {joinType == "login" ? (
              <h2 className="title">login</h2>
            ) : joinType == "register" ? (
              <h2 className="title">Register</h2>
            ) : null}

            <div className="input-field">
              <i>
                <FaUser />
              </i>
              <input
                type="text"
                placeholder="Username"
                ref={email}
                onChange={handleChange}
              />
            </div>
            {joinType == "login" ? (
              <>
                <div className="input-field">
                  <i>
                    <FaLock />
                  </i>
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" className="btn solid" />
              </>
            ) : joinType == "register" ? (
              <>
                <div className="input-field">
                  <i>
                    <FaLock />
                  </i>
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-field">
                  <i>
                    <FaLock />
                  </i>
                  <input type="password" placeholder="Retype Password" />
                </div>
                <input type="submit" value="Register" className="btn solid" />
              </>
            ) : null}

            <Socialmediaicons />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i>
                <FaUser />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <FaEnvelope />
              </i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i>
                <FaLock />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <Socialmediaicons />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Enter your personal details to use all of site features</p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Container;
