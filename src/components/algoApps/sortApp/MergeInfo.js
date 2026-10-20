import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const MergeInfo = () => {
  const cppCode = `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`;

  const javaCode = `public static void merge(int[] arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int[] L = new int[n1];
    int[] R = new int[n2];
    for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

public static void mergeSort(int[] arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`;

  const pythonCode = `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr`;

  return (
    <AlgorithmDocPage
      customClass="mergeinfo"
      category="Sorting Algorithm"
      title="Merge Sort"
      subtitle="A powerful divide-and-conquer algorithm that recursively splits an array into halves until singletons remain, then merges the sorted halves with guaranteed O(N log N) performance."
      backLink="/sort"
      backLabel="Back to Sort Visualizer"
      complexity={{
        bestTime: 'O(N log N)',
        bestNote: 'Divide step always halves; merge takes linear time',
        avgTime: 'O(N log N)',
        avgNote: 'Consistent recursive tree depth of log₂(N)',
        worstTime: 'O(N log N)',
        worstNote: 'Guaranteed upper bound for all input sequences',
        space: 'O(N)',
        spaceNote: 'Auxiliary buffer required for merging sorted halves',
      }}
      properties={[
        { label: 'Paradigm', value: 'Divide and Conquer' },
        { label: 'In-Place', value: 'No (requires O(N) buffer)' },
        { label: 'Stable', value: 'Yes (preserves equal items)' },
        { label: 'Recurrence', value: 'T(N) = 2T(N/2) + O(N)' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Divide',
          desc: 'Find the middle point of the current array segment: mid = l + (r - l) / 2.',
        },
        {
          num: 2,
          title: 'Recurse on Subarrays',
          desc: 'Recursively call mergeSort on the left half (l to mid) and right half (mid+1 to r) until subarrays of size 1 are reached.',
        },
        {
          num: 3,
          title: 'Merge Sorted Halves',
          desc: 'Create temporary buffers for the two halves. Iterate through both using two pointers, copying the smaller element into the primary array.',
        },
        {
          num: 4,
          title: 'Flush Remaining Elements',
          desc: 'Copy any leftover items from either half into the output array segment. Return merged result.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough with Sample Array [38, 27, 43, 3, 9, 82, 10]',
        passes: [
          {
            pass: 'Divide Phase',
            detail: '[38, 27, 43, 3, 9, 82, 10] → Split into [38, 27, 43] & [3, 9, 82, 10] → Continued until [38], [27], [43], [3], [9], [82], [10].',
          },
          {
            pass: 'Bottom-Up Merge 1',
            detail: 'Merge [38] & [27] → [27, 38]. Merge [3] & [9] → [3, 9]. Merge [82] & [10] → [10, 82].',
          },
          {
            pass: 'Bottom-Up Merge 2',
            detail: 'Merge [27, 38] & [43] → [27, 38, 43]. Merge [3, 9] & [10, 82] → [3, 9, 10, 82].',
          },
          {
            pass: 'Final Merge',
            detail: 'Merge [27, 38, 43] with [3, 9, 10, 82] → Final result: [3, 9, 10, 27, 38, 43, 82]. Done in O(N log N)!',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Guaranteed O(N log N) worst-case time complexity, avoiding QuickSort worst-case pitfalls.',
        'Stable sorting: ideal when preserving prior key ordering is essential.',
        'Extremely well-suited for linked lists and external sorting on massive datasets that exceed RAM.',
      ]}
      disadvantages={[
        'Requires O(N) additional auxiliary memory for merge buffer allocation.',
        'Slower than QuickSort on small/medium in-memory arrays due to memory copying overhead.',
      ]}
      applications={[
        'External sorting algorithms for files too large to fit in physical RAM (e.g. disk-based chunk merges).',
        'Sorting linked lists with O(1) auxiliary space.',
        'Foundation for TimSort used as standard sort in Python, Android, and Java.',
      ]}
    />
  );
};

export default MergeInfo;
