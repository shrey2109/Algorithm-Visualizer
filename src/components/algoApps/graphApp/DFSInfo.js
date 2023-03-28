import React from 'react';
import './Info.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function DFSInfo() {

    // const myState = useSelector((state) => state.updateProps)
    // const dispatch = useDispatch();
  
    const Phase1 = 
    `
      Depth First Traversal (or Search) for a graph is similar to Depth First Traversal of a tree.
      The only catch here is, that, unlike trees, graphs may contain cycles (a node may be visited twice).
      To avoid processing a node more than once, use a boolean visited array.
      A graph can have more than one DFS traversal.
      
      
      Input: n = 4, e = 6 
        0 -> 1, 0 -> 2, 1 -> 2, 2 -> 0, 2 -> 3, 3 -> 3 
      Output: DFS from vertex 1 : 1 2 0 3 `
  
  
    const Phase2 = 
    `
    Advantages of Depth First Search:
       Memory requirement is only linear with respect to the search graph.
       This is in contrast with breadth-first search which requires more space. 
       The reason is that the algorithm only needs to store a stack of nodes on the path from the root to the current node.
       The time complexity of a depth-first Search to depth d is O(bd) since it generates the same set of nodes as 
       breadth-first search, but simply in a different order.
       Thus practically depth-first search is time-limited rather than space-limited.
       If depth-first search finds solution without exploring much in a path then the time and space it takes will be very less.
       DFS requires less memory since only the nodes on the current path are stored.
       By chance DFS may find a solution without examining much of the search space at all.
    
    
   Disadvantages of Depth First Search:
       The disadvantage of Depth-First Search is that there is a possibility that it may down the left-most path forever.
       Even a finite graph can generate an infinite tre One solution to this problem is to impose a cutoff depth on the search. 
       Although ideal cutoff is the solution depth d and this value is rarely known in advance of actually solving the problem.
       If the chosen cutoff depth is less than d, the algorithm will fail to find a solution,
        whereas if the cutoff depth is greater than d, a large price is paid in execution time, 
        and the first solution found may not be an optimal one.
       Depth-First Search is not guaranteed to find the solution.
       And there is no guarantee to find a minimal solution, if more than one solution.`
  
    return (
      <>
      <div className='dfsinfo'>
            <div className='hii' id='codeVisual' >
  
              <div className='code' id='code' style={{display:'grid' , justifyContent:'space-around'}}>
                <div className='pushCode' id='pushCode'>
   
                
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase1}
                </SyntaxHighlighter>
               
                </div>
              </div>
              <div className='code'>
                <div className='Code' id='code' style={{display:'grid' , justifyContent:'space-around'}}>
                {/* {/* <SyntaxHighlighter style={kimbieLight}> */}
                <img src='https://media.geeksforgeeks.org/wp-content/uploads/20200507074112/ezgif.com-gif-maker61.gif' alt='not Found'/>
                {/* </SyntaxHighlighter> */} 
                </div>
              </div>
            <div className='code' id='code' style={{display:'grid' , justifyContent:'space-around'}}>
                <div className='pushCode' id='pushCode'>
              
               
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase2}
                </SyntaxHighlighter>
               
                </div>
              </div>
  
              {/* <div className='code' id='code' style={{display:'grid' ,color:'blue', justifyContent:'space-around'}}>
                <div className='pushCode' id='pushCode'>
              
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase3}
                </SyntaxHighlighter>
                </div>
              </div> */}
            </div>
            </div>
  
        
  
        
      </>
    )
  }
  
  export default DFSInfo;