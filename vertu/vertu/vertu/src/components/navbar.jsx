import React, {useState} from 'react';
import '../navbar.css'
import logo from '../Images/logovertu.jpg'
import SearchBar from '../Searchbar';
import location from '../Images/location.png';
import person from '../Images/person.png';
import love from '../Images/love.png';



function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    return (
      <nav className="nav">
        <a href="#" className="nav__brand">
        <img className='logo' src={logo} alt ="Main_image" />
        </a>
        <ul className={active}>
          <li className="nav__item"> 
            <a href="#" className="nav__link">
            <p> New cars  <i class="arrow down"></i></p>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            <p> Used cars  <i class="arrow down"></i></p>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            <p> Servicing <i class="arrow down"></i></p>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            <p> Commercials <i class="arrow down"></i></p>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
            <p> Motability <i ></i></p>
            </a>
           
          </li>
        </ul>
        <SearchBar/>
        <li className='lilnav'>
        <img className='location' src={location} alt ="location-image" />
        <p className='findus'>Find us</p>
        </li>
        <li className='lilnav' >
        <img className='location' src={love} alt ="love-image" />
        <p className='save'>Save</p>
        </li>
        <li className='lilnav'>
        <img className='location' src={person} alt ="person-image" />
        <p className='login'>Log in</p>
        </li>

        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;