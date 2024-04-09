import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
<nav class="navbar navbar-expand-lg  bg-danger">
  <div class="container-fluid">
    <div class="collapse navbar-collapse col-md-8" id="navbarNav">
      <ul class="navbar-nav col-md-8">
        <li class="nav-item">
          <Link class="nav-link text-light" to="/">Home 🎂</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/contacto"> Contacto 📝</Link>
        </li> 
      </ul>
    </div>
  </div>
  
  <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="navbar-brand text-light" to="/" > Anime's Cakes 🐱‍👤 </Link>
        </li>
        </ul>
  
  
</nav>
    );
}

export default Navbar;