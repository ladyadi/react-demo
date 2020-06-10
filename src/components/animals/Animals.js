import React, { useState, useEffect } from "react";
import "./Animals.css";
import Search from "../search/Search";
import AnimalCard from "./AnimalCard/AnimalCard";
import { connect } from "react-redux";
import { loadCats } from "../../redux/actions/cat/catActions";
import {loadDogs} from "../../redux/actions/dog/dogActions";
import PropTypes from "prop-types";

export function Animals({
    history,
    loadCats, 
    cats, 
    loadDogs,
    dogs,
    loading
}) {


    console.log('ANIMAL TYPE', history.location.pathname)
    const animalType = history.location.pathname;
    const [filteredCats, setFilteredCats] = useState([]);
    const [filteredDogs, setFilteredDogs] = useState([]);

    useEffect(() => {
        if (animalType === '/cats') {
            if (!cats.length) {
                loadCats().catch((err) => {
                    console.log('ERR', err);
                });
            } else {
                setFilteredCats(cats);
            }
        } else if (animalType === '/dogs') {
            if (!dogs.length) {
                loadDogs().catch((err) => {
                    console.log('ERR', err);
                });
            } else {
                console.log('dogs in animals', dogs)
                setFilteredDogs(dogs);
                console.log('filtered dogs', filteredDogs)
            }
        }
    }, [cats, dogs, loadCats, loadDogs, animalType]);

    function onSearch(searchText) {
        setFilteredCats(
          cats.filter((cat) =>
            cat.name.toLowerCase().includes(searchText.toLowerCase())
          )
        );
    }

    return cats.length === 0 ? (
        <div className="cats-loading">
            Loading...
        </div>
    ) : (
        <div className="cats-grid"> 
            <div className="cats-search-box">
                <Search onSearch={onSearch} />
            </div>
            <div className="cats-list-box">
                <div className="cats-list">
                    {animalType === '/cats' ? 
                    filteredCats.map((cat) => (
                        <AnimalCard key={cat.id} animalType="cat" cat={cat} />
                    )) :
                    filteredDogs.map((dog) => (
                        <AnimalCard key={dog.id} animalType="dog" dog={dog} />
                    ))}
                </div>
            </div>
        </div>
    )
    
    // return cats.length === 0 ? (
    //     <div className="cats-loading">
    //         Loading...
    //     </div>
    // ) : (
    //     <div className="cats-grid"> 
    //         <div className="cats-search-box">
    //             <Search onSearch={onSearch} />
    //         </div>
    //         <div className="cats-list-box">
    //             <div className="cats-list">
    //                 {filteredCats.map((cat) => (
    //                     <CatCard key={cat.id} cat={cat} />
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // )
}

Animals.propTypes = {
    cats: PropTypes.array.isRequired,
    loadCats: PropTypes.func.isRequired,
    dogs: PropTypes.array,
    loadDogs: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    // history: PropTypes.object.isRequired,
    // apiCallError: PropTypes.func.isRequired,
  };

  function mapStateToProps(state) {
      console.log('state.dogs', state.dogs)
    return {
      cats: state.cats,
      dogs: state.dogs,
      loading: state.apiCallsInProgress > 0,
    };
  }

  const mapDispatchToProps = {
    loadCats,
    loadDogs,
    // apiCallError,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Animals);