// write function fib(n) that takes in a number as an argument.
//the function should return the "nth" number of the fib sequence.

//The first and second number of the sequence is 1.
// to generate the next number in the sequence, we add the previous two.

// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// pos(n): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...

// const fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// this function is fine for calling "n" as long as it's a low number.
// We get into some efficiency issues as "n" increases.
// This is considered to have an O(n²)

// With memoization, we can pass an object "memo" as a parameter to
// fib function, that will have a key of "n" and a value of the returned
// value from the function. This way, we can check "memo" first to see if
// "n" exists. If it does, we return it first to avoid redundancy.

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// To explain how this change works, when the function runs, it will
// run down the recursive calls, going to n <= 2, which will return 1.
// From there, the function will compute the value of the first two
// numbers, adding them and then storing them in memo. What this allows
// the function to do is run through the recursive tree from one side only,
// as the fib function checks the memo first for "n" and returns it if it
// exists within the object. This step severely cuts down runtime and allows
// the time complexity to go from exponential to linear time:

//  O(N²) => O(n)

// By memoizing the fib function, you cut down on recursive calls. This
// is what gives this variation the power of linear time.
