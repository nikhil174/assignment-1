const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const { num } = req.body;

  if (!num) {
    return res.status(400).json({ msg: 'please provide a number' });
  }

  const ans = [];

  for (let i = 2; i <= num; i++) {
    let temp = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) temp = 1;
    }
    if (temp === 0) {
      ans.push(i);
    }
  }

  res.status(200).json(ans);
});

app.listen(5000, () => {
  console.log('Server is active on port 5000');
});
