import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const InsertionCode = () => {
  const [codeTabWidth, setCodeTabWidth] = useState('');

  const CppCode = `
#include <bits/stdc++.h>
using namespace std;

void insertion_sort(int arr[], int n) {
    for (int i = 0; i <= n - 1; i++) {
        int j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            int temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }

    cout << "After Using insertion sort: " << "\n";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

int main()
{
    int arr[] = {13, 46, 24, 52, 20, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Before Using insertion Sort: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    insertion_sort(arr, n);
    return 0;
}
  `;

  const JavaCode = `
  import java.util.*;

public class Main {
    static void insertion_sort(int[] arr, int n) {
        for (int i = 0; i <= n - 1; i++) {
            int j = i;
            while (j > 0 && arr[j - 1] > arr[j]) {
                int temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                j--;
            }
        }

        System.out.println("After insertion sort: ");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
    public static void main(String args[]) {
        int arr[] = {13, 46, 24, 52, 20, 9};
        int n = arr.length;
        System.out.println("Before Using insertion Sort: ");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
        insertion_sort(arr, n);
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
      <h1> Code for Insertion Sort </h1>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {/* <TabList> */}
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                  width: '43%',
                }}
                label="C++"
                value="1"
              />
              <Tab
                style={{
                  boxShadow: '2px 0px 3px rgb(86, 86, 86)',
                  margin: '10px',
                  fontSize: '15px',
                  width: '43%',
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
      <h1> Time And Space Complexity for Insertion Sort </h1>

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
              <div style={{ marginLeft: '0px' }}> {`O(N2)`} </div>
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

export default InsertionCode;
