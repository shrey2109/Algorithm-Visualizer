import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './Info.css';

const SelectionInfo = () => {
  const Phase1 = `Selection sort is a simple and efficient sorting algorithm that works by repeatedly 
     selecting the smallest (or largest) element from the unsorted portion of the list and 
     moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest (or largest)
     element from the unsorted portion of the list and swaps it with the first element of the unsorted portion.
     This process is repeated for the remaining unsorted portion of the list until the entire list is sorted.
     One variation of selection sort is called “Bidirectional selection sort” which goes through the list of 
     elements by alternating between the smallest and largest element, this way the algorithm can be faster in some cases.

   
     The algorithm maintains two subarrays in a given array.
    
   
     The subarray which already sorted. 
     The remaining subarray was unsorted.
     In every iteration of the selection sort, the minimum element (considering ascending order) 
     from the unsorted subarray is picked and moved to the beginning of the unsorted subarray. 
    
     After every iteration sorted subarray size increase by one and the unsorted subarray size decrease by one.
     After the N (size of the array) iteration, we will get a sorted array.
    `;

  const Phase2 = `
     How does selection sort work?

     Lets consider the following array as an example: arr[] = {64, 25, 12, 22, 11}
    

   First pass:
    
     For the first position in the sorted array, the whole array is traversed from index 0 to 4 sequentially.
     The first position where 64 is stored presently, after traversing whole array it is clear that 11 is the lowest value.
       64   	   25   	   12   	   22   	   11   
     Thus, replace 64 with 11.
     After one iteration 11, which happens to be the least value in the array, 
     tends to appear in the first position of the sorted list.
       11   	   25   	   12   	   22   	   64   
    
    
    Second Pass:
    
     For the second position, where 25 is present, again traverse the rest of the array in a sequential manner.
       11   	   25   	   12   	   22   	   64   
     After traversing, we found that 12 is the second lowest value in the array and it should appear at the second
     place in the array, thus swap these values.
       11   	   12   	   25   	   22   	   64   
    
    
    Third Pass:
    
     Now, for third place, where 25 is present again traverse the rest of the array and find the third least value
     present in the array.
       11   	   12   	   25   	   22   	   64   
     While traversing, 22 came out to be the third least value and it should appear at the third place in the array,
     thus swap 22 with element present at third position.
       11   	   12   	   22   	   25   	   64   
    
    
    Fourth pass:
    
     Similarly, for fourth position traverse the rest of the array and find the fourth least element in the array 
     As 25 is the 4th lowest value hence, it will place at the fourth position.
       11   	   12   	   22   	   25   	   64   
   
   
    Fifth Pass:
    
     At last the largest value present in the array automatically get placed at the last position in the array
     The resulted array is the sorted array.
       11   	   12   	   22   	   25   	   64  
       
       
       
       
     Is Selection Sort Algorithm stable?
      Stability: The default implementation is not stable. 
      However, it can be made stable. Please see the stable selection sort for details.
       
     Is Selection Sort Algorithm in place?
       Yes, it does not require extra space.
       
       
     Advantages of Selection Sort Algorithm:
       Simple and easy to understand.
       Preserves the relative order of items with equal keys which means it is stable.
       Works well with small datasets.
       It is adaptable to various types of data types.
       Selection sort is an in-place sorting algorithm, which means it does not require any additional memory to sort the list.
       It has a best-case and average-case time complexity of O(n^2), making it efficient for small data sets.
       It is easy to modify to sort in ascending or descending order.
       It can be easily implemented in hardware, making it suitable for real-time applications.
       It can also be used as a subroutine in more efficient sorting algorithms.
       It does not require any special memory or auxiliary data structures, making it a lightweight solution.
       The algorithm can be easily paralleled, allowing for efficient sorting on multi-core processors.
       It can be used in limited memory environments as it requires minimum extra memory.
       It is easy to understand, making it a popular choice for teaching purposes.
       It is suitable for sorting data with few unique keys, as it performs well in such scenarios.
      
      
     Disadvantages of the Selection Sort Algorithm:
       Selection sort has a time complexity of O(n^2) in the worst and average case.
       Does not work well on large datasets.
       The selection sort algorithm needs to iterate over the list multiple times, thus it can lead to an unbalanced branch.
       Selection sort has poor cache performance and hence it is not cache friendly. 
       Not adaptive, meaning it doesn’t take advantage of the fact that the list may already be sorted or partially sorted
       Not a good choice for large data sets with slow random access memory (RAM)
       It’s not a comparison sort and doesn’t have any performance guarantees like merge sort or quick sort.
       It has poor cache performance
       It can cause poor branch prediction due to its high branch misprediction rate
       It has many write operations, leading to poor performance on systems with slow storage.
       It is not a parallelizable algorithm, meaning that it cannot be easily split up to be run on multiple processors or cores.
       It does not handle data with many duplicates well, as it makes many unnecessary swaps.
       It can be outperformed by other algorithms such as quicksort and heapsort in most cases. 
       
       
     Summary:
       Selection sort is a simple and easy-to-understand sorting algorithm that works by repeatedly selecting
        the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 
       This process is repeated for the remaining unsorted portion of the list until the entire list is sorted.
       It has a time complexity of O(n^2) in the worst and average case which makes it less efficient for large data sets.
       Selection sort is a stable sorting algorithm.
       It can be used to sort different types of data.
       It has specific applications where it is useful such as small data sets and memory-constrained systems.`;

  return (
    <>
      <div
        className="selectioninfo"
        style={{ display: 'grid', justifyContent: 'space-around' }}
      >
        <SyntaxHighlighter style={kimbieLight}>{Phase1}</SyntaxHighlighter>

        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220203094305/Selection-Sort-Flowhchart.png"
          alt="not Found"
        />

        <SyntaxHighlighter style={kimbieLight}>{Phase2}</SyntaxHighlighter>
      </div>
    </>
  );
};

export default SelectionInfo;
