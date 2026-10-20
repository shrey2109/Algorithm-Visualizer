import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const QueueCode = () => {
  const CppCode = `#include <iostream>
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

  const JavaCode = `class Queue {
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

  const PythonCode = `from collections import deque

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
    <AlgorithmDetails
      title="Queue Data Structure"
      bestTime="O(1)"
      avgTime="O(1)"
      worstTime="O(1)"
      space="O(N)"
      properties={[
        { name: "Order", value: "FIFO (First-In, First-Out)" },
        { name: "Enqueue / Dequeue", value: "O(1) Constant Time" },
        { name: "Access", value: "Front Element Only" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default QueueCode;
