import React from 'react'

const Single = ({country}) => (
    <div>
        <h1>
            {country.name}
        </h1>
        <div>
            capital {country.capital}
            <br/>
            population {country.population}
        </div>
        <h2>
            languages
        </h2>
        <ul>
            {country.languages.map(language => <li>{language.name}</li>)}
        </ul>
        <div>
            <img src={country.flag} width="100" height="100"/>
        </div>
    </div>
)

export default Single