import React from 'react'
import Number from './Number'

const Persons =  ({persons,newFilter}) => (
<div>
{persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person =>
          <Number person={person} key={person.name}/>
)
}
</div>
)

export default Persons