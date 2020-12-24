import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{ 
    return (
      <p>
        {props.part.part} {props.part.exercises}
      </p>
    )
}
const Content = (props) =>{
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.input[0].exercises + props.input[1].exercises + props.input[2].exercises}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      part: 'Fundamentals of React',
      exercises: 10
    }, {
      part: 'Using props to pass data',
      exercises: 7
    }, {
      part: 'State of a component',
      exercises: 14
    }]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total input={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))