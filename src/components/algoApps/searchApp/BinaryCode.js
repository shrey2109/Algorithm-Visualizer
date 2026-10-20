import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const BinaryCode = () => {
  const CppCode = `int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
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

  const JavaCode = `static int binarySearch(int[] arr, int target) {
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

  const PythonCode = `def binary_search(arr, target):
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
    <AlgorithmDetails
      title="Binary Search"
      bestTime="O(1)"
      avgTime="O(log N)"
      worstTime="O(log N)"
      space="O(1)"
      properties={[
        { name: "Input Requirement", value: "Strictly Sorted Array" },
        { name: "Strategy", value: "Divide and Conquer (Halving Interval)" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default BinaryCode;
