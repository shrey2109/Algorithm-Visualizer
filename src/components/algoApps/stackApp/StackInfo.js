import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const StackInfo = () => {
  const cppCode = `#include <iostream>
using namespace std;

#define MAX 1000

class Stack {
    int top;
    int a[MAX];

public:
    Stack() { top = -1; }

    bool push(int x) {
        if (top >= (MAX - 1)) {
            cout << "Stack Overflow\\n";
            return false;
        }
        a[++top] = x;
        return true;
    }

    int pop() {
        if (top < 0) {
            cout << "Stack Underflow\\n";
            return -1;
        }
        return a[top--];
    }

    int peek() {
        if (top < 0) {
            cout << "Stack is Empty\\n";
            return -1;
        }
        return a[top];
    }

    bool isEmpty() {
        return (top < 0);
    }
};`;

  const javaCode = `class Stack {
    static final int MAX = 1000;
    int top;
    int a[] = new int[MAX];

    Stack() { top = -1; }

    boolean push(int x) {
        if (top >= (MAX - 1)) {
            System.out.println("Stack Overflow");
            return false;
        }
        a[++top] = x;
        return true;
    }

    int pop() {
        if (top < 0) {
            System.out.println("Stack Underflow");
            return -1;
        }
        return a[top--];
    }

    int peek() {
        if (top < 0) {
            System.out.println("Stack is Empty");
            return -1;
        }
        return a[top];
    }

    boolean isEmpty() {
        return (top < 0);
    }
}`;

  const pythonCode = `class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self.items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("peek from empty stack")
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)`;

  return (
    <AlgorithmDocPage
      customClass="stackinfo"
      category="Linear Data Structure"
      title="Stack Data Structure"
      subtitle="A fundamental linear data structure operating under the Last-In, First-Out (LIFO) paradigm, where both insertion and removal strictly occur at a single terminus designated as the Top."
      backLink="/stack"
      backLabel="Back to Stack Visualizer"
      complexity={{
        bestTime: 'O(1)',
        bestNote: 'Push, Pop, Peek, and isEmpty execute in constant time',
        avgTime: 'O(1)',
        avgNote: 'Direct index access or pointer dereference at Top',
        worstTime: 'O(1)',
        worstNote: 'Amortized O(1) even in dynamically resizing vectors',
        space: 'O(N)',
        spaceNote: 'Linear memory proportional to the number of stored elements',
      }}
      properties={[
        { label: 'Access Principle', value: 'LIFO (Last-In, First-Out)' },
        { label: 'Insertion Point', value: 'Top (push)' },
        { label: 'Deletion Point', value: 'Top (pop)' },
        { label: 'Random Access', value: 'Disallowed (O(1) Top access only)' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Push Operation',
          desc: 'Check for overflow (if array-based with fixed capacity). Increment top pointer by 1, and insert the new element at arr[top].',
        },
        {
          num: 2,
          title: 'Pop Operation',
          desc: 'Check for underflow (if top < 0). Retrieve the element at arr[top], decrement the top pointer by 1, and return the retrieved value.',
        },
        {
          num: 3,
          title: 'Peek / Top Inspection',
          desc: 'Read and return the value at arr[top] without mutating the top index or modifying the collection.',
        },
        {
          num: 4,
          title: 'Capacity & State Queries',
          desc: 'isEmpty() verifies if top == -1. isFull() verifies if top == capacity - 1.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough: Sequence push(10), push(20), pop(), push(30)',
        passes: [
          {
            pass: 'push(10)',
            detail: 'top = 0, Stack: [10]. Top points to 10.',
          },
          {
            pass: 'push(20)',
            detail: 'top = 1, Stack: [10, 20]. Top points to 20.',
          },
          {
            pass: 'pop()',
            detail: 'Remove 20 from top. top decrements to 0. Stack: [10]. Returns 20.',
          },
          {
            pass: 'push(30)',
            detail: 'top increments to 1. Stack: [10, 30]. Top points to 30. Last-in element 30 is next to be popped.',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'All primary operations (Push, Pop, Peek) execute in strict O(1) constant time.',
        'Prevents unintended random-access mutations, enforcing strict procedural call/undo contracts.',
        'Naturally maps to CPU call stack frames, recursion, and nested syntax trees.',
      ]}
      disadvantages={[
        'No direct random access: inspecting or deleting an element in the middle requires popping all preceding items.',
        'Fixed-size array implementations risk Stack Overflow.',
      ]}
      applications={[
        'Call Stack management in OS and programming language runtime engines.',
        'Undo/Redo functionality in text editors, graphic design software, and IDEs.',
        'Syntax parsing: balanced parentheses checking and expression evaluation (Infix to Postfix / Shunting-Yard).',
        'Browser history navigation (Back button).',
      ]}
    />
  );
};

export default StackInfo;
