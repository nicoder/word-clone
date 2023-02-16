import React from 'react';

import {range} from '../../utils';

function Guess({guess}) {
  return (
    <p className="guess">
      {guess
        ? guess.map((guess, i) => (
            <span key={i} className={'cell ' + guess.status}>{guess.letter}</span>
          ))
        : range(5).map((i) => <span key={i} className="cell"></span>)}
    </p>
  );
}

export default Guess;
