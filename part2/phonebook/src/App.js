import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsServices from './services/persons.js'
import Notification from './components/Notification'
import './index.css'

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
  const [ notiMessage, setNotiMessage ] = useState(null)
  const [ success, setSuccess] = useState(false);
  let timeOut = 1000;

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
        setSuccess(true)
        setPersons(persons.filter(persons => persons.id !== id))
        setNotiMessage(`${persons.find(person => person.id === id).name}'s number has been deleted successfully`)
        setTimeout(() => {
          setNotiMessage(null)
        }, timeOut);
      })
      .catch(error => {
        setSuccess(false);
        setNotiMessage(
          `${persons.find(person => person.id === id).name}'s number has already been deleted.`
        )
        setTimeout(() => {
          setNotiMessage(null)
        }, timeOut);
        setPersons(persons.filter(n => n.id !== id))
      })

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
      .then(response => {
        setPersons(persons.filter(person => person.name !== newName).concat(response))
        setSuccess(true);
        setNotiMessage(`${newName}'s number has been successfully changed`);
        setTimeout(() => {
          setNotiMessage(null);
        }, timeOut)
      }
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
        setSuccess(true);
        setNotiMessage(`${newName}'s number has been successfully added`);
        setTimeout(() => {
          setNotiMessage(null);
        }, timeOut)
      })
    console.log('button clicked', event.target)

  }

  return (
    <div>
      <Notification message={notiMessage} success={success}/>
      <div className="body">
        <div className="phone">
          <h2>PHONEBOOK</h2>
          <Filter newFilter={newFilter} handleFilter={handleFilter}/>
        </div>

        <h2>ADD A NEW</h2>
        <PersonForm newName={newName} handleChange={handleChange} newNumber={newNumber} handleChanges={handleChanges} addPerson={addPerson}/>
        
        <h2>NUMBERS</h2>
        <Persons persons={persons} newFilter={newFilter} buttonHandler={handleDelete}/>
      </div> 
    </div>
  )
}

export default App