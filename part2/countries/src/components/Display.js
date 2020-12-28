import React, {useState} from 'react'
import Single from './Single'

const Display = ({countries, newFilter, setFilter}) => {

    let filtered = countries
            .filter(country => 
                country.name.toLowerCase()
                    .includes(newFilter.toLowerCase()));

    if (filtered.length > 10)
        return (
        <div> 
            Too many matches, specify another filter 
        </div>
        )
    if (filtered.length === 1)
        return (
            <Single country={filtered[0]}/>
        )
    return(
    <div>
    {
        filtered.map(country =>
            {
                return (
                    <div key={country.alpha2Code}>
                    {country.name}
                    <button onClick={()=>setFilter(country.name)}>show</button>
                </div>)

            }
        )
    }
  </div>)
}

export default Display