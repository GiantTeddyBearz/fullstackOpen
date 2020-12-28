import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Display from './components/Display'

function App() {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const countryList = response.data
        setCountries(countryList)
      })
  }
  , [])

  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <div>
        find countries <input value={newFilter} onChange={handleFilter}/>
      </div>
      <Display countries={countries} newFilter={newFilter}/>
    </div>
  )
}

export default App;
