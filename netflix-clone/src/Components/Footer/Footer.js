import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className='big-footer'>
      <div className='Footer'>
        <div className='FooterIcon'>
          <FacebookIcon/> 
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
        <div className='Footer-data'>
          <div>
            <ul>
              <li>audio description</li>
              <li>investor relationds</li>             
              <li>legal notice</li>
              </ul> 
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>jobs</li>             
              <li>Cookie Performance</li>
              </ul> 
          </div>
          <div>
            <ul>
              <li>Gift Card</li>
              <li>Terms of Use</li>             
              <li>Corporate information</li>
              </ul> 
          </div>
          <div>
            <ul>
              <li> Media Center</li>
              <li>Privacy</li>             
              <li>Contact Us</li>
              </ul> 
          </div>

        </div>
        <div className='Srvice-code'>
          <p>
            service code
          </p>
        </div>
        <div className='copy-write'>
          &copy; 2016 Netflix.
        </div>

      </div>

     
    </div>
  )
}

export default Footer
