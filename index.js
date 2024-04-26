const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const number1 = req.body.number1;
  const number2 = req.body.number2;
  if (!number1 || !number2 || isNaN(number1) || isNaN(number2)) {
    res.status(400).json({ error: 'Invalid numbers' });
  } else {
    const result = number1 + number2;
    res.json({ result: result });
  }
});

app.get("/", (req, res) => {
    res.send("Hidncecdek")
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
