import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const BFSCode = () => {

const CppCode = `
#include <bits/stdc++.h>

using namespace std;
class Solution {
  public:
    vector < int > bfsOfGraph(int V, vector < int > adj[]) {
      vector < int > bfs;
      vector < int > vis(V, 0);
      queue < int > q;
      q.push(0);
      vis[0] = 1;
      while (!q.empty()) {
        int node = q.front();
        q.pop();
        bfs.push_back(node);

        for (auto it: adj[node]) {
          if (!vis[it]) {
            q.push(it);
            vis[it] = 1;
          }
        }
      }

      return bfs;
    }
};

void addEdge(vector < int > adj[], int u, int v) {
  adj[u].push_back(v);
  adj[v].push_back(u);
}

void printAns(vector < int > & ans) {
  for (int i = 0; i < ans.size(); i++) {
    cout << ans[i] << " ";
  }
}
int main() {
  vector < int > adj[5];

  addEdge(adj, 0, 1);
  addEdge(adj, 0, 2);
  addEdge(adj, 0, 3);
  addEdge(adj, 2, 4);

  Solution obj;
  vector < int > ans = obj.bfsOfGraph(5, adj);
  printAns(ans);
  cout << endl;

  return 0;
}
  `;






  const JavaCode = `
  import java.util.*;
  class Solution {
      public static ArrayList < Integer > bfsOfGraph(int V, ArrayList < ArrayList < Integer >> adj) {
  
          ArrayList < Integer > bfs = new ArrayList < > ();
          boolean vis[] = new boolean[V];
          Queue < Integer > q = new LinkedList < > ();
  
          q.add(0);
          vis[0] = true;
  
          while (!q.isEmpty()) {
              Integer node = q.poll();
              bfs.add(node);
  
              // Get all adjacent vertices of the dequeued vertex s
              // If a adjacent has not been visited, then mark it
              // visited and enqueue it
              for (Integer it: adj.get(node)) {
                  if (vis[it] == false) {
                      vis[it] = true;
                      q.add(it);
                  }
              }
          }
  
          return bfs;
  
          // Code here
      }
  
      static void printAns(ArrayList < Integer > ans) {
          for (int i = 0; i < ans.size(); i++) {
              System.out.print(ans.get(i) + " ");
          }
      }
      public static void main(String args[]) {
  
          ArrayList < ArrayList < Integer >> adj = new ArrayList < > ();
          for (int i = 0; i < 5; i++) {
              adj.add(new ArrayList < > ());
          }
          adj.get(0).add(1);
          adj.get(1).add(0);
          adj.get(0).add(2);
          adj.get(2).add(0);
          adj.get(0).add(3);
          adj.get(3).add(0);
          adj.get(2).add(4);
          adj.get(4).add(2);
  
          ArrayList < Integer > ans = bfsOfGraph(5, adj);
          printAns(ans);
      }
  }
  `;







    const [value, setValue] = React.useState('1');
    const [compvalue, setCompValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCompChange = (event, newValue) => {
    setCompValue(newValue);
  };

    return(
        <>
            <h1> Code for Breadth-First Search </h1>

        

        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <TabList> */}
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="C++" value="1" />
                <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="JAVA" value="2" />
            </TabList>
            </Box>

            {/* <TabPanel value="1">  */}
            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'60%', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="1"> 
                
            <SyntaxHighlighter language="cpp" style={atomOneDark}>
                {CppCode}
            </SyntaxHighlighter>

            </TabPanel>


            <TabPanel style={{boxShadow:'7px 10px 14px -2px rgb(86, 86, 86)', width:'60%', backgroundColor:'black',borderRadius:'20px', color:'white'}} value="2"> 

                <SyntaxHighlighter language="cpp" style={atomOneDark}>
                    {JavaCode}
                </SyntaxHighlighter>
            
            </TabPanel>
            <TabPanel value="3"></TabPanel>
        </TabContext>
        </Box>




        <br/>
        <br/>
        <h1> Time and Space Complexity for Breadth-First Search </h1>


        <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={compvalue}>
    {/* <TabContext> */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleCompChange} aria-label="lab API tabs example">
        {/* <TabList> */}
            <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="Time Complexity" value="1" />
            <Tab style={{boxShadow:'2px 0px 3px rgb(86, 86, 86)', margin:'10px', fontSize:'15px'}} label="Auxillary Space Complexity" value="2" />
        </TabList>
        </Box>

        <TabPanel value="1"> 
            <code>
                <div style={{marginLeft:'0px'}}> {`O(N+E)`} </div>
            </code>
        </TabPanel>
        <TabPanel value="2"> 

            <code>
                <div style={{marginLeft:'0px'}}> {`O(N+E) + O(N) + O(N)`} </div>
                

            </code>
        
        </TabPanel>
        <TabPanel value="3"></TabPanel>
    </TabContext>
    </Box>


    </>
    )
}

export default BFSCode;