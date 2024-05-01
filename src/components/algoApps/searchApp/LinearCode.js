import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const LinearCode = () => {
  const [codeTabWidth, setCodeTabWidth] = useState('');

  const CppCode = `
#include <iostream>
using namespace std;

int LinearSearch(int arr[], int n, int element){
    
    for(int i=0;i<n;i++){
        
        if(arr[i] == element){
            
            // Return index, if the given element 
            // matches with any element of array.
            return i;
        }
    }
    
    // If the given number not found.
    return -1;
    
}
int main() {
	
	// Let size of array be 5 and element 
	// to be searched for be 7.
	int n = 5, element = 7;
	int arr[n] = {1,3,5,7,8};
	cout<<LinearSearch(arr,n,element);
	
	return 0;
}
  `;

  const JavaCode = `
  class LineaerSearch {
    
    static int LinearSearch(int[] arr, int n, int element){
        
        for(int i=0;i<n;i++){
        
        if(arr[i] == element){
            
            // Return index, if the given element 
            // matches with any element of array.
            return i;
        }
    }
    
    // If the given number not found.
    return -1;
            

    }
    public static void main(String[] args) {

        // Let size of array be 5 and element 
        // to be searched for be 7.
        int n = 5, element = 7;
	    int[] arr = {1,3,5,7,8};
       System.out.println(LinearSearch(arr,n,element));
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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const width = screenWidth < 800 ? '' : '60%';
      setCodeTabWidth(width);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h1> Code for Linear Search </h1>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          {/* <TabContext> */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {/* <TabList> */}
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                }}
                label="C++"
                value="1"
              />
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                }}
                label="JAVA"
                value="2"
              />
            </TabList>
          </Box>

          {/* <TabPanel value="1">  */}
          <TabPanel
            style={{
              boxShadow: '7px 10px 14px -2px rgb(86, 86, 86)',
              width: codeTabWidth,
              backgroundColor: 'black',
              borderRadius: '20px',
              color: 'white',
            }}
            value="1"
          >
            <SyntaxHighlighter language="cpp" style={atomOneDark}>
              {CppCode}
            </SyntaxHighlighter>
          </TabPanel>

          <TabPanel
            style={{
              boxShadow: '7px 10px 14px -2px rgb(86, 86, 86)',
              width: codeTabWidth,
              backgroundColor: 'black',
              borderRadius: '20px',
              color: 'white',
            }}
            value="2"
          >
            <SyntaxHighlighter language="cpp" style={atomOneDark}>
              {JavaCode}
            </SyntaxHighlighter>
          </TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>

      <br />
      <br />
      <h1> Time and Space Complexity Linear Search </h1>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={compvalue}>
          {/* <TabContext> */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleCompChange}
              aria-label="lab API tabs example"
            >
              {/* <TabList> */}
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                  width: '43%',
                }}
                label="Time Complexity"
                value="1"
              />
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                  width: '43%',
                }}
                label="Auxillary Space Complexity"
                value="2"
              />
            </TabList>
          </Box>

          <TabPanel value="1">
            <code>
              <div style={{ marginLeft: '0px' }}> {`O(N)`} </div>
            </code>
          </TabPanel>
          <TabPanel value="2">
            <code>
              <div style={{ marginLeft: '0px' }}> {`O(1)`} </div>
            </code>
          </TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default LinearCode;
