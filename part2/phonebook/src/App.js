import React, { useState } from 'react'
import Number from './components/Number'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => { //handles change in input box and updates newName to it.
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`)
      return;
    }
    
    const addedPerson = {
      name: newName
    }

    setPersons(persons.concat(addedPerson))
    setNewName('')
    console.log('button clicked', event.target)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {persons.map(person =>
          <Number name={person.name} key={person.name}/>
          )
          }
      </div>
    </div>
  )
}

export default App