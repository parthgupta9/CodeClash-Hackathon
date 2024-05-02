import React from 'react'
import Designer from '../assets/Designer.png'
import './navbar.css'
import Ellipse from '../assets1/Ellipse 4.png'
import Ellips from '../assets1/Ellipse 5.png'

const Navbar = () => {
  return (
   <div className='navbar'>
     <div className='img'>

        <img src={Designer} alt="" />
       <ul className='list'>
        <li className='lis' id='first'><a>Discover</a></li>
        <li className='li' id='second'><a>Trips</a></li>
        <li className='li' id='third'><a>Reviews</a></li>
        <li className='li' id='fourth'><a>More</a></li>
       </ul>

      <div className="image">
      <img src={Ellipse} alt="" />
      <img src={Ellips} alt="" />
      </div>
    </div>
   </div>
  )
}

export default Navbar