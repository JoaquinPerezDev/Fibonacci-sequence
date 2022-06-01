// write function fib(n) that takes in a number as an argument.
//the function should return the "nth" number of the fib sequence.

//The first and second number of the sequence is 1. 
// to generate the next number in the sequence, we add the previous two.


// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// pos(n): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...

const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

// this function is fine for calling "n" as long as it's a low number.
// We get into some efficiency issues as "n" increases.
// This is considered to have an O(n²)