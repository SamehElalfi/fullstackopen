import { React, useState } from "react";

const Button = ({ onClickHandler, text }) => (
  <button onClick={onClickHandler}>{text}</button>
);
const Buttons = (props) => (
  <>
    <Button onClickHandler={props.goodHandler} text="Good" />
    <Button onClickHandler={props.naturalHandler} text="Natural" />
    <Button onClickHandler={props.badHandler} text="Bad" />
  </>
);

const Result = ({ title, value }) => <p> {title}: <b>{value}</b> </p>;
const Statistics = ({ good, natural, bad }) => {
  if (!good && !natural && !bad) {
    return <p>No feedback given</p>;
  }

  const all = good + natural + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <>
      <Result title="Good" value={ good }/>
      <Result title="Natural" value={ natural }/>
      <Result title="Bad" value={ bad }/>
      <Result title="All" value={ all }/>
      <Result title="Average" value={average.toFixed(2) + "%"} />
      <Result title="Positive" value={positive.toFixed(2) + "%"}/>
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [natural, setNatural] = useState(0);
  const [bad, setBad] = useState(0);

  const increase = (value, handler) => handler(value + 1);

  return (
    <>
      <h1>Give Feedback</h1>
      <Buttons
        goodHandler={() => increase(good, setGood)}
        naturalHandler={() => increase(natural, setNatural)}
        badHandler={() => increase(bad, setBad)}
      />

      <h2>Statistics</h2>
      <Statistics good={good} natural={natural} bad={bad} />
    </>
  );
}

export default App;
