import React from 'react';
import './Info.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function QueueInfo() {

    // const myState = useSelector((state) => state.updateProps)
    // const dispatch = useDispatch();
  
    const Phase1 = 
    `
    What is Queue Data Structure?
      A Queue is defined as a linear data structure that is open at both ends and the operations are performed 
      in First In First Out (FIFO) order.
    
    We define a queue to be a list in which all additions to the list are made at one end, 
    and all deletions from the list are made at the other end.  
    The element which is first pushed into the order, the operation is first performed on that.`
  
  
    const Phase2 = 
    `
    FIFO Principle of Queue:
      A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served. 
      (i.e. First come first serve).
      Position of the entry in a queue ready to be served,
      that is, the first entry that will be removed from the queue, is called the front of the queue(sometimes, head of the queue),
      similarly, the position of the last entry in the queue,
      that is, the one most recently added, is called the rear (or the tail) of the queue. See the below figure.
`
  const Phase3 = 
  `
   Characteristics of Queue:
    Queue can handle multiple data.
    We can access both ends.
    They are fast and flexible. 
  
   Queue Representation:
    Like stacks, Queues can also be represented in an array: In this representation, the Queue is implemented using the array. 
    Variables used in this case are
  
  
   Queue: the name of the array storing queue elements.
   Front: the index where the first element is stored in the array representing the queue.
   Rear: the index where the last element is stored in an array representing the queue.`
    return (
      <>
      <div className='queueinfo' style={{display:'grid' , justifyContent:'space-around'}}>
           
   
                
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase1}
                </SyntaxHighlighter>
               
                
             
              
                <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png' alt='not Found'/>
              
            
                
               
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase2}
                </SyntaxHighlighter>
               
               
             
              
                <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213111946/fifo-property-in-Queue.png' alt='not Found'/>
                
              
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase3}
                </SyntaxHighlighter>
      
            </div>
  
        
  
        
      </>
    )
  }
  
  export default QueueInfo;