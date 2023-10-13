import DestinationData from "./DestinationData"
import "./Destinationstyle.css"
import React from 'react'
import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/3.jpg"
import mountain4 from "../assets/4.jpg"
const Destination = () => {
  return (
  <div className="destination">
    <h1>Popular Destination</h1>
    <p>Tours give you the opportunity to see a lot within a time frame.</p>
    <DestinationData
    className="first-des"
     heading="Tall Volcano, Batangas"
     text="Tall Volcano is an island within a lake on an island within a lake on an island setup. The volcano's inner crater is surrounded by Taal Lake, which, in turn, is encircled by the large island of Luzon. The intricate layers of land and water offer a stunning example of the Earth's tectonic activity."
     img1={mountain1}  
     img2={mountain2} 
    /> 
     <DestinationData
     className="first-des-reverse"
     heading="Mt. Daguldul, Batangas"
     text="Mt. Daguldul is a mountain located in Batangas, Philippines. It is a popular hiking destination for both novice and experienced hikers due to its manageable difficulty level and the beautiful natural scenery it offers. "
     img1={mountain3}  
     img2={mountain4} 
    /> 
  </div>
  )
}

export default Destination