import React from 'react';

function GuessInput({addGuess, enabled}) {
  const [guess, setGuess] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        addGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={!enabled}
      />
    </form>
  );
}

export default GuessInput;
