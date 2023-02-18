import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard';
import PreviousGuesses from '../PreviousGuesses';
import WinningBanner from '../WinningBanner';
import LosingBanner from '../LosingBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => setGuesses([...guesses, guess]);
  const status = getStatus(guesses, answer);

  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} enabled={status === 'running'} />
      <Keyboard guesses={guesses} answer={answer} />
      {status === 'won' && <WinningBanner nbGuesses={guesses.length} />}
      {status === 'lost' && <LosingBanner answer={answer} />}
    </>
  );
}

function getStatus(guesses, answer) {
  if (guesses.includes(answer)) return 'won';
  if (guesses.length === NUM_OF_GUESSES_ALLOWED) return 'lost';
  return 'running';
}

export default Game;
