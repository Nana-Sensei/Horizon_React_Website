import React from 'react';
import './horizon.css'

function Card(props) {
  return (
      <div className="card" style={{ width: "20rem" }}>
        <img src={props.imgsrc} className="card-image" alt="..." />
        <div className="card-body">
          <h1 className="cardTitle">{props.cardtitle}</h1>
          <p className="card-text">{props.body}</p>
          <button className="explore-btn">Explore</button>
        </div>
      </div>
  );
}

export default Card;