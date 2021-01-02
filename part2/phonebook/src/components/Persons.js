import React from 'react'
import Number from './Number'

const Persons =  ({persons,newFilter, buttonHandler}) => (
<div>
{persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    .map(person => 
        <div key={person.name}>
            <Number person={person}/> <button onClick={() => {
                buttonHandler(person.id)
            } }> delete </button>
            <br/>
        </div>
)
}
</div>
)

export default Persons