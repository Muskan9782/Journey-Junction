import './Tripstyle.css'
import React from 'react'

const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className="t-image">
            <img src={props.propimg} alt="image1" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default TripData