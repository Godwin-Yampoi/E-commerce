import React from 'react'
import logo from './Assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-logo'>
           <img src={logo} alt='logo' />
           </div>
            <ul className='footer-links'>
                <li>Contacts</li>
                <li>Company</li>
                <li>About</li>
                <li>Help</li>

            </ul>

            <div className='media-icons'>
              <div className='media-container'>
              <InstagramIcon/>
              </div>
              <div className='media-container'>
              <LinkedInIcon/>
              </div>
              <div className='media-container'>
              <PinterestIcon/>
              </div>
            </div>
       
            <div className='Copyright'>
                 <hr/>
              <p>Copyright @ 2023.All rights reserved</p>
            </div>

        </div>
      

  )
}

export default Footer
