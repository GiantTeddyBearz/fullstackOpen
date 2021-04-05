const express = require('express')
const app = express()

app.use(express.json())
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/info', (req, res) => {
  res.send(`<p>${persons.length}</p>
          <p>${new Date}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.filter(person => person.id === id)
  if (person) {
    res.send(persons.filter(person => person.id === id))
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.filter(person => person.id === id)
  
  if (person) {
    res.send(person)
    persons = persons.filter(person => person.id != id)
  } else {
    res.status(404).end()
  }
})

const generateId = () => {
  return Math.floor(Math.random() * 100000 % 100000)
}

app.post('/api/persons/', (req, res) => {
  const body = req.body;
  
  if (!body.name || !body.number){
    return res.status(400).json({
      error: "name and number must be included"
    })
  } else if (persons.find(person =>
    person.name === body.name
  )) {
    return res.status(400).json({
      error: "name must be unique"
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }
  persons = persons.concat(person)
  res.json(person)
})

const PORT = 3001
app.listen(PORT)