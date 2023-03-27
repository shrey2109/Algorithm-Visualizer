import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './QueueVisuals.css'
import QueueCode from './QueueCode'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { paraisoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function QueueVisuals() {

  const myState = useSelector((state) => state.updateProps)
  const dispatch = useDispatch();

  const PushCode = 
  `Queue::push(int num)
{
    if (capacity == rear) {
       printf("Queue is full");
    }
    else {
       queue[rear] = data;
       rear++;
    }
}`


  const PopCode = 
  `int Queue::pop()
{
    if (front == rear) {
       printf("Queue is empty");
       return -1;
    }
    else {
       int x = queue[rear--]
       return x;
    }
}`
  
  

  if(myState.pushqueue === true){
    document.getElementById('pushCode').style.boxShadow = "0px 0px 20px rgb(160, 160, 160)";
    document.getElementById('pushCode').style.filter = "blur(0px)";
  }
  else if(myState.pushqueue === false){
    document.getElementById('pushCode').style.boxShadow = "0px 0px 0px rgb(160, 160, 160)";
    document.getElementById('pushCode').style.filter = "blur(2px)";
    
  }
  if(myState.popqueue === true){
    document.getElementById('popCode').style.boxShadow = "0px 0px 20px rgb(160, 160, 160)";
    document.getElementById('popCode').style.filter = "blur(0px)";
  }
  else if(myState.popqueue === false){
    document.getElementById('popCode').style.boxShadow = "0px 0px 0px rgb(160, 160, 160)";
    document.getElementById('popCode').style.filter = "blur(2px)";
  }

  return (
    <>
      <div className='container'>
      
        <div className='visualContainer'>

          <div className='stackContainer'>
            {
              myState.arrValQueue.map((item) => {
                return (
                  <div className='stack'>
                    {item}
                  </div>
                )
              })
            }
          </div>
          <div className='codeVisual'>

            <div className='queuecode' id='code'>
              <div className='pushCode' id='pushCode'>
              <SyntaxHighlighter language="cpp" style={paraisoLight}>
                  {PushCode}
              </SyntaxHighlighter>
              </div>
            </div>



            <div className='queuecode'>
              <div className='popCode' id='popCode'>
              <SyntaxHighlighter language="cpp" style={paraisoLight}>
                  {PopCode}
              </SyntaxHighlighter>
              </div>
            </div>
          </div>

        </div>

        <div className='codeContainer'>
          <QueueCode/>
        </div>
        {/* <div className='codeContainer'>
          <h1>hii</h1>
        </div> */}
      </div>

      
    </>
  )
}

export default QueueVisuals