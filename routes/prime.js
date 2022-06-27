const express = require('express');
const router = express.Router();

router.post('/method1', (req, res) => {
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

router.post('/method2', (req, res) => {
  const { num } = req.body;

  const sieve = [];
  sieve[0] = false;
  sieve[1] = false;

  // assuming that all numbers are prime except 0 and 1.
  for (let i = 2; i <= num; i++) {
    sieve[i] = true;
  }

  // checking for prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (sieve[i]) {
      // all multiples of a prime are not prime
      for (let j = i * i; j <= num; j += i) {
        sieve[j] = false;
      }
    }
  }

  const prime = [];
  // pushing all the prime numbers to prime array
  for (let i = 2; i <= num; i++) {
    prime.push(i);
  }
  console.log(prime);

  res.status(200).json(prime);
});

module.exports = router;
