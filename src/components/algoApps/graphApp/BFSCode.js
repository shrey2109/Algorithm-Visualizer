import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const BFSCode = () => {
  const CppCode = `vector<int> bfsOfGraph(int V, vector<int> adj[], int startNode = 0) {
    vector<int> bfs;
    vector<bool> visited(V, false);
    queue<int> q;

    visited[startNode] = true;
    q.push(startNode);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        bfs.push_back(node);

        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
    return bfs;
}`;

  const JavaCode = `public ArrayList<Integer> bfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
    ArrayList<Integer> bfs = new ArrayList<>();
    boolean vis[] = new boolean[V];
    Queue<Integer> q = new LinkedList<>();

    q.add(0);
    vis[0] = true;

    while (!q.isEmpty()) {
        Integer node = q.poll();
        bfs.add(node);

        for (Integer neighbor : adj.get(node)) {
            if (!vis[neighbor]) {
                vis[neighbor] = true;
                q.add(neighbor);
            }
        }
    }
    return bfs;
}`;

  const PythonCode = `from collections import deque

def bfs_of_graph(V, adj, start_node=0):
    visited = [False] * V
    bfs_result = []
    queue = deque([start_node])
    visited[start_node] = True

    while queue:
        node = queue.popleft()
        bfs_result.append(node)

        for neighbor in adj[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)
    return bfs_result`;

  return (
    <AlgorithmDetails
      title="Breadth-First Search"
      bestTime="O(V + E)"
      avgTime="O(V + E)"
      worstTime="O(V + E)"
      space="O(V)"
      properties={[
        { name: "Data Structure", value: "Queue (FIFO)" },
        { name: "Shortest Path", value: "Guaranteed (Unweighted Graphs)" },
        { name: "Exploration", value: "Level by Level" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default BFSCode;
