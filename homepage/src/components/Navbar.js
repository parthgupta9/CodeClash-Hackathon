import React from 'react'
import Desiner from '../assets/Designer.png'
import '../components/navbar.css'
import Ellipse from '../assets/Ellipse 4.png'
import pic from '../assets/Ellipse 5.png'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" >
    <div className='img'><img src={Desiner}/></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='second'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Discover</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Trips</a>
        </li>
     
        <li className="nav-item">
          <a className="nav-link" href="#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">More</a>
        </li>
      </ul>
      <div className='pic'>
      <img className="third" src={Ellipse}></img>
      <img className="third" src={pic}></img>
      </div>
    </div>

  </div>
</nav>
    </div>
  )
}

export default Navbar