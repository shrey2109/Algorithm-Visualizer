import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const BFSInfo = () => {
  const cppCode = `vector<int> bfsOfGraph(int V, vector<int> adj[], int startNode = 0) {
    vector<int> bfsOrder;
    vector<bool> visited(V, false);
    queue<int> q;

    visited[startNode] = true;
    q.push(startNode);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        bfsOrder.push_back(node);

        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
    return bfsOrder;
}`;

  const javaCode = `public ArrayList<Integer> bfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
    ArrayList<Integer> bfsOrder = new ArrayList<>();
    boolean vis[] = new boolean[V];
    Queue<Integer> q = new LinkedList<>();

    q.add(0);
    vis[0] = true;

    while (!q.isEmpty()) {
        Integer node = q.poll();
        bfsOrder.add(node);

        for (Integer neighbor : adj.get(node)) {
            if (!vis[neighbor]) {
                vis[neighbor] = true;
                q.add(neighbor);
            }
        }
    }
    return bfsOrder;
}`;

  const pythonCode = `from collections import deque

def bfs_of_graph(V, adj, start_node=0):
    visited = [False] * V
    bfs_order = []
    queue = deque([start_node])
    visited[start_node] = True

    while queue:
        node = queue.popleft()
        bfs_order.append(node)

        for neighbor in adj[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)
    return bfs_order`;

  return (
    <AlgorithmDocPage
      customClass="bfsinfo"
      category="Graph Traversal"
      title="Breadth-First Search"
      subtitle="A fundamental graph and tree traversal algorithm that explores all neighbor nodes at the present depth level before moving on to the nodes at the next depth level."
      backLink="/graph"
      backLabel="Back to Graph Visualizer"
      complexity={{
        bestTime: 'O(V + E)',
        bestNote: 'Visits every reachable vertex once and examines every incident edge',
        avgTime: 'O(V + E)',
        avgNote: 'Linear proportional to vertices V and edges E',
        worstTime: 'O(V + E)',
        worstNote: 'Explores all nodes and edges in the connected component',
        space: 'O(V)',
        spaceNote: 'Queue stores nodes at current frontier (up to O(V) in worst case)',
      }}
      properties={[
        { label: 'Data Structure', value: 'Queue (FIFO)' },
        { label: 'Shortest Path', value: 'Guaranteed (in unweighted graphs)' },
        { label: 'Traversal Style', value: 'Level-by-Level (Radial Wavefront)' },
        { label: 'Graph Types', value: 'Directed, Undirected, Cyclic, Acyclic' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Initialize Queue and Visited Array',
          desc: 'Create a FIFO queue and a visited boolean array of size V. Enqueue the starting node and mark it as visited.',
        },
        {
          num: 2,
          title: 'Dequeue Frontier Node',
          desc: 'While the queue is not empty, remove the front node and record it in the traversal order.',
        },
        {
          num: 3,
          title: 'Enqueue Unvisited Neighbors',
          desc: 'Iterate over all adjacent neighbors of the current node. If a neighbor has not yet been visited, mark it visited immediately and push it to the queue.',
        },
        {
          num: 4,
          title: 'Repeat Until Queue is Empty',
          desc: 'Repeat steps 2 and 3 until the queue is completely drained, concluding the exploration of the component.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough: Graph with Edges 0-1, 0-2, 0-3, 2-4 (Start at Node 0)',
        passes: [
          {
            pass: 'Queue: [0]',
            detail: 'Start node 0 marked visited. Dequeue 0 → Add 0 to output. Enqueue neighbors [1, 2, 3].',
          },
          {
            pass: 'Queue: [1, 2, 3]',
            detail: 'Dequeue 1 → Output: [0, 1]. No unvisited neighbors.',
          },
          {
            pass: 'Queue: [2, 3]',
            detail: 'Dequeue 2 → Output: [0, 1, 2]. Unvisited neighbor 4 discovered! Mark 4 visited, enqueue 4.',
          },
          {
            pass: 'Queue: [3, 4]',
            detail: 'Dequeue 3 → Output: [0, 1, 2, 3]. Dequeue 4 → Output: [0, 1, 2, 3, 4]. Queue empty. Done!',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Guarantees shortest path in unweighted graphs: the first time a target node is visited, it is reached via minimum edges.',
        'Never gets trapped in infinite depth loops on infinite or cyclical branches.',
        'Explores solutions closest to the root first.',
      ]}
      disadvantages={[
        'High memory consumption: must store an entire frontier level in the queue simultaneously (O(b^d) where b is branching factor and d is depth).',
        'Not ideal for deep search trees where target is located far down a specific branch.',
      ]}
      applications={[
        'Shortest Path in GPS / map routing over unweighted road networks.',
        'Social network friend recommendations (Degrees of separation / 1st and 2nd degree connections).',
        'Web crawlers discovering web pages level by level.',
        'Peer-to-peer network broadcasting and BitTorrent chunk discovery.',
      ]}
    />
  );
};

export default BFSInfo;
