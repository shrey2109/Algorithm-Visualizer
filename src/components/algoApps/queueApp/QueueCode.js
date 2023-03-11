import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const QueueCode = () => {

const CppCode = `
// C++ program to implement a queue using an array
#include <bits/stdc++.h>
using namespace std;

struct Queue {
	int front, rear, capacity;
	int* queue;
	Queue(int c)
	{
		front = rear = 0;
		capacity = c;
		queue = new int;
	}

	~Queue() { delete[] queue; }

	// function to insert an element
	// at the rear of the queue
	void queueEnqueue(int data)
	{
		// check queue is full or not
		if (capacity == rear) {
			printf("Queue is full");
			return;
		}

		// insert element at the rear
		else {
			queue[rear] = data;
			rear++;
		}
		return;
	}

	// function to delete an element
	// from the front of the queue
	void queueDequeue()
	{
		// if queue is empty
		if (front == rear) {
			printf("Queue is empty");
			return;
		}

		// shift all the elements from index 2 till rear
		// to the left by one
		else {
			for (int i = 0; i < rear - 1; i++) {
				queue[i] = queue[i + 1];
			}

			// decrement rear
			rear--;
		}
		return;
	}

	// print queue elements
	void queueDisplay()
	{
		int i;
		if (front == rear) {
			printf("Queue is Empty");
			return;
		}

		// traverse front to rear and print elements
		for (i = front; i < rear; i++) {
			printf(" %d ", queue[i]);
		}
		return;
	}

	// print front of queue
	void queueFront()
	{
		if (front == rear) {
			printf("Queue is Empty");
			return;
		}
		printf("Front Element is: %d", queue[front]);
		return;
	}
};

// Driver code
int main(void)
{
	// Create a queue of capacity 4
	Queue q(4);

	// print Queue elements
	q.queueDisplay();

	// inserting elements in the queue
	q.queueEnqueue(20);
	q.queueEnqueue(30);
	q.queueEnqueue(40);
	q.queueEnqueue(50);

	// print Queue elements
	q.queueDisplay();

	// insert element in the queue
	q.queueEnqueue(60);

	// print Queue elements
	q.queueDisplay();

	q.queueDequeue();
	q.queueDequeue();

	printf("after two node deletion");

	// print Queue elements
	q.queueDisplay();

	// print front of the queue
	q.queueFront();

	return 0;
}
  `;






  const JavaCode = `
  // Java program to implement a queue using an array
class Queue {
	static private int front, rear, capacity;
	static private int queue[];

	Queue(int c)
	{
		front = rear = 0;
		capacity = c;
		queue = new int[capacity];
	}

	// function to insert an element
	// at the rear of the queue
	static void queueEnqueue(int data)
	{
		// check queue is full or not
		if (capacity == rear) {
			System.out.printf("Queue is full");
			return;
		}

		// insert element at the rear
		else {
			queue[rear] = data;
			rear++;
		}
		return;
	}

	// function to delete an element
	// from the front of the queue
	static void queueDequeue()
	{
		// if queue is empty
		if (front == rear) {
			System.out.printf("Queue is empty");
			return;
		}

		// shift all the elements from index 2 till rear
		// to the right by one
		else {
			for (int i = 0; i < rear - 1; i++) {
				queue[i] = queue[i + 1];
			}

			// store 0 at rear indicating there's no element
			if (rear < capacity)
				queue[rear] = 0;

			// decrement rear
			rear--;
		}
		return;
	}

	// print queue elements
	static void queueDisplay()
	{
		int i;
		if (front == rear) {
			System.out.printf("Queue is Empty");
			return;
		}

		// traverse front to rear and print elements
		for (i = front; i < rear; i++) {
			System.out.printf(" %d ", queue[i]);
		}
		return;
	}

	// print front of queue
	static void queueFront()
	{
		if (front == rear) {
			System.out.printf("Queue is Empty");
			return;
		}
		System.out.printf("Front Element is: %d",queue[front]);
		return;
	}
}

public class StaticQueueinjava {

	// Driver code
	public static void main(String[] args)
	{
		// Create a queue of capacity 4
		Queue q = new Queue(4);

		// print Queue elements
		q.queueDisplay();

		// inserting elements in the queue
		q.queueEnqueue(20);
		q.queueEnqueue(30);
		q.queueEnqueue(40);
		q.queueEnqueue(50);

		// print Queue elements
		q.queueDisplay();

		// insert element in the queue
		q.queueEnqueue(60);

		// print Queue elements
		q.queueDisplay();

		q.queueDequeue();
		q.queueDequeue();
		System.out.printf("after two node deletion");

		// print Queue elements
		q.queueDisplay();

		// print front of the queue
		q.queueFront();
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
            <h1> Code for Queue Data Structure </h1>

        

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
						<div style={{marginLeft:'0px'}}> {`For Push & Pop Function : O(1)`} </div>
					</code>
				</TabPanel>
				<TabPanel value="2"> 

					<code>
						<div style={{marginLeft:'0px'}}> {`Whole Queue : O(N)`} </div>
					</code>
				
				</TabPanel>
				<TabPanel value="3"></TabPanel>
			</TabContext>
		</Box>


    </>
    )
}

export default QueueCode;