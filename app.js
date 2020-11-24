const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// Data from Thinkful
const apps = [
  {
    "App": "ROBLOX",
    "Category": "GAME",
    "Rating": 4.5,
    "Reviews": "4447388",
    "Size": "67M",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone 10+",
    "Genres": "Adventure;Action & Adventure",
    "Last Updated": "July 31, 2018",
    "Current Ver": "2.347.225742",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Subway Surfers",
    "Category": "GAME",
    "Rating": 4.5,
    "Reviews": "27722264",
    "Size": "76M",
    "Installs": "1,000,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone 10+",
    "Genres": "Arcade",
    "Last Updated": "July 12, 2018",
    "Current Ver": "1.90.0",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Candy Crush Saga",
    "Category": "GAME",
    "Rating": 4.4,
    "Reviews": "22426677",
    "Size": "74M",
    "Installs": "500,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Casual",
    "Last Updated": "July 5, 2018",
    "Current Ver": "1.129.0.2",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Solitaire",
    "Category": "GAME",
    "Rating": 4.7,
    "Reviews": "254258",
    "Size": "23M",
    "Installs": "10,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Card",
    "Last Updated": "August 1, 2018",
    "Current Ver": "2.137.0",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Bubble Shooter",
    "Category": "GAME",
    "Rating": 4.5,
    "Reviews": "148897",
    "Size": "46M",
    "Installs": "10,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Casual",
    "Last Updated": "July 17, 2018",
    "Current Ver": "1.20.1",
    "Android Ver": "4.0.3 and up"
  },
  {
    "App": "Hello Kitty Nail Salon",
    "Category": "GAME",
    "Rating": 4.2,
    "Reviews": "369203",
    "Size": "24M",
    "Installs": "50,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Casual;Pretend Play",
    "Last Updated": "April 17, 2018",
    "Current Ver": "1.5",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "slither.io",
    "Category": "GAME",
    "Rating": 4.4,
    "Reviews": "5234162",
    "Size": "Varies with device",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Action",
    "Last Updated": "November 14, 2017",
    "Current Ver": "Varies with device",
    "Android Ver": "2.3 and up"
  },
  {
    "App": "Clash Royale",
    "Category": "GAME",
    "Rating": 4.6,
    "Reviews": "23133508",
    "Size": "97M",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone 10+",
    "Genres": "Strategy",
    "Last Updated": "June 27, 2018",
    "Current Ver": "2.3.2",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Temple Run 2",
    "Category": "GAME",
    "Rating": 4.3,
    "Reviews": "8118609",
    "Size": "62M",
    "Installs": "500,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Action",
    "Last Updated": "July 5, 2018",
    "Current Ver": "1.49.1",
    "Android Ver": "4.0 and up"
  },
  {
    "App": "Pou",
    "Category": "GAME",
    "Rating": 4.3,
    "Reviews": "10485308",
    "Size": "24M",
    "Installs": "500,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Casual",
    "Last Updated": "May 25, 2018",
    "Current Ver": "1.4.77",
    "Android Ver": "4.0 and up"
  },
  {
    "App": "Helix Jump",
    "Category": "GAME",
    "Rating": 4.2,
    "Reviews": "1497361",
    "Size": "33M",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Action",
    "Last Updated": "April 9, 2018",
    "Current Ver": "1.0.6",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Block Puzzle",
    "Category": "GAME",
    "Rating": 4.6,
    "Reviews": "59800",
    "Size": "7.8M",
    "Installs": "5,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Puzzle",
    "Last Updated": "March 6, 2018",
    "Current Ver": "2.9",
    "Android Ver": "2.3 and up"
  },
  {
    "App": "Angry Birds Rio",
    "Category": "GAME",
    "Rating": 4.4,
    "Reviews": "2610526",
    "Size": "46M",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Arcade",
    "Last Updated": "July 3, 2018",
    "Current Ver": "2.6.9",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Plants vs. Zombies FREE",
    "Category": "GAME",
    "Rating": 4.4,
    "Reviews": "4066989",
    "Size": "69M",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone 10+",
    "Genres": "Strategy",
    "Last Updated": "July 6, 2018",
    "Current Ver": "2.2.00",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Sonic Dash",
    "Category": "GAME",
    "Rating": 4.5,
    "Reviews": "3778921",
    "Size": "75M",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Arcade",
    "Last Updated": "July 26, 2018",
    "Current Ver": "3.8.5.Go",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Candy Crush Soda Saga",
    "Category": "GAME",
    "Rating": 4.4,
    "Reviews": "6198563",
    "Size": "67M",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Casual",
    "Last Updated": "July 10, 2018",
    "Current Ver": "1.118.4",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Zombie Hunter King",
    "Category": "GAME",
    "Rating": 4.3,
    "Reviews": "10306",
    "Size": "50M",
    "Installs": "1,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Mature 17+",
    "Genres": "Action",
    "Last Updated": "August 1, 2018",
    "Current Ver": "1.0.8",
    "Android Ver": "2.3 and up"
  },
  {
    "App": "Clash of Clans",
    "Category": "GAME",
    "Rating": 4.6,
    "Reviews": "44891723",
    "Size": "98M",
    "Installs": "100,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone 10+",
    "Genres": "Strategy",
    "Last Updated": "July 15, 2018",
    "Current Ver": "10.322.16",
    "Android Ver": "4.1 and up"
  },
  {
    "App": "Kick the Buddy",
    "Category": "GAME",
    "Rating": 4.3,
    "Reviews": "1000417",
    "Size": "Varies with device",
    "Installs": "50,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Teen",
    "Genres": "Action",
    "Last Updated": "July 5, 2018",
    "Current Ver": "Varies with device",
    "Android Ver": "4.4 and up"
  },
  {
    "App": "Block Puzzle Classic Legend !",
    "Category": "GAME",
    "Rating": 4.2,
    "Reviews": "17039",
    "Size": "4.9M",
    "Installs": "5,000,000+",
    "Type": "Free",
    "Price": "0",
    "Content Rating": "Everyone",
    "Genres": "Puzzle",
    "Last Updated": "April 13, 2018",
    "Current Ver": "2.9",
    "Android Ver": "2.3.3 and up"
  }
];

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
    const genresLC = genres.toLowerCase()

    // Make sure it includes a valid genre classification
    if (
      genresLC === 'action' || genresLC === 'puzzle' || genresLC === 'strategy' 
      || genresLC === 'casual' || genresLC === 'arcade' || genresLC === 'card'
    ) {
      // filter by lowercased genre
      res.json(results.filter(result => {
        return result.Genres.toLowerCase().includes(genresLC);
      }))
    } else {
      res.status(404).send(
        'Make sure to filter by Action, Puzzle, Strategy, Casual, Arcade, or Card.'
      );
    }
  }

  if (sort) {
    if (sort !== 'rating' && sort !== 'app') {
      res.status(404).send('Make sure to sort by either rating or app.');
    } else if (sort === 'app') {
      res.json(results.sort((a, b) => {
        if (a.App.toLowerCase() > b.App.toLowerCase()) {
          return 1;
        } else if (b.App.toLowerCase() > a.App.toLowerCase()) {
          return -1
        } else {
          return 0;
        }
      }));
    } else if (sort === 'rating') {
      res.json(results.sort((a, b) => {
        if (a.Rating < a.Rating) {
          return 1;
        } else if (b.Rating > a.Rating) {
          return -1
        } else {
          return 0;
        }
      }));
    }
  }

  res.send(results);
});

app.listen(8000, () => {
  console.log('Express server is listening on 8000'); 
});