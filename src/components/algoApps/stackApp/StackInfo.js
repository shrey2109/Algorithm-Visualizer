import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './Info.css';

const StackInfo = () => {
  const Phase1 = `
    
    What is Stack?
     Stack is a linear data structure that follows a particular order in which the operations are performed. 
     The order may be LIFO(Last In First Out) or FILO(First In Last Out). 
     LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.
    
  
   There are many real-life examples of a stack.
   Consider an example of plates stacked over one another in the canteen. 
   The plate which is at the top is the first one to be removed,
    i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time.
   So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.`;

  const Phase2 = `
    
    Basic Operations
     Stack operations may involve initializing the stack, using it and then de-initializing it.
     Apart from these basic stuffs, a stack is used for the following two primary operations −
    

    push() − Pushing (storing) an element on the stack.
    
    pop() − Removing (accessing) an element from the stack.
    
    
    When data is PUSHed onto stack.
     To use a stack efficiently, we need to check the status of stack as well.
     For the same purpose, the following functionality is added to stacks −
    
    peek() − get the top data element of the stack, without removing it.
     
    isFull() − check if stack is full.
    
    isEmpty() − check if stack is empty.
    
    At all times, we maintain a pointer to the last PUSHed data on the stack.
    As this pointer always represents the top of the stack, hence named top.
    The top pointer provides top value of the stack without actually removing it.`;

  return (
    <>
      <div
        className="stackinfo"
        style={{ display: 'grid', justifyContent: 'space-around' }}
      >
        <SyntaxHighlighter style={kimbieLight}>{Phase1}</SyntaxHighlighter>

        <img
          className="img1"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png"
          alt="not Found"
        />

        <SyntaxHighlighter style={kimbieLight}>{Phase2}</SyntaxHighlighter>
      </div>
    </>
  );
};

export default StackInfo;
