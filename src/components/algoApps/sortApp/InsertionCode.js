import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const InsertionCode = () => {
  const CppCode = `void insertion_sort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        // Shift elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`;

  const JavaCode = `public static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`;

  const PythonCode = `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`;

  return (
    <AlgorithmDetails
      title="Insertion Sort"
      bestTime="O(N)"
      avgTime="O(N²)"
      worstTime="O(N²)"
      space="O(1)"
      properties={[
        { name: "In-Place", value: "Yes" },
        { name: "Stable", value: "Yes" },
        { name: "Method", value: "Incremental Insertion" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default InsertionCode;
