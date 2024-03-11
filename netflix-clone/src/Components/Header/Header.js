import React from 'react';
import "./Header.css";
import logo from '../../Images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Header() {
  return (
    <div className='big-header'>
      <div className='Header'>
        <div className='Header-left'>
          <ul>
            <li><img src={logo} alt="netflix-logo" width='100'/></li>
            <li>Home</li>
            <li>Tv shows</li>
            <li>Movies</li>
            <li>latest</li>
            <li>My list</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className='Header-right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownCircleIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
