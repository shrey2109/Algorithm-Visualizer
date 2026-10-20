import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const StackCode = () => {
  const CppCode = `#include <iostream>
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

  const JavaCode = `class Stack {
    static final int MAX = 1000;
    int top;
    int a[] = new int[MAX];

    Stack() { top = -1; }

    boolean isEmpty() {
        return (top < 0);
    }

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
}`;

  const PythonCode = `class Stack:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

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

    def size(self):
        return len(self.items)`;

  return (
    <AlgorithmDetails
      title="Stack Data Structure"
      bestTime="O(1)"
      avgTime="O(1)"
      worstTime="O(1)"
      space="O(N)"
      properties={[
        { name: "Order", value: "LIFO (Last-In, First-Out)" },
        { name: "Push / Pop", value: "O(1) Constant Time" },
        { name: "Access", value: "Top Element Only" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default StackCode;
