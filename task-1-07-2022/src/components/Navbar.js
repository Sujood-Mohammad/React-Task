import { Link, NavLink} from "react-router-dom";

function Nvabar() {
    return (
<div className="container-fluid">
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div style={{display:'inline'}} class="row collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#ff0000' : '#545e6f',
    background: isActive ? 'black' : '#f0f0f0',
  })} class="nav-link" to="/">Home </NavLink>
      </li> &#160;&#160;

      <li class="nav-item">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#ff0000' : '#545e6f',
    background: isActive ? 'black' : '#f0f0f0',
  })} class="nav-link" to="/MoviesList">Movies list</NavLink>
      </li>&#160;&#160;   
      
        <li class="nav-item">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#ff0000' : '#545e6f',
    background: isActive ? 'black' : '#f0f0f0',
  })} class="nav-link" to="/About">About us</NavLink>
      </li>
   
    
 
    </ul>
  
  </div>
</nav>
 </div>
    );
}
export default Nvabar;