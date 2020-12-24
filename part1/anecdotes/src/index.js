import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({handleClick, text}) =>(
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVotes = ({anecdotes, mostVoted}) => {
  return (
  <div>
    {anecdotes[mostVoted]}
  </div>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const points = [];
  function initialize(item, index){
    points[index] = 0;
  }
  anecdotes.forEach(initialize);
  const [mostVoted, setMostVoted] = useState(0);
  const [votes, setVotes] = useState(points);
  const next = () => {
    let select = Math.floor(Math.random() * anecdotes.length);
    setSelected(select);
  }

  const vote = () => {
    const copy = [... votes]; //copies points array.
    copy[selected]++; //increments point at current quote.
    setVotes(copy);
    if (copy[selected] > copy[mostVoted]){
      setMostVoted(selected);
    }
  }
  return (
    <div>
      <div>
        <h1> Anecdote of the day </h1>
        {anecdotes[selected]}
        <br/>
        has {votes[selected]} votes
      </div>
      <Button handleClick={vote} text='vote'/>
      <Button handleClick={next} text='next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <MostVotes anecdotes={anecdotes} mostVoted={mostVoted}/>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render( <App anecdotes={anecdotes}/>, document.getElementById('root') );
