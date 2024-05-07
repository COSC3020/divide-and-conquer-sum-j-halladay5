[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The reccurance relation for this algorithm is based off of mergesort, except we aren't sorting, just splitting
the array into smaller pieces recursively. The only difference is that instead of splitting into two with every recursive call it's three.
So for T(n), the base case is T(1) = 1, where the array can't be split into 3 subarrays anymore, and it just returns the value in the array.
For T(n) where n can be split into 3 subarrays, it would be 3 T(n/3) + 1. Where T(n/3) represents splitting the array into 3 subarrays,
and multiplying by 3 stands for the 3 recursive calls that are made. The +1 stands for the constant time to return the value. 
The recurrance relation is $$\ 3^i T(n/3^i) + \sum_{k=0}^i 3^i $$
Solving the reccurance relation, T(n) reaches it's base case when $\ i = log{_3} n $. Simplifying we get n * T(1) + n. 
The base case of T(1) =1, so n *1 + n. Ignoring constants and coefficients, we get $\Theta(n)$ for our complexity. 
