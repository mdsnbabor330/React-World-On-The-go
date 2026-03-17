import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setvisitedCountries]= useState([]);

    const handleVisitedCountries=(country)=>{
       const newVisitedCountries = [...visitedCountries,country];
       setvisitedCountries(newVisitedCountries);
    }
    const countriesContent = use(countriesPromise);
    const countries=countriesContent.countries;
    return (
        <div>
             <h1>IN THE COUNTRIES: {countries.length}</h1>
              <h2>Total Country Visited: {visitedCountries.length}</h2>
              <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3} >{country.name.common}</li>)
                }
              </ol>
             <div  className='container'>{
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
             }</div>
        </div>
    );
};

export default Countries;