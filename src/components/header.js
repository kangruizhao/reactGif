import React, { Component } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
class Header extends Component {
  render(){
    return(
    <nav>
    <div className="#9e9e9e grey nav-wrapper">
      <Link to="/" className="brand-logo left">KZ-GIFS</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/upload">UpLoad</Link></li>
      </ul>
    </div>
  </nav>
    );
  }
}
export default Header;
