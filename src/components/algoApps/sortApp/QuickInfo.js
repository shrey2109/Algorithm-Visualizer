import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const QuickInfo = () => {
  const cppCode = `int partition(vector<int> &arr, int low, int high) {
    int pivot = arr[low];
    int i = low;
    int j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) i++;
        while (arr[j] > pivot && j >= low + 1) j--;
        if (i < j) swap(arr[i], arr[j]);
    }
    swap(arr[low], arr[j]);
    return j;
}

void quickSort(vector<int> &arr, int low, int high) {
    if (low < high) {
        int pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}`;

  const javaCode = `static int partition(int[] arr, int low, int high) {
    int pivot = arr[low];
    int i = low;
    int j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) i++;
        while (arr[j] > pivot && j >= low + 1) j--;
        if (i < j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}`;

  const pythonCode = `def partition(arr, low, high):
    pivot = arr[low]
    i = low + 1
    j = high

    while True:
        while i <= j and arr[i] <= pivot:
            i += 1
        while i <= j and arr[j] >= pivot:
            j -= 1
        if i <= j:
            arr[i], arr[j] = arr[j], arr[i]
        else:
            break
    arr[low], arr[j] = arr[j], arr[low]
    return j

def quick_sort(arr, low, high):
    if low < high:
        p_index = partition(arr, low, high)
        quick_sort(arr, low, p_index - 1)
        quick_sort(arr, p_index + 1, high)`;

  return (
    <AlgorithmDocPage
      customClass="quickinfo"
      category="Sorting Algorithm"
      title="Quick Sort"
      subtitle="A highly efficient, cache-friendly divide-and-conquer algorithm that selects a pivot element and partitions array elements into smaller and larger partitions around the pivot."
      backLink="/sort"
      backLabel="Back to Sort Visualizer"
      complexity={{
        bestTime: 'O(N log N)',
        bestNote: 'When pivot splits array into two equal halves',
        avgTime: 'O(N log N)',
        avgNote: 'Average case over all permutations with small constant factor',
        worstTime: 'O(N²)',
        worstNote: 'When pivot is always the smallest or largest element',
        space: 'O(log N)',
        spaceNote: 'Auxiliary recursion call stack space',
      }}
      properties={[
        { label: 'Paradigm', value: 'Divide and Conquer' },
        { label: 'In-Place', value: 'Yes (in-place partitioning)' },
        { label: 'Stable', value: 'No' },
        { label: 'Cache Locality', value: 'Exceptional (sequential scan)' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Pick a Pivot Element',
          desc: 'Select an element from the array segment (e.g., first, last, median-of-three, or random).',
        },
        {
          num: 2,
          title: 'Partition the Array',
          desc: 'Reorder the array so all elements smaller than the pivot come before it, and all elements greater come after. The pivot is now at its final sorted position.',
        },
        {
          num: 3,
          title: 'Recurse on Left Partition',
          desc: 'Recursively invoke quickSort on the subarray of elements to the left of the pivot index.',
        },
        {
          num: 4,
          title: 'Recurse on Right Partition',
          desc: 'Recursively invoke quickSort on the subarray of elements to the right of the pivot index.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough with Sample Array [10, 80, 30, 90, 40, 50, 70]',
        passes: [
          {
            pass: 'Partition 1',
            detail: 'Choose pivot 70 (or 10). Partition yields elements <= 70 to left, > 70 to right. Pivot 70 placed at index 4.',
          },
          {
            pass: 'Left Subarray',
            detail: 'Recurse on [10, 30, 40, 50]. Pivot 10 placed at start. Partition recurses on [30, 40, 50]. Subarray sorted.',
          },
          {
            pass: 'Right Subarray',
            detail: 'Recurse on [90, 80]. Partition places 80 before 90. Both singletons reached.',
          },
          {
            pass: 'Recombined',
            detail: 'Full array is assembled in-place: [10, 30, 40, 50, 70, 80, 90]. Optimal in-memory performance!',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Fastest practical comparison sort in practice due to tight inner loops and superior CPU cache locality.',
        'Sorts in-place with only O(log N) auxiliary recursion stack space.',
        'Easily parallelizable across multiple CPU cores.',
      ]}
      disadvantages={[
        'Worst-case performance degrades to O(N²) when unbalanced pivots are picked repeatedly.',
        'Not a stable sort by default.',
        'Recursive implementation risks call stack overflow on adversarial inputs without tail-call optimization or median-of-three.',
      ]}
      applications={[
        'C++ Standard Library (std::sort uses Introsort: QuickSort falling back to HeapSort/InsertionSort).',
        'Large in-memory datasets where cache locality and low memory overhead are critical.',
        'Numeric and scientific computing libraries (e.g. NumPy, BLAS).',
      ]}
    />
  );
};

export default QuickInfo;
