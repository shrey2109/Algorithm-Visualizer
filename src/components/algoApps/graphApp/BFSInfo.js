import React from 'react';
import './Info.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function BFSInfo() {

    // const myState = useSelector((state) => state.updateProps)
    // const dispatch = useDispatch();
  
    const Phase1 = 
    `
    The breadth-first search (BFS) algorithm is used to search a tree or graph data structure for a node that meets 
     a set of criteria. 
    It starts at the tree’s root or graph and searches/visits all nodes at the current depth level before moving on to
     the nodes at the next depth level.
    Breadth-first search can be used to solve many problems in graph theory.

    Breadth-First Traversal (or Search) for a graph is similar to the Breadth-First Traversal of a tree
    
    The only catch here is, that, unlike trees, graphs may contain cycles, so we may come to the same node again.
    
    To avoid processing a node more than once, we divide the vertices into two categories:
    1)Visited and
    2)Not visited.
    
    A boolean visited array is used to mark the visited vertices.
    For simplicity, it is assumed that all vertices are reachable from the starting vertex. 
    BFS uses a queue data structure for traversal.`
  
  
    const Phase2 = 
    `

    When we come to vertex 0, we look for all adjacent vertices of it. 

        2 is also an adjacent vertex of 0. 
        If we don’t mark visited vertices, then 2 will be processed again and it will become a non-terminating proces s.
    There can be multiple BFS traversals for a graph. Different BFS traversals for the above graph :
        2, 3, 0, 1
        2, 0, 3, 1
    
    Applications of BFS:
     Shortest Path and Minimum Spanning Tree for unweighted graph: 
        In an unweighted graph, the shortest path is the path with the least number of edges. 
        With Breadth First, we always reach a vertex from a given source using the minimum number of edges. 
        Also, in the case of unweighted graphs, any spanning tree is Minimum Spanning Tree and we can use 
        either Depth or Breadth first traversal for finding a spanning tree. 
     Peer-to-Peer Networks: 
        In Peer-to-Peer Networks like BitTorrent, Breadth First Search is used to find all neighbor nodes. 
     Crawlers in Search Engines:
        Crawlers build an index using Breadth First. 
        The idea is to start from the source page and follow all links from the source and keep doing the same.
        Depth First Traversal can also be used for crawlers, but the advantage of Breadth First Traversal is,
        the depth or levels of the built tree can be limited. 
     Social Networking Websites: 
        In social networks, we can find people within a given distance ‘k’ from a person
        using Breadth First Search till ‘k’ levels. 
     GPS Navigation systems:
        Breadth First Search is used to find all neighboring locations. 
     Broadcasting in Network:
        In networks, a broadcasted packet follows Breadth First Search to reach all nodes. 
     In Garbage Collection:
        Breadth First Search is used in copying garbage collection using Cheney’s algorithm. Refer this and for details.
        Breadth First Search is preferred over Depth First Search because of the better locality of reference: 
     Cycle detection in the undirected graph:
        In undirected graphs, either Breadth First Search or Depth First Search can be used to detect cycle.
        We can use BFS to detect cycle in a directed graph also,
     Ford–Fulkerson algorithm: 
        In the Ford-Fulkerson algorithm, we can either use Breadth First or Depth First Traversal to find the maximum flow. 
        Breadth First Traversal is preferred as it reduces worst-case time complexity to O(VE2). 
     To test if a graph is Bipartite:
        We can either use Breadth First or Depth First Traversal. 
     Path Finding:
        We can either use Breadth First or Depth First Traversal to find if there is a path between two vertices. 
     Finding all nodes within one connected component:
        We can either use Breadth First or Depth First Traversal to find all nodes reachable from a given node. 
    
    
    Advantages of Breadth First Search:
      BFS will never get trapped exploring the useful path forever.
      If there is a solution, BFS definitely find it out.
      If there is more than one solution then BFS can find the minimal one that requires less number of steps. 
      If there is a solution then BFS is guaranteed to find it.
      Low storage requirement: linear with depth.
      Easily programmed.
     
     
    Disadvantages of Breadth First Search:
      The main drawback of BFS is its memory requirement.
      Since each level of the tree must be saved in order to generate the next level and the amount
        of memory is proportional to the number of nodes stored the space complexity of BFS is O(bd ).
      As a result, BFS is severely space-bound in practice so will exhaust the memory available on typical
        computers in a matter of minutes.`
  
    return (
      <>
      <div className='bfsinfo' style={{display:'grid' , justifyContent:'space-around'}}>
            
                
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase1}
                </SyntaxHighlighter>
               
                
                <img  className='img1' src='https://media.geeksforgeeks.org/wp-content/uploads/bfs-5.png' alt='not Found'/>
                
              
               
                <SyntaxHighlighter  style={kimbieLight }>
                    {Phase2}
                </SyntaxHighlighter>
               
              
            </div>
  
        
  
        
      </>
    )
  }
  
  export default BFSInfo;