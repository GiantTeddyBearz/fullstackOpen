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
  const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises
  const sum = course.parts.reduce(reducer, 0);

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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const copy = courses.map((value) => 
    <Course key={value.id}
    course={value}
    />
  )
  return (
    <div>
      {copy}
        
    </div>
    )
  /*      <Header course={course} />
      <Content course={course} />
      <Total course={course} />*/
}

ReactDOM.render(<App />, document.getElementById('root'))