import React from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Dropdown from 'react-bootstrap/Dropdown';
import './CSS/navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='full bg-primary'>
        <div className="name">chat</div>

        <div className="search">
          <SearchIcon className="icon" /> {/* Apply a CSS class to the icon */}
          <input type="search" name="" id="search" placeholder='Search' />
        </div>
          <NavLink to='/Notification'>
        <div className="notification">
          <CircleNotificationsIcon className="icon" /> {/* Apply a CSS class to the icon */}
          <span className=''>1</span>
        </div>
        </NavLink>
        <NavLink to='/Post'>
        <div className="person">
          <PermContactCalendarIcon className="icon" /> 

        </div> 
        </NavLink>
        <i className='glyphicon glyphicon-ok-circle'>f</i>

        <div className="dropdown">
          <Dropdown data-bs-theme="dark" className='col-sm'>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="btn-sm">
              LOGOUT
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
