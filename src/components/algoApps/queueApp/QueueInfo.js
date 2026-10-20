import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const QueueInfo = () => {
  const cppCode = `#include <iostream>
using namespace std;

class Queue {
    int front, rear, capacity;
    int* queue;
public:
    Queue(int c) {
        front = rear = 0;
        capacity = c;
        queue = new int[c];
    }
    ~Queue() { delete[] queue; }

    bool enqueue(int data) {
        if (capacity == rear) {
            cout << "Queue is full\\n";
            return false;
        }
        queue[rear++] = data;
        return true;
    }

    int dequeue() {
        if (front == rear) {
            cout << "Queue is empty\\n";
            return -1;
        }
        int data = queue[front];
        for (int i = 0; i < rear - 1; i++) {
            queue[i] = queue[i + 1];
        }
        rear--;
        return data;
    }

    int getFront() {
        if (front == rear) return -1;
        return queue[front];
    }
};`;

  const javaCode = `class Queue {
    private int front, rear, capacity;
    private int[] queue;

    Queue(int c) {
        front = rear = 0;
        capacity = c;
        queue = new int[c];
    }

    boolean enqueue(int data) {
        if (capacity == rear) {
            System.out.println("Queue is full");
            return false;
        }
        queue[rear++] = data;
        return true;
    }

    int dequeue() {
        if (front == rear) {
            System.out.println("Queue is empty");
            return -1;
        }
        int data = queue[front];
        for (int i = 0; i < rear - 1; i++) {
            queue[i] = queue[i + 1];
        }
        rear--;
        return data;
    }

    int getFront() {
        if (front == rear) return -1;
        return queue[front];
    }
}`;

  const pythonCode = `from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("dequeue from empty queue")
        return self.items.popleft()

    def front(self):
        if self.is_empty():
            raise IndexError("queue is empty")
        return self.items[0]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)`;

  return (
    <AlgorithmDocPage
      customClass="queueinfo"
      category="Linear Data Structure"
      title="Queue Data Structure"
      subtitle="A fundamental linear data structure operating under the First-In, First-Out (FIFO) paradigm, where insertions occur exclusively at the Rear and removals occur exclusively at the Front."
      backLink="/queue"
      backLabel="Back to Queue Visualizer"
      complexity={{
        bestTime: 'O(1)',
        bestNote: 'Enqueue, Dequeue, and Front operations execute in O(1) time',
        avgTime: 'O(1)',
        avgNote: 'Constant-time pointer updates in circular array or linked list',
        worstTime: 'O(1)',
        worstNote: 'Amortized O(1) in dynamic buffer allocations',
        space: 'O(N)',
        spaceNote: 'Linear memory proportional to the number of buffered items',
      }}
      properties={[
        { label: 'Access Principle', value: 'FIFO (First-In, First-Out)' },
        { label: 'Insertion Point', value: 'Rear / Tail (enqueue)' },
        { label: 'Deletion Point', value: 'Front / Head (dequeue)' },
        { label: 'Fairness', value: 'Strictly preserves arrival order' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Enqueue Operation (Insertion)',
          desc: 'Verify if the queue is full (in bounded implementations). Insert the new element at the rear index and increment or wrap the rear pointer.',
        },
        {
          num: 2,
          title: 'Dequeue Operation (Removal)',
          desc: 'Verify if the queue is empty. Retrieve the element at the front index, advance or wrap the front pointer, and return the item.',
        },
        {
          num: 3,
          title: 'Front / Peek Operation',
          desc: 'Inspect the item at the front of the queue without mutating pointers or removing the entry.',
        },
        {
          num: 4,
          title: 'State Queries',
          desc: 'isEmpty() verifies if front == rear. isFull() verifies if capacity limit has been reached.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough: Sequence enqueue(10), enqueue(20), dequeue(), enqueue(30)',
        passes: [
          {
            pass: 'enqueue(10)',
            detail: 'Queue: [10]. Front = 10, Rear = 10.',
          },
          {
            pass: 'enqueue(20)',
            detail: 'Queue: [10, 20]. Front = 10, Rear = 20.',
          },
          {
            pass: 'dequeue()',
            detail: 'Remove oldest element 10 from Front. Queue: [20]. Returns 10 (First-In, First-Out!).',
          },
          {
            pass: 'enqueue(30)',
            detail: 'Queue: [20, 30]. Front = 20, Rear = 30.',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Fairness: guarantees processing in exact order of arrival (First-Come, First-Served).',
        'Decoupling: acts as a resilient buffer between fast producers and slower consumers.',
        'O(1) time complexity for enqueue and dequeue in circular buffers and linked lists.',
      ]}
      disadvantages={[
        'No direct random access to elements in the center of the queue.',
        'In naive array implementations without circular wrapping, shifting elements on dequeue can cause O(N) operations.',
      ]}
      applications={[
        'CPU task scheduling (Round Robin and multi-level feedback queues).',
        'Printer spooling and asynchronous disk I/O buffers.',
        'Message brokers and event queues (e.g., RabbitMQ, Apache Kafka, AWS SQS).',
        'Breadth-First Search (BFS) graph frontier exploration.',
      ]}
    />
  );
};

export default QueueInfo;
