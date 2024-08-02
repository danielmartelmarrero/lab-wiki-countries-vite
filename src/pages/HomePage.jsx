import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
function HomePage(){

    const [countries, setCountries] = useState([])
    
    useEffect(()=>{
        axios.get("https://ih-countries-api.herokuapp.com/countries").then((countriesObj)=>{
    
            setCountries(countriesObj.data)
            console.log(countries)
        }) 
    },[])
    
    return (
        <>
        <h1>WikiCountries: Your Guide to the World</h1>
        
        {countries.map((oneCountry)=>{
            return(
                    <div className="countryDiv" key={uuid()}>
                        <Link to={`/${oneCountry.alpha3Code}`} className="countryLink">{oneCountry.name.common}</Link>
                    </div>
            )
        })}
        
        </>
    )
}

export default HomePage;
