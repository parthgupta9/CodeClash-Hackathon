import React from 'react'
import img from "../assets/unsplash.jpg"
import '../components/Frequently.css'
const Frequently = () => {
  return (
    <div class="maindiv">
        <img class="harshu" src={img}/>
        <div class="harsh">
            <p>Frequently asked questions !</p>
           <a href="https://www.quora.com/Which-is-the-best-hotel-in-Shimla"><u>Best suites in Shimla</u> ?</a><br/>
           <a href="https://www.quora.com/How-do-I-book-a-hotel-online"><u>How to Book a hotel</u> ?</a><br/>
           <a href="https://www.quora.com/What-is-the-best-place-to-stay-in-Manali"><u>Best hotels near mall road Manali</u> ?</a><br/>
           <a href="https://www.quora.com/What-are-the-spiritual-places-and-temples-in-Nainital#:~:text=1.,eye%20of%20Goddess%20Sati%20fell."><u>Best temples near Nanital</u> ?</a>
        </div>
    </div>
  )
}

export default Frequently
