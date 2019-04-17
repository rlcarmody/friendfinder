/* eslint-disable func-names */
const friends = require('../data/friends');
const Friend = require('../data/friendBuilder');

module.exports = function (app) {
  app.get('/api/friends', (_request, response) => {
    response.send(friends);
  });

  app.post('/api/friends', (request, response) => {
    const user = request.body;
    try {
      const userObj = new Friend(user.name, encodeURI(user.photoURL), user.scores.map(e => parseInt(e, 10)));
      // eslint-disable-next-line arrow-body-style
      const bestMatch = friends.reduce((curr, prev) => {
        return curr.compScore(userObj.scores) < prev.compScore(userObj.scores) ? curr : prev;
      });
      friends.push(userObj);
      response.send(bestMatch);
    } catch (e) {
      response.status(400).send(e.message);
    }
  });
};
