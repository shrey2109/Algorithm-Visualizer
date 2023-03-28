import React from 'react';
import './Info1.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function LinearInfo() {

    // const myState = useSelector((state) => state.updateProps)
    // const dispatch = useDispatch();
  
    const Phase1 = 
    `
     Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element
      of a list until the desired element is found, otherwise the search continues till the end of the data set.
 
    
     How Linear Search Works?
      Step 1: First, read the search element (Target element) in the array.
      Step 2: Set an integer i = 0 and repeat steps 3 to 4 till i reaches the end of the array.
      Step 3: Match the key with arr[i].
      Step 4: If the key matches, return the index. Otherwise, increment i by 1.`
  
  
    const Phase2 = 
    `
     Advantages of Linear Search:
      Linear search is simple to implement and easy to understand.
      Linear search can be used irrespective of whether the array is sorted or not. It can be used on arrays of any data type.
      Does not require any additional memory.
      It is a well suited algorithm for small datasets.
    
    
    Drawbacks of Linear Search:
      Linear search has a time complexity of O(n), which in turn makes it slow for large datasets.
      Not suitable for large arrays.
      Linear search can be less efficient than other algorithms, such as hash tables.
    
    
    Improving Linear Search:
      As seen above, the time taken to search an element using linear search is linear.
      This is a drawback for using linear search for large data sets.
      It is observed that when searching for a key element, then there is a possibility for searching the same key element again and again.
      We can improve the performance of linear search using this observation.
     
     The goal is that if the same element is searched again then the operation must take lesser time.
     Therefore, in such a case, Linear Search can be improved by using the following two methods:
     
     1)Transposition
     2)Move to Front
   

    When to use Linear Search?
      When we are dealing with a small dataset.
      When you need to find an exact value.
      When you are searching a dataset stored in contiguous memory.
      When you want to implement a simple algorithm.
    
    
    Conclusion:
      To conclude, it can be said that linear search is a simple and flexible algorithm for finding whether an element is
      present within an array.
      It sequentially examines each element of the array and is better for being used in unsorted data sets.`
  
    return (
      <>
      <div className='linearinfo'>
            
  
              <div className='node' id='code' style={{display:'grid' , justifyContent:'space-around'}}>
              
   
                
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase1}
                </SyntaxHighlighter>
               
              
              </div>
              
                <div className='node' id='code' style={{display:'grid' , justifyContent:'space-around'}}>
                {/* {/* <SyntaxHighlighter style={kimbieLight}> */}
                <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png' alt='not Found'/>
                {/* </SyntaxHighlighter> */} 
                </div>
              
            <div className='node' id='code' style={{display:'grid' , justifyContent:'space-around'}}>
                
               
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase2}
                </SyntaxHighlighter>
               
                
              </div>
  
              {/* <div className='code' id='code' style={{display:'grid' ,color:'blue', justifyContent:'space-around'}}>
                <div className='pushCode' id='pushCode'>
              
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase3}
                </SyntaxHighlighter>
                </div>
              </div> */}
            </div>
        
  
        
  
        
      </>
    )
  }
  
  export default LinearInfo;