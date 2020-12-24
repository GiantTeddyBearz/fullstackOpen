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
const Statistic = ({text, value, final}) => {
  if (isNaN(value)){
    return(
      <>
      <tr>
        <td> {text} </td>
        <td> 0 {final} </td>
      </tr>
      </>
    )
  }
  return(
      <>
      <tr>
        <td> {text} </td> 
        <td> {value} {final}</td>
      </tr>
      </>
    )
  }

const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad;
  if (good == 0 && neutral == 0 && bad == 0){
    return (
      <>
      <Title text='statistics'/>
      <div>
        <p>No feedback given</p>
      </div>
      </>
    )
  }
  return (
  <>
    <Title text='statistics'/>
    <div>
      <table>
        <tbody>
        <Statistic text='good' value={good}/>
        <Statistic text='neutral' value={neutral}/>
        <Statistic text='bad' value={bad}/>
        <Statistic text='all' value={all}/>
        <Statistic text='average' value={(good - bad)/all}/>
        <Statistic text='positive' value={good/all * 100} final='%'/>
        </tbody>
      </table>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

