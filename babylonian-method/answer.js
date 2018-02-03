const squareRoot = (radicand, guess) => {
  if(radicand < 0 || Number.isNaN(radicand) || !Number.isFinite(radicand)) {
    return Number.NaN;
  }

  guess = guess ? guess : (radicand / 2.0);
  let quotient = radicand / guess;
  let newGuess = (quotient + guess) / 2.0;

  if (guess === newGuess) {
    return guess;
  }

  return squareRoot(radicand, newGuess);
};

module.exports = squareRoot;
