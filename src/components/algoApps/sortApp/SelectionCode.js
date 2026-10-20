import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const SelectionCode = () => {
  const CppCode = `void selection_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Swap minimum element with first element of unsorted part
        swap(arr[min_idx], arr[i]);
    }
}`;

  const JavaCode = `public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}`;

  const PythonCode = `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`;

  return (
    <AlgorithmDetails
      title="Selection Sort"
      bestTime="O(N²)"
      avgTime="O(N²)"
      worstTime="O(N²)"
      space="O(1)"
      properties={[
        { name: "In-Place", value: "Yes" },
        { name: "Stable", value: "No" },
        { name: "Method", value: "Selection of Minimum" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default SelectionCode;
