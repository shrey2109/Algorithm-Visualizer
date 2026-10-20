import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const SelectionInfo = () => {
  const cppCode = `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Swap the found minimum element with the first element
        if (min_idx != i) {
            swap(arr[min_idx], arr[i]);
        }
    }
}`;

  const javaCode = `static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        if (min_idx != i) {
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}`;

  const pythonCode = `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`;

  return (
    <AlgorithmDocPage
      customClass="selectioninfo"
      category="Sorting Algorithm"
      title="Selection Sort"
      subtitle="A simple comparison algorithm that divides the input into sorted and unsorted regions, repeatedly identifying the smallest element from the unsorted section and placing it at the front."
      backLink="/sort"
      backLabel="Back to Sort Visualizer"
      complexity={{
        bestTime: 'O(N²)',
        bestNote: 'Always scans remaining elements to confirm minimum',
        avgTime: 'O(N²)',
        avgNote: 'Requires N(N-1)/2 comparisons consistently',
        worstTime: 'O(N²)',
        worstNote: 'Quadratic irrespective of initial permutation',
        space: 'O(1)',
        spaceNote: 'Strictly in-place swapping with zero overhead',
      }}
      properties={[
        { label: 'Paradigm', value: 'Greedy Selection' },
        { label: 'In-Place', value: 'Yes' },
        { label: 'Stable', value: 'No (by default swap)' },
        { label: 'Memory Writes', value: 'O(N) Minimum among O(N²) sorts' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Mark Current Index as Minimum',
          desc: 'For pass i from 0 to n-2, assume index i contains the smallest remaining value (min_idx = i).',
        },
        {
          num: 2,
          title: 'Scan Unsorted Portion',
          desc: 'Iterate pointer j from i+1 to n-1. If arr[j] < arr[min_idx], update min_idx = j.',
        },
        {
          num: 3,
          title: 'Perform Single Swap',
          desc: 'After the inner loop terminates, swap arr[i] with arr[min_idx]. Exactly one swap per outer loop pass.',
        },
        {
          num: 4,
          title: 'Advance Frontier',
          desc: 'Increment i. The sorted prefix now expands by one confirmed minimum. Continue until the entire array is ordered.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough with Sample Array [64, 25, 12, 22, 11]',
        passes: [
          {
            pass: 'Pass 1 (i = 0)',
            detail: 'Minimum in [64, 25, 12, 22, 11] is 11. Swap 64 with 11 → [11, 25, 12, 22, 64].',
          },
          {
            pass: 'Pass 2 (i = 1)',
            detail: 'Minimum in [25, 12, 22, 64] is 12. Swap 25 with 12 → [11, 12, 25, 22, 64].',
          },
          {
            pass: 'Pass 3 (i = 2)',
            detail: 'Minimum in [25, 22, 64] is 22. Swap 25 with 22 → [11, 12, 22, 25, 64].',
          },
          {
            pass: 'Pass 4 (i = 3)',
            detail: 'Minimum in [25, 64] is 25. Already in position. Array is fully sorted: [11, 12, 22, 25, 64].',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Minimal memory writes: performs at most O(N) swaps, useful when memory write operations are expensive (e.g. Flash memory).',
        'In-place algorithm requiring only O(1) auxiliary variables.',
        'Deterministic execution time unaffected by input arrangement.',
      ]}
      disadvantages={[
        'O(N²) time complexity even in best case scenarios.',
        'Not adaptive: does not exploit pre-existing order in data.',
        'Unstable sorting behavior by default because long swaps can bypass identical items.',
      ]}
      applications={[
        'Embedded systems with EEPROM / Flash memory where write cycles degrade hardware lifetime.',
        'Systems where memory write cost heavily outweighs memory read cost.',
        'Simple sorting tasks on extremely small arrays.',
      ]}
    />
  );
};

export default SelectionInfo;
