import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const LinearInfo = () => {
  const cppCode = `int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i; // Target element found at index i
        }
    }
    return -1; // Target not present in array
}`;

  const javaCode = `static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`;

  const pythonCode = `def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1`;

  return (
    <AlgorithmDocPage
      customClass="linearinfo"
      category="Searching Algorithm"
      title="Linear Search"
      subtitle="A straightforward sequential search algorithm that starts at one end of a list and inspects every element until the desired target is found or the collection is exhausted."
      backLink="/search"
      backLabel="Back to Search Visualizer"
      complexity={{
        bestTime: 'O(1)',
        bestNote: 'When target element is located at the very first index',
        avgTime: 'O(N)',
        avgNote: 'On average, inspects N/2 elements before finding target',
        worstTime: 'O(N)',
        worstNote: 'Target is at the last index or not present in the array',
        space: 'O(1)',
        spaceNote: 'Requires zero additional auxiliary storage',
      }}
      properties={[
        { label: 'Paradigm', value: 'Brute Force / Sequential Scan' },
        { label: 'Data Precondition', value: 'None (works on unsorted data)' },
        { label: 'Data Structure', value: 'Arrays, Linked Lists, Streams' },
        { label: 'Space Overhead', value: 'O(1) Constant' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Receive Target Value',
          desc: 'Specify the target search key to locate within the dataset.',
        },
        {
          num: 2,
          title: 'Iterate from Index 0',
          desc: 'Initialize index pointer i = 0. Compare the element arr[i] with the target key.',
        },
        {
          num: 3,
          title: 'Match Evaluation',
          desc: 'If arr[i] == target, immediately terminate the search and return the current index i.',
        },
        {
          num: 4,
          title: 'Advance Pointer or Conclude',
          desc: 'If not matched, increment pointer i. If i reaches array length n without finding the target, conclude target does not exist and return -1.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough: Search for 7 in [1, 3, 5, 7, 8]',
        passes: [
          {
            pass: 'Index 0',
            detail: 'arr[0] = 1 ≠ 7 → Mismatch. Advance pointer to index 1.',
          },
          {
            pass: 'Index 1',
            detail: 'arr[1] = 3 ≠ 7 → Mismatch. Advance pointer to index 2.',
          },
          {
            pass: 'Index 2',
            detail: 'arr[2] = 5 ≠ 7 → Mismatch. Advance pointer to index 3.',
          },
          {
            pass: 'Index 3',
            detail: 'arr[3] = 7 == 7 → Target match found! Return index 3 immediately in 4 operations.',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Universally applicable: works on completely unsorted data without preprocessing.',
        'Supports non-contiguous data structures like singly and doubly linked lists.',
        'Zero algorithmic memory overhead: O(1) auxiliary space.',
        'Implementation takes only 3-5 lines of code.',
      ]}
      disadvantages={[
        'Inefficient on large datasets due to strict O(N) linear scan time.',
        'Cannot take advantage of sorted ordering (unlike Binary Search O(log N)).',
      ]}
      applications={[
        'Searching short arrays or linked lists where sorting overhead is unviable.',
        'Looking up elements in unsorted hash bucket collision chains.',
        'Finding the first occurrence of an item in unindexed data files.',
      ]}
    />
  );
};

export default LinearInfo;
