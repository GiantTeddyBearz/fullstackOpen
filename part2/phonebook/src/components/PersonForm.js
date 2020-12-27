import React from 'react'

const PersonForm = ({newName, handleChange, newNumber, handleChanges, addPerson}) => (
<>
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
</>
)

export default PersonForm