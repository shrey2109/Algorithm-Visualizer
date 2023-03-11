import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const StackCode = () => {

const CppCode = `
/* C++ program to implement basic stack
operations */
#include <bits/stdc++.h>

using namespace std;

#define MAX 1000

class Stack {
	int top;

public:
	int a[MAX]; // Maximum size of Stack

	Stack() { top = -1; }
	bool push(int x);
	int pop();
	int peek();
	bool isEmpty();
};

bool Stack::push(int x)
{
	if (top >= (MAX - 1)) {
		cout << "Stack Overflow";
		return false;
	}
	else {
		a[++top] = x;
		cout << x << " pushed into stack";
		return true;
	}
}

int Stack::pop()
{
	if (top < 0) {
		cout << "Stack Underflow";
		return 0;
	}
	else {
		int x = a[top--];
		return x;
	}
}
int Stack::peek()
{
	if (top < 0) {
		cout << "Stack is Empty";
		return 0;
	}
	else {
		int x = a[top];
		return x;
	}
}

bool Stack::isEmpty()
{
	return (top < 0);
}

// Driver program to test above functions
int main()
{
	class Stack s;
	s.push(10);
	s.push(20);
	s.push(30);
	cout << s.pop() << " Popped from stack";
	
	//print top element of stack after popping
	cout << "Top element is : " << s.peek() << endl;
	
	//print all elements in stack :
	cout <<"Elements present in stack : ";
	while(!s.isEmpty())
	{
		// print top element in stack
		cout << s.peek() <<" ";
		// remove top element in stack
		s.pop();
	}

	return 0;
}

  `;






  const JavaCode = `
  /* Java program to implement basic stack
operations */
class Stack {
	static final int MAX = 1000;
	int top;
	int a[] = new int[MAX]; // Maximum size of Stack

	boolean isEmpty()
	{
		return (top < 0);
	}
	Stack()
	{
		top = -1;
	}

	boolean push(int x)
	{
		if (top >= (MAX - 1)) {
			System.out.println("Stack Overflow");
			return false;
		}
		else {
			a[++top] = x;
			System.out.println(x + " pushed into stack");
			return true;
		}
	}

	int pop()
	{
		if (top < 0) {
			System.out.println("Stack Underflow");
			return 0;
		}
		else {
			int x = a[top--];
			return x;
		}
	}

	int peek()
	{
		if (top < 0) {
			System.out.println("Stack Underflow");
			return 0;
		}
		else {
			int x = a[top];
			return x;
		}
	}
	
	void print(){
	for(int i = top;i>-1;i--){
	System.out.print(" "+ a[i]);
	}
}
}

// Driver code
class Main {
	public static void main(String args[])
	{
		Stack s = new Stack();
		s.push(10);
		s.push(20);
		s.push(30);
		System.out.println(s.pop() + " Popped from stack");
		System.out.println("Top element is :" + s.peek());
		System.out.print("Elements present in stack :");
		s.print();
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
            <h1> Code for Bubble Sort </h1>

        

        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        {/* <TabContext> */}
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
						<div style={{marginLeft:'0px'}}> {`Whole Stack : O(N)`} </div>
					</code>
				
				</TabPanel>
				<TabPanel value="3"></TabPanel>
			</TabContext>
		</Box>



    </>
    )
}

export default StackCode;