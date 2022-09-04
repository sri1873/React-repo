const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
  if (req.query.srsearch === 't') {
    res.send({
      query: {
        search: [
          {
            snippet: `
              <img src="asdf" onerror="document.body.innerHTML = '<h1>HAHAHA, I control this app now!!!</h1>';"></img>
            `,
          },
        ],
      },
    });
  } else {
    res.send({
      query: {
        search: [],
      },
    });
  }
});

app.listen(3001);
