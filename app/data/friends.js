const Friend = require('./friendBuilder');

const defaultFriend = new Friend(
  'Default',
  'https://www.adelaidereview.com.au/content/uploads/2018/03/teddy-bear-loneliness-800x567.jpg',
  [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
);
module.exports = [defaultFriend];
