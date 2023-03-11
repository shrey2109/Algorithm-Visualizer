// import { elementAcceptingRef } from "@mui/utils";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import BFSCode from './BFSCode'
import DFSCode from './DFSCode'


const GraphWorking = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const grid = [...myState.map];
  const hash = (i, j) => {
    return 2001 * (i + 1000) + (j + 1000);
  };
  const printClick = () => {
    console.log("CLICK KIYA PRINT HUA??");
  };

  let hashmap = {};
  let prevmap = {};
  let start, end;
  for (let i = 0; i <14; i++) {
    for (let j = 0; j < 40; j++) {
      hashmap[hash(i, j)] = false;
      prevmap[hash(i, j)] = null;
    }
  }
grid.map((row, index) => {
    {
        row.map((block) => {
            let has = hash(block.r, block.c);
            
            if(block.isStart === true) {
              start = block;
            }

            if(block.isEnd === true) {
              end = block;
            }

          });
        }
        
        let result;
        if(start!=null && end!=null && myState.play && myState.graphAlgorithm==='bfs'){
          result = BFS(start, end);
        }
        else if(start!=null && end!=null && myState.play && myState.graphAlgorithm==='dfs'){
          result = DFS(start, end);
        }

          let path=[]
          if (result != null){
            let current = result[0]
            while (prevmap[hash(current.r,current.c)] != null){
              path.push(current)
              current=prevmap[hash(current.r,current.c)]
            }

            setTimeout(()=>{path.reverse().forEach((elem,index)=>{
              document.getElementById(hash(elem.r, elem.c)).style['transition-delay']=`${( index) * 85}ms`
              document.getElementById(hash(elem.r, elem.c)).style.backgroundColor = "#64ff9a";
            })},result[1]*16)
        }
        
    });

    function BFS(start, end){
        let queue=[start]
        let count=0
        hashmap[hash(start.r, start.c)]=true
        while (queue.length > 0){
            count++;
            let c = queue.pop();
            document.getElementById(hash(c.r, c.c)).style['transitionDelay']=`${count * 15}ms`
            if(!c.isWall){
                document.getElementById(hash(c.r, c.c)).style.backgroundColor = "#41b9ff";
            }
            else{
              continue;
            }

            if(c.r == end.r && c.c == end.c) return [c,count]
            
            
            
            if(c.r+1 <= 13 && !hashmap[hash(c.r+1, c.c)]){
                queue.unshift(grid[c.r+1][c.c])
                prevmap[hash(c.r+1, c.c)]={...c}
                hashmap[hash(c.r+1, c.c)]=true
              }

              if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)]){
                queue.unshift(grid[c.r-1][c.c])
                prevmap[hash(c.r-1, c.c)]={...c}
                hashmap[hash(c.r-1, c.c)]=true
              }

              if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)]){
                queue.unshift(grid[c.r][c.c+1])
                prevmap[hash(c.r, c.c+1)]={...c}
                hashmap[hash(c.r, c.c+1)]=true
              }

              if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)]){
                queue.unshift(grid[c.r][c.c-1])
                prevmap[hash(c.r, c.c-1)]={...c}
                hashmap[hash(c.r, c.c-1)]=true
              }
        }
        return null;
    }




    function DFS(start, end){
      let queue=[start]
        let count=0
        hashmap[hash(start.r, start.c)]=true
        while (queue.length > 0){
            count++;
            let c = queue[0];
            queue.shift();
            document.getElementById(hash(c.r, c.c)).style['transitionDelay']=`${count * 15}ms`
            if(!c.isWall){
                document.getElementById(hash(c.r, c.c)).style.backgroundColor = "#41b9ff";
            }
            else{
              continue;
            }

            if(c.r == end.r && c.c == end.c) return [c,count]
            
              if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)]){
                queue.unshift(grid[c.r][c.c+1])
                prevmap[hash(c.r, c.c+1)]={...c}
                hashmap[hash(c.r, c.c+1)]=true
              }

              
              if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)]){
                queue.unshift(grid[c.r-1][c.c])
                prevmap[hash(c.r-1, c.c)]={...c}
                hashmap[hash(c.r-1, c.c)]=true
              }


              if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)]){
                queue.unshift(grid[c.r][c.c-1])
                prevmap[hash(c.r, c.c-1)]={...c}
                hashmap[hash(c.r, c.c-1)]=true
              }

              if(c.r+1 <= 13 && !hashmap[hash(c.r+1, c.c)]){
                  queue.unshift(grid[c.r+1][c.c])
                  prevmap[hash(c.r+1, c.c)]={...c}
                  hashmap[hash(c.r+1, c.c)]=true
                }
            }
        return null;
    }
    
    

  return (
      
      <>
        {myState.play && myState.graphAlgorithm==='bfs' && <BFSCode/>}
        {myState.play && myState.graphAlgorithm==='dfs' && <DFSCode/>}
    </>

  )
};
export default GraphWorking;

