import React, { useState } from "react";

const Country = ({ country,handleVisitedCountries }) => {
    const [visited, setVisited]=useState(false);


    const handleVisited =()=>{
        if(visited){
            setVisited(false);
        }
        else{
            setVisited(true);
        }
        handleVisitedCountries(country);
    }
  return (
    <div className={`card ${visited && 'visited'}`}>
      <img src={country.flags.flags.png} alt="" />
      <h2>NAME: {country.name.common.toUpperCase()} </h2>
      <h3>
        Population:
        <span style={{ color: "#05fd79" }}>
          {" "+ country.population.population} 
        </span>
      </h3>
      <h3>Capital: {country.capital.capital}</h3>
      <h3>Region: {country.region.region}</h3>
      <h3>Continents: {country.continents.continents}</h3>
      <p style={{ color: "#fefd29" }}>Area: {country.area.area} {country.area.area>300000? 'Big Country':'Small Country'} </p>
      <button onClick={handleVisited}>{visited? "Visited" : "Not Visited"}</button>
    </div>
  );
};

export default Country;
