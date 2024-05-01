import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const DFSCode = () => {
  const [codeTabWidth, setCodeTabWidth] = useState('');

  const CppCode = `
#include <bits/stdc++.h>
using namespace std;

class Solution {
  private: 
    void dfs(int node, vector<int> adj[], int vis[], vector<int> &ls) {
        vis[node] = 1; 
        ls.push_back(node); 
        // traverse all its neighbours
        for(auto it : adj[node]) {
            // if the neighbour is not visited
            if(!vis[it]) {
                dfs(it, adj, vis, ls); 
            }
        }
    }
  public:
    // Function to return a list containing the DFS traversal of the graph.
    vector<int> dfsOfGraph(int V, vector<int> adj[]) {
        int vis[V] = {0}; 
        int start = 0;
        // create a list to store dfs
        vector<int> ls; 
        // call dfs for starting node
        dfs(start, adj, vis, ls); 
        return ls; 
    }
};

void addEdge(vector <int> adj[], int u, int v) {
    adj[u].push_back(v);
    adj[v].push_back(u);
}

void printAns(vector <int> &ans) {
    for (int i = 0; i < ans.size(); i++) {
        cout << ans[i] << " ";
    }
}

int main() 
{
    vector <int> adj[5];
    
    addEdge(adj, 0, 2);
    addEdge(adj, 2, 4);
    addEdge(adj, 0, 1);
    addEdge(adj, 0, 3);

    Solution obj;
    vector <int> ans = obj.dfsOfGraph(5, adj);
    printAns(ans);

    return 0;
}
  `;

  const JavaCode = `
  import java.util.*;
class Solution {
    
    public static void dfs(int node, boolean vis[], ArrayList<ArrayList<Integer>> adj, 
    ArrayList<Integer> ls) {
        
        //marking current node as visited
        vis[node] = true;
        ls.add(node);
        
        //getting neighbour nodes
        for(Integer it: adj.get(node)) {
            if(vis[it] == false) {
                dfs(it, vis, adj, ls);
            }
        }
    }
    // Function to return a list containing the DFS traversal of the graph.
    public ArrayList<Integer> dfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
        //boolean array to keep track of visited vertices
        boolean vis[] = new boolean[V+1];
        vis[0] = true; 
        ArrayList<Integer> ls = new ArrayList<>();
        dfs(0, vis, adj, ls); 
        return ls; 
    }
    
    public static void main(String args[]) {

        ArrayList < ArrayList < Integer >> adj = new ArrayList < > ();
        for (int i = 0; i < 5; i++) {
            adj.add(new ArrayList < > ());
        }
        adj.get(0).add(2);
        adj.get(2).add(0);
        adj.get(0).add(1);
        adj.get(1).add(0);
        adj.get(0).add(3);
        adj.get(3).add(0);
        adj.get(2).add(4);
        adj.get(4).add(2);
        
        Solution sl = new Solution(); 
        ArrayList < Integer > ans = sl.dfsOfGraph(5, adj);
        int n = ans.size(); 
        for(int i = 0;i<n;i++) {
            System.out.print(ans.get(i)+" "); 
        }
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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const width = screenWidth < 800 ? '' : '60%';
      setCodeTabWidth(width);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h1> Code for Depth-First Search </h1>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {/* <TabList> */}
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                }}
                label="C++"
                value="1"
              />
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                }}
                label="JAVA"
                value="2"
              />
            </TabList>
          </Box>

          {/* <TabPanel value="1">  */}
          <TabPanel
            style={{
              boxShadow: '7px 10px 14px -2px rgb(86, 86, 86)',
              width: codeTabWidth,
              backgroundColor: 'black',
              borderRadius: '20px',
              color: 'white',
            }}
            value="1"
          >
            <SyntaxHighlighter language="cpp" style={atomOneDark}>
              {CppCode}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel
            style={{
              boxShadow: '7px 10px 14px -2px rgb(86, 86, 86)',
              width: codeTabWidth,
              backgroundColor: 'black',
              borderRadius: '20px',
              color: 'white',
            }}
            value="2"
          >
            <SyntaxHighlighter language="cpp" style={atomOneDark}>
              {JavaCode}
            </SyntaxHighlighter>
          </TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>

      <br />
      <br />
      <h1> Time and Space Complexity for Depth-First Search </h1>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={compvalue}>
          {/* <TabContext> */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleCompChange}
              aria-label="lab API tabs example"
            >
              {/* <TabList> */}
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                }}
                label="Time Complexity"
                value="1"
              />
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                }}
                label="Auxillary Space Complexity"
                value="2"
              />
            </TabList>
          </Box>

          <TabPanel value="1">
            <code>
              <div style={{ marginLeft: '0px' }}>
                {' '}
                {`For an undirected graph, O(N) + O(2E), For a directed graph, O(N) + O(E)`}{' '}
              </div>
            </code>
          </TabPanel>
          <TabPanel value="2">
            <code>
              <div style={{ marginLeft: '0px' }}> {`O(3N) ~ O(N)`} </div>
            </code>
          </TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default DFSCode;
