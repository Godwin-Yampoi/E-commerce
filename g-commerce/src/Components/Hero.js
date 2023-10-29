import React from 'react'
import Lady from './Assets/lady.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = () => {
  return (
    <div className='Hero'>
        <div className='Hero-left'>
        <h2>New Arivalls Only</h2>
        <p>new<br/>collections <br/>for everyone</p>
         </div>
        <div className='latest-button'>
            <button>Latest Collection<ArrowRightAltIcon/></button>
            </div>
        <div className='Hero-right'>
            <img src={Lady} alt="Lady outfit" />
  
       
        </div>
      
    </div>

 
  )
}

export default Hero
