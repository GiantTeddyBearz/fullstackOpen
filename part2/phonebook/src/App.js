import React, { useState } from 'react'
import Number from './components/Number'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
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
    if (persons.filter(person => person.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const addedPerson = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(addedPerson))
    setNewName('')
    setNewNumber('')
    console.log('button clicked', event.target)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newFilter} onChange={handleFilter}/>
      </div>

      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
      </form>
      <form>
        <div>
          number: <input value={newNumber} onChange={handleChanges}/>
        </div>
      </form>
      <div>
          <button type="submit" onClick={addPerson}>add</button>
      </div>
      <h2>Numbers</h2>
      <div>
          {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person =>
                    <Number person={person} key={person.name}/>
          )
          }
      </div>
    </div>
  )
}

export default App