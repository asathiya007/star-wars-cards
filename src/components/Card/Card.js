import React from "react";
import "./Card.css";

const Card = ({name, world, wikiLink, image}) => {
    return (
        <div className="tc bg-black dib br4 pa4 ma3 grow bw2 shadow-5 ba b--yellow">
            <img src={image} alt="" height="400px" width="300px" style={
                {
                    borderRadius: "10px",
                    objectFit: "cover"
                }
            }/>
            <h3 className="f4">{name}</h3>
            <p>{world}</p>
        </div>
    );
}

export default Card;