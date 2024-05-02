import React from 'react'
import anding from '../assets/Frame 18 (1).png'
import landing from  "../assets/Delhi Tourism 1.png"
import main from "../assets/Jaipur.jpg"
import imgg from '../assets/down.png'

const Landing = () => {
  return (
    <div><div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={anding} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={landing} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={main} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    {/* <img src={imgg} style={{marginTop:"-80px"}}></img> */}
    <br/>
    <br/>
    <hr/>
  </div>
  </div>

  )
}

export default Landing