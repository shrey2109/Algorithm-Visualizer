import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const BubbleInfo = () => {
  const cppCode = `void bubbleSort(int arr[], int n) {
    bool swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        // Optimization: if no two elements were swapped, array is sorted
        if (!swapped) break;
    }
}`;

  const javaCode = `static void bubbleSort(int[] arr) {
    int n = arr.length;
    boolean swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}`;

  const pythonCode = `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr`;

  return (
    <AlgorithmDocPage
      customClass="bubbleinfo"
      category="Sorting Algorithm"
      title="Bubble Sort"
      subtitle="A foundational comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent items, and swaps them if they are in the wrong order."
      backLink="/sort"
      backLabel="Back to Sort Visualizer"
      complexity={{
        bestTime: 'O(N)',
        bestNote: 'When array is already sorted (with swapped flag)',
        avgTime: 'O(N²)',
        avgNote: 'Average random element pairs',
        worstTime: 'O(N²)',
        worstNote: 'Array sorted in reverse order',
        space: 'O(1)',
        spaceNote: 'In-place sorting with zero extra memory',
      }}
      properties={[
        { label: 'Paradigm', value: 'Comparison Sort' },
        { label: 'In-Place', value: 'Yes' },
        { label: 'Stable', value: 'Yes' },
        { label: 'Adaptive', value: 'Yes (with early break)' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Start at the Beginning',
          desc: 'Initialize pointers at the first pair of elements in the array (indices 0 and 1).',
        },
        {
          num: 2,
          title: 'Compare Adjacent Elements',
          desc: 'Compare arr[j] with arr[j+1]. If arr[j] > arr[j+1], swap them so the larger value moves forward.',
        },
        {
          num: 3,
          title: 'Bubble the Maximum to the End',
          desc: 'Continue the sweep up to index (n - i - 1). At the end of iteration i, the i-th largest element is guaranteed to be in its permanent position.',
        },
        {
          num: 4,
          title: 'Early Termination Check',
          desc: 'If an entire pass completes without a single swap, the array is already sorted; stop immediately.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough with Sample Array [5, 1, 4, 2, 8]',
        passes: [
          {
            pass: 'Pass 1',
            detail: '(5 1 4 2 8) → Swap (1 5 4 2 8) → Swap (1 4 5 2 8) → Swap (1 4 2 5 8) → 5 < 8 (no swap). 8 locked in position.',
          },
          {
            pass: 'Pass 2',
            detail: '(1 4 2 5 8) → 1 < 4 (ok) → Swap (1 2 4 5 8) → 4 < 5 (ok). 5 locked in position.',
          },
          {
            pass: 'Pass 3',
            detail: '(1 2 4 5 8) → Full pass with zero swaps made. Early exit triggered! Sorted.',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Simplicity: One of the simplest algorithms to understand and implement.',
        'In-place: Requires O(1) auxiliary memory overhead.',
        'Stable: Preserves the relative order of identical elements.',
        'Fast Best-Case: Can detect sorted input in O(N) linear time.',
      ]}
      disadvantages={[
        'Poor Scaling: O(N²) quadratic time complexity makes it unsuited for large datasets.',
        'Excessive Swaps: Writes to memory far more often than Selection or Insertion Sort.',
        'Low practical utility compared to QuickSort or TimSort.',
      ]}
      applications={[
        'Computer science educational pedagogy for teaching algorithmic invariants.',
        'Detecting minute inversions in almost-sorted data streams with minimal overhead.',
        'Embedded microcontrollers where code memory is limited and array sizes are tiny.',
      ]}
    />
  );
};

export default BubbleInfo;
