import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './Info.css';

const QuickInfo = () => {
  const Phase1 = ` QuickSort is a Divide and Conquer algorithm. 
      It picks an element as a pivot and partitions the given array around the picked pivot.
      There are many different versions of quickSort that pick pivot in different ways. 

      Always pick the first element as a pivot.
      Always pick the last element as a pivot (implemented below)
      Pick a random element as a pivot.
      Pick median as the pivot.
    
      The key process in quickSort is a partition(). 
      The target of partitions is, given an array and an element x of an array as the pivot,
      put x at its correct position in a sorted array and put all smaller elements (smaller than x) before x,
      and put all greater elements (greater than x) after x. All this should be done in linear time.`;

  const Phase2 = `
     Is QuickSort stable? 
     The default implementation is not stable. 
     However any sorting algorithm can be made stable by considering indexes as comparison parameter. 
    
     Is QuickSort In-place? 
     As per the broad definition of in-place algorithm it qualifies as an in-place sorting algorithm
     as it uses extra space only for storing recursive function calls but not for manipulating the input. 
    
     What is 3-Way QuickSort? 
     In simple QuickSort algorithm, we select an element as pivot,
     partition the array around pivot and recur for subarrays on left and right of pivot. 
     Consider an array which has many redundant elements.
     For example, {1, 4, 2, 4, 2, 4, 1, 2, 4, 1, 2, 2, 2, 2, 4, 1, 4, 4, 4}. 
     If 4 is picked as pivot in Simple QuickSort, we fix only one 4 and recursively process remaining occurrences.
     In 3 Way QuickSort, an array arr[l..r] is divided in 3 parts: 
    
     arr[l..i] elements less than pivot. 
     arr[i+1..j-1] elements equal to pivot. 
     arr[j..r] elements greater than pivot. 
    
    

     How to implement QuickSort for Linked Lists? 
     QuickSort on Singly Linked List 
     QuickSort on Doubly Linked List
    

    Can we implement QuickSort Iteratively? 
    Yes, please refer Iterative Quick Sort.
    
    Why Quick Sort is preferred over MergeSort for sorting Arrays ?
    Quick Sort in its general form is an in-place sort (i.e. it doesn’t require any extra storage) 
    whereas merge sort requires O(N) extra storage, N denoting the array size which may be quite expensive. 
    Allocating and de-allocating the extra space used for merge sort increases the running time of the algorithm.
    Comparing average complexity we find that both type of sorts have O(NlogN) average complexity but the constants differ.
    For arrays, merge sort loses due to the use of extra O(N) storage space.
    Most practical implementations of Quick Sort use randomized version.
    The randomized version has expected time complexity of O(nLogn). 
    The worst case is possible in randomized version also, 
    but worst case doesn’t occur for a particular pattern (like sorted array) and randomized Quick Sort works well in practice.
    Quick Sort is also a cache friendly sorting algorithm as it has good locality of reference when used for arrays.
    Quick Sort is also tail recursive, therefore tail call optimizations is done.


    Advantages of Quick Sort:
    It is a divide-and-conquer algorithm that makes it easier to solve problems.
    It is efficient on large data sets.
    It has a low overhead, as it only requires a small amount of memory to function.


    Disadvantages of Quick Sort:
    It has a worst-case time complexity of O(n^2), which occurs when the pivot is chosen poorly.
    It is not a good choice for small data sets.
    It can be sensitive to the choice of pivot.
    It is not cache-efficient.
    It is not stable sort, meaning that if two elements have the same key, 
    their relative order will not be preserved in the sorted output in case of quick sort,
    because here we swapping of elements according to pivot’s position (without considering their original positions).


    Summary:
    Quick sort is a fast and efficient sorting algorithm with an average time complexity of O(n log n).
    It is a divide-and-conquer algorithm that breaks down the original problem into smaller subproblems that are easier to solve.
    It can be easily implemented in both iterative and recursive forms and it is efficient on large data sets,
    and can be used to sort data in-place. 
    However, it also has some drawbacks such as worst case time complexity of O(n^2) which occurs when the pivot is chosen poorly.
    It is not a good choice for small data sets, it is not cache-efficient, and is sensitive to the choice of pivot. 
    `;

  return (
    <>
      <div
        className="quickinfo"
        style={{ display: 'grid', justifyContent: 'space-around' }}
      >
        <SyntaxHighlighter style={kimbieLight}>{Phase1}</SyntaxHighlighter>

        <img
          className="img1"
          src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png"
          alt="not Found"
        />

        <SyntaxHighlighter style={kimbieLight}>{Phase2}</SyntaxHighlighter>
      </div>
    </>
  );
};

export default QuickInfo;
