import './Tripstyle.css'
import React from 'react'
import TripData from './TripData';
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="trip-card">
            <TripData
            propimg={Trip1}
            heading="Trip in Italy"
            text="Italy, a land steeped in history and culinary excellence, is a captivating destination for travelers. From the grandeur of the Colosseum in Rome to the enchanting canals of Venice, Italy is a living museum of cultural landmarks. Along its coastline, the Amalfi Coast and Cinque Terre offer breathtaking vistas and charming coastal towns."
            />
            <TripData
            propimg={Trip2}
            heading="Trip in Indonesia"
            text="Indonesia, an archipelago of more than 17,000 islands, beckons travelers with its incredible cultural diversity, breathtaking landscapes, and warm hospitality. Bali stands out as a tropical paradise, boasting lush jungles, vibrant nightlife, and pristine beaches, making it a favored destination for those seeking relaxation and adventure."
            />
            <TripData
            propimg={Trip3}
            heading="Trip in Greece"
            text="Greece, a country steeped in ancient history and Mediterranean charm, is a captivating destination in southeastern Europe. With its iconic white-washed buildings against a backdrop of the deep blue Aegean Sea, Greece offers a picture-perfect setting for travelers. "
            />
        </div>
    </div>
  )
}

export default Trip