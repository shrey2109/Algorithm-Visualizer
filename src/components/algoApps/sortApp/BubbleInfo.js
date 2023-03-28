import React from 'react';
import './Info.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function BubbleInfo() {

    // const myState = useSelector((state) => state.updateProps)
    // const dispatch = useDispatch();
  
    const Phase1 = 
    `Let's We have Input: arr[] = {5, 1, 4, 2, 8}
  
    First Pass: 
    Bubble sort starts with very first two elements, comparing them to check which one is greater.
    ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
    ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
    ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
    ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
  
    Second Pass:
    Now, during second iteration it should look like this:
    ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
    ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
    ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
   
    Third Pass:  
    Now, the array is already sorted, but our algorithm does not know if it is completed.
    The algorithm needs one whole pass without any swap to know it is sorted.
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
    ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )`
  
  
    const Phase2 = 
    `
    Worst Case Analysis for Bubble Sort:
    
    The worst-case condition for bubble sort occurs when elements of the array are arranged in decreasing order.
    In the worst case, the total number of iterations or passes required to sort a given array is (n-1). 
    where ‘n’ is a number of elements present in the array.
    
    At pass 1 :  Number of comparisons = (n-1)
    Number of swaps = (n-1)
  
    At pass 2 :  Number of comparisons = (n-2)
    Number of swaps = (n-2)
  
    At pass 3 :  Number of comparisons = (n-3)
    Number of swaps = (n-3)
             .
             .
             .
  At pass n-1 :  Number of comparisons = 1
       Number of swaps = 1
  
  Now , calculating total number of comparison required to sort the array
  = (n-1) + (n-2) +  (n-3) + . . . 2 + 1
  = (n-1)*(n-1+1)/2  { by using sum of N natural Number formula }
  = n (n-1)/2    
  
  For the Worst case:
  Total number of swaps = Total number of comparison
  Total number of comparison (Worst case) = n(n-1)/2
  Total number of swaps (Worst case) = n(n-1)/2
  
  Worst and Average Case Time Complexity: O(N2). The worst case occurs when an array is reverse sorted.
  Best Case Time Complexity: O(N). The best case occurs when an array is already sorted.
  Auxiliary Space: O(1) 
  
  
  What is the Boundary Case for Bubble sort? 
  Bubble sort takes minimum time (Order of n) when elements are already sorted.
  Hence it is best to check if the array is already sorted or not beforehand, to avoid O(N2) time complexity.
    
    Does sorting happen in place in Bubble sort?
    Yes, Bubble sort performs the swapping of adjacent pairs without the use of any major data structure.
    Hence Bubble sort algorithm is an in-place algorithm.
    
    Is the Bubble sort algorithm stable?
    Yes, the bubble sort algorithm is stable.
    
    Where is the Bubble sort algorithm used?
    Due to its simplicity, bubble sort is often used to introduce the concept of a sorting algorithm. 
    In computer graphics, it is popular for its capability to detect a tiny error (like a swap of just two elements)
    in almost-sorted arrays and fix it with just linear complexity (2n). 
    
    Example: It is used in a polygon filling algorithm, where bounding lines are sorted by their x coordinate at a specific
             scan line (a line parallel to the x-axis), and with incrementing y their order changes (two elements are swapped) 
             only at intersections of two lines 
    
    Advantages:
    Bubble sort is easy to understand and implement.
    It does not require any additional memory space.
    It’s adaptability to different types of data.
    It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.
  
  
    Disadvantages
    Bubble sort has a time complexity of O(n^2) which makes it very slow for large data sets.
    It is not efficient for large data sets, because it requires multiple passes through the data.`
  
    return (
      <>
      <div className='bubbleinfo' style={{display:'grid' , justifyContent:'space-around'}}>
          
                
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase1}
                </SyntaxHighlighter>
               
              
                <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/02/bubble-sort1.png' alt='not Found'/>
               
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase2}
                </SyntaxHighlighter>
               
            </div>
  
        
  
        
      </>
    )
  }
  
  export default BubbleInfo;