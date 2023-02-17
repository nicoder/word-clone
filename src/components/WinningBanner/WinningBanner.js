import React from 'react';

function WinningBanner({nbGuesses}) {
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
    </div>
  );
}

export default WinningBanner;
