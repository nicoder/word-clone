import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard';
import PreviousGuesses from '../PreviousGuesses';
import WinningBanner from '../WinningBanner';
import LosingBanner from '../LosingBanner';

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => {
    // Pick a random word on every pageload.
    const initialAnswer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({initialAnswer});
    return initialAnswer;
  });

  const addGuess = (guess) => setGuesses([...guesses, guess]);
  const status = getStatus(guesses, answer);
  const restartGame = () => {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    // To make debugging easier, we'll log the solution in the console.
    console.info({nextAnswer});
    setGuesses([]);
  };

  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} enabled={status === 'running'} />
      <Keyboard guesses={guesses} answer={answer} />
      {status === 'won' && (
        <WinningBanner nbGuesses={guesses.length} restartGame={restartGame} />
      )}
      {status === 'lost' && (
        <LosingBanner answer={answer} restartGame={restartGame} />
      )}
    </>
  );
}

function getStatus(guesses, answer) {
  if (guesses.includes(answer)) return 'won';
  if (guesses.length === NUM_OF_GUESSES_ALLOWED) return 'lost';
  return 'running';
}

export default Game;
