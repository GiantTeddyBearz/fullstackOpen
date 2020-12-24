import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Title = ({text}) => (
  <h1>
    {text}
  </h1>
)
const Display = ({text, value, final}) => {
  if (isNaN(value)){
    return(
      <>
      {text} 0 {final}
      </>
    )
  }
  return(
      <>
      {text} {value} {final}
      </>
    )
  }

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseBad = () => setBad(bad + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  let all = good + bad + neutral;
  return (
    <div>
      <Title text='give feedback'/>
        <div>
          <Button handleClick={increaseGood} text='good'/>
          <Button handleClick={increaseNeutral} text='neutral'/>
          <Button handleClick={increaseBad} text='bad'/>  
        </div>
      <Title text='statistics'/>
        <div>
          <p>
          <Display text='good' value={good}/>
          <br/>
          <Display text='neutral' value={neutral}/>
          <br/>
          <Display text='bad' value={bad}/>
          <br/>
          <Display text='all' value={all}/>
          <br/>
          <Display text='average' value={(good - bad)/all}/>
          <br/>
          <Display text='positive' value={good/all * 100} final='%'/>
          </p>
        </div>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

