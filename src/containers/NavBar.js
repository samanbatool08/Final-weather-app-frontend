import React from 'react';
import {NavLink} from 'react-router-dom'


function NavBar(props) {
  const currentUser = props.user.username
  return (
    <div className="navbar">
      {currentUser && <div id="username" className="nav-links">You are logged in, {currentUser}!</div>}
      {currentUser && <div className="nav-links"><NavLink to="/activities" exact>My Activities</NavLink></div> }
      {currentUser && <div className="nav-links"><NavLink to="/weather" exact>Weather</NavLink></div> }
      {/* {currentUser && <div className="nav-links"><NavLink to="/dashboard/paintings" exact>My Paintings</NavLink></div> }
      {currentUser && <div className="nav-links"><NavLink to="/dashboard/collections" exact>My Collections</NavLink></div> } */}
  {currentUser && <div className="last-nav-link"><NavLink to="/" exact>{currentUser ? 'Logout' : 'LogIn' }</NavLink></div> }
    </div>
  );
}

export default NavBar;