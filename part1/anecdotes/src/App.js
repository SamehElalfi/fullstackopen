import { React, useState } from "react";

const Anecdote = ({ text, votes }) => (
  <>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(props.anecdotes.length).fill(0));
  const indexOfMostVotes = votes.indexOf(Math.max(...votes));

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote text={props.anecdotes[selected]} votes={votes[selected]} />

      <button
        onClick={() => {
          const newVotes = [...votes];
          newVotes[selected] += 1;
          setVote(newVotes);
        }}
      >
        Vote
      </button>
      <button
        onClick={() => {
          setSelected(Math.floor(Math.random() * props.anecdotes.length));
        }}
      >
        Random
      </button>

      <h1>Anecdote with most votes</h1>
      <Anecdote
        text={props.anecdotes[indexOfMostVotes]}
        votes={votes[indexOfMostVotes]}
      />
    </>
  );
};

export default App;
