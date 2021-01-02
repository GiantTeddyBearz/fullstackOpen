import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsServices from './services/persons.js'

const App = () => {
  const [ persons, setPersons ] = useState([]);

  useEffect(() => {
    personsServices
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
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

  const handleDelete = (id) => {
    let result = window.confirm(`Delete ${persons.find(person => person.id === id).name}`)
    if (!result){
      return;
    }
      personsServices
      .adelete(id)
      .then(response => {
        console.log('success')
      }
      )
      setPersons(persons.filter(persons => persons.id != id))

  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0){
      let result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (!result){
        return;
      }
      
      let newId = persons.find(person => person.name === newName).id;

      const newPerson = {
        name: newName,
        id: newId,
        number: newNumber
      }

      personsServices
      .update(newId, newPerson)
      .then(response => 
        setPersons(persons.filter(person => person.name != newName).concat(response))
      )
      return;
    }

    const addedPerson = {
      name: newName,
      number: newNumber
    }

    personsServices
      .create( addedPerson)
      .then(response => {
        setPersons(persons.concat(response))
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
      <Persons persons={persons} newFilter={newFilter} buttonHandler={handleDelete}/>
      
    </div>
  )
}

export default App