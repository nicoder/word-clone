import React from 'react';
import RestartButton from '../RestartButton';

function WinningBanner({nbGuesses, restartGame}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {nbGuesses} {nbGuesses > 1 ? 'guesses' : 'guess'}
        </strong>
        .
      </p>
      <RestartButton restartGame={restartGame}/>
    </div>
  );
}

export default WinningBanner;
