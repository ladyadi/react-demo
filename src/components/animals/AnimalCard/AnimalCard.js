import React from "react";
import PropTypes from "prop-types";
import "./AnimalCard.css";
import catImg from "../../../assets/cat-logo.png";
import dogImg from "../../../assets/dog-logo.png";


export default function AnimalCard({animalType, cat, dog}) {

    return animalType === 'cat' ? (
        <div className="animal-card">
            <img src={catImg} alt={cat.name}style={{width: '100%'}} />
            <div className="animal-card-title" style={{marginTop: '20px'}}>{cat.name}, {cat.age}</div>
            <div className="animal-card-title">{cat.location}</div>
        </div>
    ) : (
        // <div>dogs</div>
        <div className="animal-card">
            <img src={dogImg} alt={dog.name}style={{width: '100%'}} />
            <div className="animal-card-title" style={{marginTop: '20px'}}>{dog.name}, {dog.age}</div>
            <div className="animal-card-title">{dog.location}</div>
        </div>
    );
}

AnimalCard.propTypes = {
    animalType: PropTypes.string,
    cat: PropTypes.object,
    dog: PropTypes.object,
  };