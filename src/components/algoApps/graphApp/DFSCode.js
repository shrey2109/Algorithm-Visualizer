import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const DFSCode = () => {
  const CppCode = `void dfs(int node, vector<int> adj[], vector<bool> &visited, vector<int> &result) {
    visited[node] = true;
    result.push_back(node);

    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, adj, visited, result);
        }
    }
}

vector<int> dfsOfGraph(int V, vector<int> adj[], int startNode = 0) {
    vector<bool> visited(V, false);
    vector<int> result;
    dfs(startNode, adj, visited, result);
    return result;
}`;

  const JavaCode = `private void dfs(int node, boolean vis[], ArrayList<ArrayList<Integer>> adj, ArrayList<Integer> result) {
    vis[node] = true;
    result.add(node);

    for (Integer neighbor : adj.get(node)) {
        if (!vis[neighbor]) {
            dfs(neighbor, vis, adj, result);
        }
    }
}

public ArrayList<Integer> dfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
    boolean vis[] = new boolean[V];
    ArrayList<Integer> result = new ArrayList<>();
    dfs(0, vis, adj, result);
    return result;
}`;

  const PythonCode = `def dfs_of_graph(V, adj, start_node=0):
    visited = [False] * V
    result = []

    def dfs(node):
        visited[node] = True
        result.append(node)
        for neighbor in adj[node]:
            if not visited[neighbor]:
                dfs(neighbor)

    dfs(start_node)
    return result`;

  return (
    <AlgorithmDetails
      title="Depth-First Search"
      bestTime="O(V + E)"
      avgTime="O(V + E)"
      worstTime="O(V + E)"
      space="O(V)"
      properties={[
        { name: "Data Structure", value: "Recursion Stack / Call Stack" },
        { name: "Backtracking", value: "Supports Depth Exploration & Cycle Detection" },
        { name: "Exploration", value: "Deepest Branch First" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default DFSCode;
