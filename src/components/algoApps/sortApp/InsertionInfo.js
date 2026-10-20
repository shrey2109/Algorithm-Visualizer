import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const InsertionInfo = () => {
  const cppCode = `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        // Shift elements greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`;

  const javaCode = `static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`;

  const pythonCode = `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`;

  return (
    <AlgorithmDocPage
      customClass="insertioninfo"
      category="Sorting Algorithm"
      title="Insertion Sort"
      subtitle="An intuitive in-place comparison sort that builds the final sorted array one item at a time, similar to the way you sort playing cards in your hand."
      backLink="/sort"
      backLabel="Back to Sort Visualizer"
      complexity={{
        bestTime: 'O(N)',
        bestNote: 'When array is already sorted (one comparison per element)',
        avgTime: 'O(N²)',
        avgNote: 'Average number of inversions is N(N-1)/4',
        worstTime: 'O(N²)',
        worstNote: 'Array sorted in reverse order',
        space: 'O(1)',
        spaceNote: 'In-place sorting with constant extra memory',
      }}
      properties={[
        { label: 'Paradigm', value: 'Incremental Construction' },
        { label: 'In-Place', value: 'Yes' },
        { label: 'Stable', value: 'Yes' },
        { label: 'Online', value: 'Yes (can sort stream as it arrives)' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Establish the Sorted Prefix',
          desc: 'Assume the first element (index 0) is trivially sorted on its own.',
        },
        {
          num: 2,
          title: 'Select the Key Element',
          desc: 'Pick the next element from the unsorted segment at index i and store it in variable key.',
        },
        {
          num: 3,
          title: 'Shift Greater Elements Rightward',
          desc: 'Compare key with elements in the sorted subarray to its left. Shift each element that is greater than key one position to the right.',
        },
        {
          num: 4,
          title: 'Insert Key into Vacancy',
          desc: 'Place key into the vacated spot where arr[j] <= key. Repeat until entire array is processed.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough with Sample Array [12, 11, 13, 5, 6]',
        passes: [
          {
            pass: 'i = 1 (Key: 11)',
            detail: '11 < 12 → Shift 12 right → Array becomes [11, 12, 13, 5, 6]. Sorted prefix is [11, 12].',
          },
          {
            pass: 'i = 2 (Key: 13)',
            detail: '13 > 12 → No shift needed → Array stays [11, 12, 13, 5, 6]. Sorted prefix is [11, 12, 13].',
          },
          {
            pass: 'i = 3 (Key: 5)',
            detail: '5 < 13, 12, 11 → Shift all right → Place 5 at index 0 → [5, 11, 12, 13, 6].',
          },
          {
            pass: 'i = 4 (Key: 6)',
            detail: '6 < 13, 12, 11; 6 > 5 → Shift 11, 12, 13 right → Insert 6 at index 1 → [5, 6, 11, 12, 13]. Finished!',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Highly efficient for small datasets (typically N < 50).',
        'Adaptive: runs in O(N) when data is already or nearly sorted.',
        'Online: capable of sorting data as it is received from a stream.',
        'Stable and operates in-place without auxiliary heap or recursion stack.',
      ]}
      disadvantages={[
        'Poor quadratic O(N²) scaling on large random or reverse-sorted lists.',
        'High number of element shift operations compared to O(N log N) sorts.',
      ]}
      applications={[
        'Used as the base-case cutoff in hybrid algorithms like TimSort (Python/Java) and IntroSort (C++ std::sort).',
        'Real-time streaming data ingestion where items arrive one-by-one.',
        'Systems with strictly constrained memory footprints.',
      ]}
    />
  );
};

export default InsertionInfo;
