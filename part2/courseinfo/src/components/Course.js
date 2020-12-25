import React from 'react';

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

export default Course