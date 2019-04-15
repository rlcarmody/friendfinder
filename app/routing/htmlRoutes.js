/* eslint-disable func-names */
const path = require('path');

module.exports = function (app) {
  app.get('/survey', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/survey.html'));
  });
  app.get('*', (_request, response) => {
    response.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
