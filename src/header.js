import React from "react";
import logo from './logo.svg';

function Header(){
    return(
        <div className="App-header">

      <div className='logo-parent'>
        <a href='/'><img src={logo} alt='logo'></img></a>
        
      </div>

      <div className='links-parent'>
        <a href="/movies" id="nav-help"><i className="fa fa-life-bouy"></i> Movies</a>
        <a href="/orderrating" id="nav-help"><i className="fa fa-life-bouy"></i> Ratings</a>
        <a href="/forum" id="nav-forums"><i className="fa fa-group"></i> Forum</a>
        <a href="/search" id="nav-search"><i className="fa fa-search"></i> Search</a>
        <a href="/token" id="nav-help"><i className="fa fa-life-bouy"></i> Check Token</a>
        <a href="/authenticate" id="nav-member"><i className="fa fa-users"></i> Login</a>
        <a href="/register" id="nav-help"><i className="fa fa-life-bouy"></i> Sign up</a>
        
        {/* <button className='menu-button' onClick={() => setOpen(!isOpen)}>
          <BsPersonCircle />
        </button>
        <nav className={`menu ${isOpen ? "active" : ""}`}>
          <ul className='menu__list'>
            <li className='menu__item'>
              <BsFillPersonFill className='icon' />
              <span>Profile</span>
              </li>
            <li className='menu__item'>
              <BsGiftFill className='icon' />
              <span>Bonus</span>
            </li>
            <li className='menu__item'>
              <BsFillBellFill className='icon' />
              <span>Notify</span>
            </li>
            <li className='menu__item'>
              <BsGeoAltFill className='icon' />
              <span>Location</span>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
    )
}

export default Header;