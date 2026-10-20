import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const DFSInfo = () => {
  const cppCode = `void dfs(int node, vector<int> adj[], vector<bool> &visited, vector<int> &result) {
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

  const javaCode = `private void dfs(int node, boolean vis[], ArrayList<ArrayList<Integer>> adj, ArrayList<Integer> result) {
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

  const pythonCode = `def dfs_of_graph(V, adj, start_node=0):
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
    <AlgorithmDocPage
      customClass="dfsinfo"
      category="Graph Traversal"
      title="Depth-First Search"
      subtitle="An exploratory graph traversal algorithm that plunges as deep as possible along each branch before backtracking, utilizing recursion or an explicit stack."
      backLink="/graph"
      backLabel="Back to Graph Visualizer"
      complexity={{
        bestTime: 'O(V + E)',
        bestNote: 'Traverses each vertex once and each edge twice (in undirected graph)',
        avgTime: 'O(V + E)',
        avgNote: 'Proportional to sum of vertices and edges',
        worstTime: 'O(V + E)',
        worstNote: 'Explores all nodes and edges in the connected component',
        space: 'O(V)',
        spaceNote: 'Recursion stack depth reaches up to O(V) in degenerate graphs (e.g. linked line)',
      }}
      properties={[
        { label: 'Data Structure', value: 'Recursion Call Stack / LIFO Stack' },
        { label: 'Technique', value: 'Backtracking' },
        { label: 'Traversal Style', value: 'Deepest Branch First' },
        { label: 'Cycle Detection', value: 'Back-edge detection in directed/undirected graphs' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Mark and Visit Starting Node',
          desc: 'Mark the initial node as visited and record it in the traversal path.',
        },
        {
          num: 2,
          title: 'Explore First Unvisited Neighbor',
          desc: 'Inspect the current node’s adjacency list. Upon identifying an unvisited neighbor, immediately descend into it recursively without inspecting other neighbors.',
        },
        {
          num: 3,
          title: 'Hit Dead End & Backtrack',
          desc: 'When a node has no remaining unvisited neighbors (a leaf or dead-end), backtrack up the call stack to the previous node and continue exploring remaining branches.',
        },
        {
          num: 4,
          title: 'Exhaust Call Stack',
          desc: 'Continue the recursive descent and backtracking until the entire reachable connected component has been fully explored.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough: Graph with Edges 0-2, 2-4, 0-1, 0-3 (Start at Node 0)',
        passes: [
          {
            pass: 'Step 1 (Visit 0)',
            detail: 'Start at node 0. Mark visited. Result: [0]. First neighbor is 2.',
          },
          {
            pass: 'Step 2 (Visit 2)',
            detail: 'Descend to node 2. Mark visited. Result: [0, 2]. Neighbor of 2 is 4.',
          },
          {
            pass: 'Step 3 (Visit 4 & Backtrack)',
            detail: 'Descend to node 4. Mark visited. Result: [0, 2, 4]. Node 4 has no unvisited neighbors. Backtrack to 2, then backtrack to 0.',
          },
          {
            pass: 'Step 4 (Explore 1 and 3)',
            detail: 'From node 0, next neighbor is 1. Visit 1: [0, 2, 4, 1]. Backtrack to 0. Visit 3: [0, 2, 4, 1, 3]. Complete!',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Low Memory: requires significantly less memory than BFS when the tree is broad (O(h) vs O(b^d), where h is height).',
        'Natural for Backtracking: ideal for games, puzzle solving (Sudoku, N-Queens), and maze navigation.',
        'Foundation for advanced topological sorting and Strongly Connected Components (Tarjan / Kosaraju).',
      ]}
      disadvantages={[
        'Not guaranteed to find the shortest path in unweighted graphs.',
        'Can get trapped in deep or infinite paths without depth bounding (IDDFS).',
        'Deep recursion can trigger Call Stack Overflow on very large linear graphs.',
      ]}
      applications={[
        'Topological sorting in build systems and task scheduling (e.g., Make, Webpack module dependency graph).',
        'Detecting cycles in directed graphs (e.g., deadlock detection in operating systems).',
        'Solving mazes and finding paths through combinatorial constraint puzzles.',
      ]}
    />
  );
};

export default DFSInfo;
