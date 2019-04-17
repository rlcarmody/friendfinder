class Friend {
  constructor(name, photoURL, scores) {
    if (typeof name === 'string' && name) {
      this.name = name;
    } else throw new Error('Invalid Name');
    if (typeof photoURL === 'string' && photoURL.substr(0, 4) === 'http') {
      this.photoURL = photoURL;
    } else throw new Error('Invalid URL');
    if (Array.isArray(scores) && scores.length === 10 && scores.every(e => typeof e === 'number')) {
      this.scores = scores;
    } else throw new Error('Scores are not a valid array');
  }

  compScore(friendArray) {
    return friendArray.reduce((total, current, i) => total + Math.abs(current - this.scores[i]), 0);
  }
}

module.exports = Friend;
