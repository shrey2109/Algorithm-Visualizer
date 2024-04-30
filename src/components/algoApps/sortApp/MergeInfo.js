import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './Info.css';

const MergeInfo = () => {
  const Phase1 = `Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays,
     sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.

     In simple terms, we can say that the process of merge sort is to divide the array into two halves,
     sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.
    
     One thing that you might wonder is what is the specialty of this algorithm.
     We already have a number of sorting algorithms then why do we need this algorithm? 
     One of the main advantages of merge sort is that it has a time complexity of O(n log n),
     which means it can sort large arrays relatively quickly.
     It is also a stable sort, which means that the order of elements with equal values is preserved during the sort.
    
     Merge sort is a popular choice for sorting large datasets because it is relatively efficient and easy to implement.
     It is often used in conjunction with other algorithms,
     such as quicksort, to improve the overall performance of a sorting routine.
     
     
     Merge Sort Working Process:
     Think of it as a recursive algorithm continuously splits the array in half until it cannot be further divided.
     This means that if the array becomes empty or has only one element left, the dividing will stop, 
     i.e. it is the base case to stop the recursion.
     If the array has multiple elements, split the array into halves and recursively invoke the merge sort on each of the halves.
     Finally, when both halves are sorted, the merge operation is applied.
     Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one.`;

  const Phase2 = `At first, check if the left index of array is less than the right index, if yes then calculate its mid point

 

    Now, as we already know that merge sort first divides the whole array iteratively into equal halves,
    unless the atomic values are achieved. 
    Here, we see that an array of 7 items is divided into two arrays of size 4 and 3 respectively.
    
     
    
    Now, again find that is left index is less than the right index for both arrays,
    if found yes, then again calculate mid points for both the arrays.
    
     
    
    Now, further divide these two arrays into further halves,
    until the atomic units of the array is reached and further division is not possible.
    
     
    
    After dividing the array into smallest units, start merging the elements again based on comparison of size of elements
    Firstly, compare the element for each list and then combine them into another list in a sorted manner.
    
     
    
    After the final merging, the list looks like this:
    
     
    
     
    The following diagram shows the complete merge sort process for an example array {38, 27, 43, 3, 9, 82, 10}. 
    
    If we take a closer look at the diagram,
    we can see that the array is recursively divided into two halves till the size becomes 1.
    Once the size becomes 1, the merge processes come into action and start merging arrays back till the complete array is merged.`;

  const Phase3 = `
      Is Merge sort In Place?
      No, In merge sort the merging step requires extra space to store the elements.
    
      Is Merge sort Stable?
      Yes, merge sort is stable. 
    
    How can we make Merge sort more efficient?
    Merge sort can be made more efficient by replacing recursive calls with Insertion sort for smaller array sizes,
    where the size of the remaining array is less or equal to 43 as the number of operations required to sort an array
    of max size 43 will be less in Insertion sort as compared to the number of operations required in Merge sort.
    
    Analysis of Merge Sort:
    A merge sort consists of several passes over the input. 
    The first pass merges segments of size 1,the second merges segments of size 2, 
    and the i_{th}  pass merges segments of size 2i-1. 
    Thus, the total number of passes is [log2n].
    As merge showed, we can merge two sorted segments in linear time, which means that each pass takes O(n) time. 
    Since there are [log2n] passes, the total computing time is O(nlogn).
    
    Applications of Merge Sort: 
    Merge Sort is useful for sorting linked lists in O(N log N) time.
    In the case of linked lists, the case is different mainly due to the difference in memory allocation of arrays and linked lists. 
    Unlike arrays, linked list nodes may not be adjacent in memory. 
    Unlike an array, in the linked list, we can insert items in the middle in O(1) extra space and O(1) time. 
    Therefore, the merge operation of merge sort can be implemented without extra space for linked lists.
    In arrays, we can do random access as elements are contiguous in memory. 
    Let us say we have an integer (4-byte) array A and let the address of A[0] be x then to access A[i],
    we can directly access the memory at (x + i*4).
    Unlike arrays, we can not do random access in the linked list. 
    Quick Sort requires a lot of this kind of access.
    In a linked list to access i’th index, we have to travel each and every node from 
    the head to i’th node as we don’t have a contiguous block of memory. 
    Therefore, the overhead increases for quicksort. Merge sort accesses data sequentially and the need of random access is low.
    
    Inversion Count Problem
    
    Used in External Sorting
   
   
   
   
    Advantages of Merge Sort:
    Merge sort has a time complexity of O(n log n), which means it is relatively efficient for sorting large datasets.
    Merge sort is a stable sort, which means that the order of elements with equal values is preserved during the sort.
    It is easy to implement thus making it a good choice for many applications.
    It is useful for external sorting. This is because merge sort can handle large datasets,
    it is often used for external sorting, where the data being sorted does not fit in memory.
    The merge sort algorithm can be easily parallelized, 
    which means it can take advantage of multiple processors or cores to sort the data more quickly.
    Merge sort requires relatively few additional resources (such as memory) to perform the sort.
    This makes it a good choice for systems with limited resources.
   
   
   
   
    Drawbacks of Merge Sort:
    Slower compared to the other sort algorithms for smaller tasks.
    Although effecient for large datasets its not the best choice for small datasets.
    The merge sort algorithm requires an additional memory space of 0(n) for the temporary array.
    This is to store the subarrays that are used during the sorting process.
    It goes through the whole process even if the array is sorted.
    It requires more code to implement since we are dividing the array into smaller subarrays 
    and then merging the sorted subarrays back together.
    


    Solution of the drawback for additional storage:
    Use linked list. `;
  return (
    <>
      <div
        className="mergeinfo"
        style={{ display: 'grid', justifyContent: 'space-around' }}
      >
        <SyntaxHighlighter style={kimbieLight}>{Phase1}</SyntaxHighlighter>

        <img
          className="img1"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20220722205737/MergeSortTutorial.png"
          alt="not Found"
        />

        <SyntaxHighlighter style={kimbieLight}>{Phase2}</SyntaxHighlighter>

        <SyntaxHighlighter style={kimbieLight}>{Phase3}</SyntaxHighlighter>
      </div>
    </>
  );
};

export default MergeInfo;
