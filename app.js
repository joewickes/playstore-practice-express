const express = require('express');
const morgan = require('morgan');
// Data from Thinkful
const apps = require('./apps.json');

const app = express();
app.use(morgan('dev'));

app.get('/apps', (req, res) => {
  // Sort the list by either rating or app, any other value results in an error, if no value provided do not perform a sort.
  // one of ['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card']If present the value must be one of the list otherwise an error is returned. Filter the list by the given value.

  // Sort & genres destructured from request query object
  const { sort, genres } = req.query;

  // Spread apps array into results
  const results = [...apps];

  // if a genres parameter was passed, filter it appropriately
  if (genres) {
    // make genres case insensitive
    const genresLC = genres.toLowerCase();

    // Make sure it includes a valid genre classification
    if (
      genresLC === 'action' || genresLC === 'puzzle' || genresLC === 'strategy' 
      || genresLC === 'casual' || genresLC === 'arcade' || genresLC === 'card'
    ) {
      // filter by lowercased genre
      return res.json(results.filter(result => {
        return result.Genres.toLowerCase().includes(genresLC);
      }));
    } else {
      return res.status(404).send(
        'Make sure to filter by Action, Puzzle, Strategy, Casual, Arcade, or Card.'
      );
    }
  }

  if (sort) {
    if (sort !== 'rating' && sort !== 'app') {
      return res.status(404).send('Make sure to sort by either rating or app.');
    } else if (sort === 'app') {
      return res.json(results.sort((a, b) => {
        if (a.App.toLowerCase() > b.App.toLowerCase()) {
          return 1;
        } else if (b.App.toLowerCase() > a.App.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      }));
    } else if (sort === 'rating') {
      return res.json(results.sort((a, b) => {
        if (a.Rating > a.Rating) {
          return 1;
        } else if (b.Rating < a.Rating) {
          return -1;
        } else {
          return 0;
        }
      }));
    }
  }

  return res.send(results);
});

module.exports = app;