import React from "react";
import PropTypes from "prop-types";
import "./AnimalCard.css";
import logo from "../../../assets/cat-logo.png";


export default function CatCard({cat}) {

    return (
        <div className="cat-card">
            <img src={logo} alt={cat.name}style={{width: '100%'}} />
            <div className="cat-card-title" style={{marginTop: '20px'}}>{cat.name}, {cat.age}</div>
            <div className="cat-card-title">{cat.location}</div>
        </div>
    );
}

CatCard.propTypes = {
    cat: PropTypes.object.isRequired,
  };