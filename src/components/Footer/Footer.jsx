import React from 'react'
import './Footer.css'
import youtube_icons from '../../assets/youtube_icon.png'
import instagram_icons from '../../assets/instagram_icon.png'
import twitter_icons from '../../assets/twitter_icon.png'
import facebook_icons from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-icons">
        <img src={youtube_icons} alt=""  className='icon'/>
        <img src={instagram_icons} alt=""  className='icon'/>
        <img src={twitter_icons} alt="" className='icon' />
        <img src={facebook_icons} alt="" className='icon' />
       </div>
   
       <div className="text">
<ul>
 <li>Audio Description </li>
 <li>Help Centre</li>
 <li>Gift Card</li>
 <li> Media Centre </li>
 <li> investor Relations </li>
 <li> Jobs </li>
 <li> Terms of Use </li>
 <li>Privacy</li>
 <li> Legal Notices </li>
 <li> Cookie preferences</li>
 <li>Corporate information  </li>
 <li> Contact Us</li>
 </ul>
<p className='copyright-text'>© 1997-2023 Netflix, inc.</p>
</div>

</div>

         






   
  )
}

export default Footer