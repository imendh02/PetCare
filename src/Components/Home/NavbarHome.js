import React, { useEffect, useState } from 'react'
import {RiSearchLine} from "react-icons/ri";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import "./NavbarHome.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const NavbarHome = () => {
  const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
        } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    var loginButton;
  if (user) {
    loginButton = <><Link to="/"><button className="SignUp">{name}</button></Link>
    <Link to="/"><button className="Login" onClick={logout}>Log out</button></Link></>
  } else {
    loginButton = <><Link to="/LoginSignup"><button className="SignUp">Sign Up</button></Link>
    <Link to="/LoginSignup"><button className="Login">Login</button></Link> </>
  }

  return (
    <nav id="nav">
      <Link to="/"><img src={logo} alt='logo'/></Link>
      <div className="NavMenu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/">Services Request</a></li>
        <li><a href="#Service">Services</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      </div>
      <div  className="NavBtn">
        <RiSearchLine size='2.5em'/>
        <div>
        {loginButton}
        </div>
      </div>
    </nav>
  )
}

export default NavbarHome