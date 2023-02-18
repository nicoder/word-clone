import React from 'react';
import RestartButton from '../RestartButton';

function LosingBanner({answer, restartGame}) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton restartGame={restartGame} />
    </div>
  );
}

export default LosingBanner;
