import React from 'react';
import {checkGuess} from '../../game-helpers';

const letterRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].map((w) =>
  w.toUpperCase().split(''),
);

function Keyboard({guesses, answer}) {
  const letterStatuses = getLetterStatuses(guesses, answer);
  return (
    <div>
      {letterRows.map((letters, i) => (
        <LetterRow key={i} letters={letters} letterStatuses={letterStatuses} />
      ))}
    </div>
  );
}

function LetterRow({letters, letterStatuses}) {
  return (
    <div className="letter-row">
      {letters.map((letter, i) => (
        <Letter key={i} value={letter} status={letterStatuses[letter]} />
      ))}
    </div>
  );
}

function Letter({value, status}) {
  return <div className={`letter ${status || ''}`}>{value}</div>;
}

function getLetterStatuses(guesses, answer) {
  let letterStatuses = {};
  guesses.forEach((guess) => {
    checkGuess(guess, answer).forEach(({letter, status}) => {
      letterStatuses[letter] = status;
    });
  });
  return letterStatuses;
}

export default Keyboard;
