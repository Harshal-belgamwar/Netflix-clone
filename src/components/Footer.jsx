import React from 'react'
import twitter from '../assets/twitter_icon.png'
import facebook from '../assets/facebook_icon.png'
import instagram from '../assets/instagram_icon.png'
import youtube from '../assets/youtube_icon.png'


const Footer = () => {
  return (
    <div>
      <div className='Icons flex flex-row gap-5  mt-10 justify-center'>
        <img src={facebook} alt='facebook' className='w-10 h-10 m-2'/>
        <img src={twitter} alt='twitter' className='w-10 h-10 m-2'/>
        <img src={instagram} alt='facebook' className='w-10 h-10 m-2'/>
        <img src={youtube} alt='twitter' className='w-10 h-10 m-2'/>



      </div>
      <ul className='text-white grid grid-cols-3 mt-10 gap-5 ml-[20%]'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>corporate Information</li>
        <li>contact us</li>
      </ul>

      <p className='text-white mt-5 flex justify-center'>@ 1997-2003 Netflix, Inc.</p>


    </div>
  )
}

export default Footer