import React from "react";
import "./TileCard.css";

const TileCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.handleClick(props.id)} className="clicked">
    </span>
  </div>
);

export default TileCard;
