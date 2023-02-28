import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const Part = (props) => {
  return (
    <div>
  <p>{props.part1} {props.exercises1}</p>
  <p>{props.part2} {props.exercises2}</p>
  <p>{props.part3} {props.exercises3}</p>
  </div>
  )
}

const Total =(props) => {
  return(
  <p>{props.exercise1 + props.exercise2 + props.exercise3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part 
        part1 = {part1}  exercise1 = {exercises1}
        />
        <Part part2 = {part2}  exercise2 = {exercises2}
        />
        <Part part3 = {part3}  exercise3 = {exercises3}
        />
      <Total Number of exercises = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
