import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  

  if(currentUser) fetch();
  console.log(currentUser);
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/home.png" alt="" />
          <span>Rentify</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/list">View All Properties</Link>
        <Link to="/">About</Link>
       
       
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <span>Profile</span>
            </Link>
            <Link to="/add" className="newpost">
              <span>Create New Post</span>
             </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
           <a href="/">Home</a>
        <a href="/list">View All Properties</a>
        <a href="/">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
