import React from 'react';

import {checkGuess} from '../../game-helpers';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {range} from '../../utils';

import Guess from '../Guess';

function PreviousGuesses({guesses, answer}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} guess={checkGuess(guesses[i], answer)} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
