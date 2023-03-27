import React from 'react'
import './HowStack.css'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { paraisoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';



function HowStack() {


    const StackInfo = 
    `
    The stack data structure follows the LIFO (Last In First Out) principle. That is, the element added last will be removed first.
    `



  return (
    <div className='howStack'>
        <h1>Stack Data Structure</h1>
        <br/>
        <p>The stack data structure follows the LIFO (Last In First Out) principle. That is, the element added last will be removed first.</p>



        <SyntaxHighlighter language="text" style={paraisoLight}>
                    {StackInfo}
        </SyntaxHighlighter>

        <p>In programming terms, putting an item on top of the stack is called <strong>push</strong> and removing an item is called <strong>pop</strong>.</p>








    </div>
  )
}

export default HowStack