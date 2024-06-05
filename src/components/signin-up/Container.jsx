import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Socialmediaicons from "../socialMediaIcons/Socialmediaicons";
import "./style.scss";

const Container = () => {
  return (
// {/*classNameName={this.state.signupactive? "container right-panel-active" : "container"} id="container"*/}
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i><FaUser/></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i><FaLock/></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
              <Socialmediaicons />
            
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i ><FaUser/></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            <i ><FaEnvelope/></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
            <i><FaLock/></i>
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
            <p>
              Enter your personal details to use all of site features
            </p>
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