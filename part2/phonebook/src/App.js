import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, []
  )

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const handleChange = (event) => { //handles change in input box and updates newName to it.
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleChanges = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) =>{
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const baseUrl = 'http://localhost:3001/persons';
    if (persons.filter(person => person.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const addedPerson = {
      name: newName,
      number: newNumber
    }

    axios
      .post(`${baseUrl}`, addedPerson)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
    console.log('button clicked', event.target)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter}/>

      <h2>add a new</h2>
      <PersonForm newName={newName} handleChange={handleChange} newNumber={newNumber} handleChanges={handleChanges} addPerson={addPerson}/>
      
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter}/>
      
    </div>
  )
}

export default App