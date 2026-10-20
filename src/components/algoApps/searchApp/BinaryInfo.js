import React from 'react';
import AlgorithmDocPage from '../../common/AlgorithmDocPage';

const BinaryInfo = () => {
  const cppCode = `int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2; // Avoids integer overflow
        if (arr[mid] == target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            low = mid + 1; // Discard left half
        } else {
            high = mid - 1; // Discard right half
        }
    }
    return -1; // Target not found
}`;

  const javaCode = `static int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`;

  const pythonCode = `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`;

  return (
    <AlgorithmDocPage
      customClass="binaryinfo"
      category="Searching Algorithm"
      title="Binary Search"
      subtitle="An exceptionally fast search algorithm that operates on sorted arrays by repeatedly halving the search interval, achieving logarithmic O(log N) lookup time."
      backLink="/search"
      backLabel="Back to Search Visualizer"
      complexity={{
        bestTime: 'O(1)',
        bestNote: 'Target element is located at the initial middle index',
        avgTime: 'O(log N)',
        avgNote: 'Halves the candidate search domain in every iteration',
        worstTime: 'O(log N)',
        worstNote: 'Exhausts intervals down to 1 element (e.g., 30 steps for 1 billion items!)',
        space: 'O(1)',
        spaceNote: 'Iterative implementation consumes O(1) auxiliary variables',
      }}
      properties={[
        { label: 'Paradigm', value: 'Divide and Conquer (Decrease and Conquer)' },
        { label: 'Requirement', value: 'Sorted Array (Monotonic Order)' },
        { label: 'Direct Access', value: 'Requires O(1) random-access indexing' },
        { label: 'Comparisons', value: 'At most ⌊log₂ N⌋ + 1' },
      ]}
      steps={[
        {
          num: 1,
          title: 'Establish Search Boundaries',
          desc: 'Initialize low pointer to index 0 and high pointer to n - 1.',
        },
        {
          num: 2,
          title: 'Compute Midpoint',
          desc: 'Calculate mid = low + (high - low) / 2 to prevent numeric integer overflow.',
        },
        {
          num: 3,
          title: 'Evaluate Midpoint Element',
          desc: 'If arr[mid] == target, return mid. If arr[mid] < target, the target must reside in the right half: set low = mid + 1. If arr[mid] > target, set high = mid - 1.',
        },
        {
          num: 4,
          title: 'Repeat or Conclude',
          desc: 'Continue while low <= high. If pointers cross without finding the target, return -1.',
        },
      ]}
      walkthrough={{
        title: 'Walkthrough: Search for 14 in [2, 3, 7, 10, 13, 14, 17]',
        passes: [
          {
            pass: 'Step 1 (Range: [0, 6])',
            detail: 'mid = (0 + 6) / 2 = 3 → arr[3] = 10. Since 14 > 10, discard left half: low = 4.',
          },
          {
            pass: 'Step 2 (Range: [4, 6])',
            detail: 'mid = (4 + 6) / 2 = 5 → arr[5] = 14. 14 == 14! Match found at index 5 in only 2 iterations!',
          },
        ],
      }}
      code={{
        cpp: cppCode,
        java: javaCode,
        python: pythonCode,
      }}
      advantages={[
        'Incredibly fast: searches 1,000,000 items in ≤ 20 comparisons and 1,000,000,000 items in ≤ 30 comparisons.',
        'O(1) auxiliary memory consumption when written iteratively.',
        'Well-defined mathematical foundation for lower/upper bound and monotonic predicate queries.',
      ]}
      disadvantages={[
        'Strict requirement: array must be sorted in advance, adding an O(N log N) sorting prerequisite if unsorted.',
        'Requires O(1) random memory access, making it inefficient on standard linked lists.',
      ]}
      applications={[
        'Database indexing (B-Tree internal nodes use binary search on page keys).',
        'C++ STL (std::lower_bound, std::upper_bound, std::binary_search).',
        'Finding numerical roots, monotone optimization cutoffs, and git bisect.',
      ]}
    />
  );
};

export default BinaryInfo;
