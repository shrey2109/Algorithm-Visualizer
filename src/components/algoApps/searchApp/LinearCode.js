import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const LinearCode = () => {
  const CppCode = `int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i; // Target found at index i
        }
    }
    return -1; // Target not found
}`;

  const JavaCode = `static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i; // Target found at index i
        }
    }
    return -1; // Target not found
}`;

  const PythonCode = `def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1`;

  return (
    <AlgorithmDetails
      title="Linear Search"
      bestTime="O(1)"
      avgTime="O(N)"
      worstTime="O(N)"
      space="O(1)"
      properties={[
        { name: "Input Requirement", value: "Any (Unsorted or Sorted)" },
        { name: "Access Pattern", value: "Sequential Scan" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default LinearCode;
