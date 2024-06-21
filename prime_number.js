function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // console.log(Math.sqrt(num));
      if (num % i === 0) {
        //   console.log(num % i === 0);
        return false;
      }
    }
    return true;
  }
  function findPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  console.log(findPrimes(20));