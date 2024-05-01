import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const BinaryCode = () => {
  const [codeTabWidth, setCodeTabWidth] = useState('');

  const CppCode = `
#include<bits/stdc++.h>
using namespace std;

int main() {
        int arr[]= {2,3,7,10,13,14,17};
        int k = 14;

        //Binary search
        int n = 6;
        int start =0, end=n;
       int mid,loc=-1;
        while (start<=n-1){
            //Making array half everytime
            mid=(start+end)/2;

            //checking in which part the element is present
            if (arr[mid]<k){
                start=mid+1;
            }
            else if (arr[mid]>k){
                end=mid-1;
            }
            if (arr[mid]==k)
            {
                loc = mid;
                break;
            }
        }
        if (loc==-1){
            cout<<"Element not found!"<<endl;
        }
        else {
            cout<<"Element " << k << " Found at " << loc << " index";
        }

    }
  `;

  const JavaCode = `
  public class BinarySearch {

    public static void main(String[] args) {
        int arr[]= {2,3,7,10,13,14,17};
        int k = 14;

        //Binary search
        int n = arr.length-1;
        int start =0, end=n;
       int mid,loc=-1;
        while (start<=n-1){
            //Making array half everytime
            mid=(start+end)/2;

            //checking in which part the element is present
            if (arr[mid]<k){
                start=mid+1;
            }
            else if (arr[mid]>k){
                end=mid-1;
            }
            if (arr[mid]==k)
            {
                loc = mid;
                break;
            }
        }
        if (loc==-1){
            System.out.println("Element not found!");
        }
        else {
            System.out.println("Element " + k + " Found at " + loc + " index");
        }

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
      <h1> Code for Binary Search </h1>

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
      <h1> Time and Space Complexity Binary Search </h1>

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
              <div style={{ marginLeft: '0px' }}> {`O(log(N))`} </div>
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

export default BinaryCode;
