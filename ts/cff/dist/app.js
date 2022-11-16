"use strict";
function primesLessThan(m) {
    const numsLessThanM = [...Array(m).keys()];
    return numsLessThanM
        .filter((x) => x > 2)
        .reduce((primes, cur) => {
        return primes.every((p) => cur % p !== 0) ? primes.concat(cur) : primes;
    }, [2]);
}
const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const primes = primesLessThan(100);
console.log(expectedPrimes.join(",") === primes.join(","));
