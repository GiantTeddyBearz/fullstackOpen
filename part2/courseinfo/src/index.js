import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) =>(
  <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>
  
)
const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p><b>total of {sum} exercises</b></p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  const copy = course.parts.map((value) => 
    <Part key={value.id} name={value.name} exercises={value.exercises}/>
  )
  return (
    <div>
      {copy}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course}/>
  /*      <Header course={course} />
      <Content course={course} />
      <Total course={course} />*/
}

ReactDOM.render(<App />, document.getElementById('root'))