import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const BubbleCode = () => {
  const CppCode = `void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
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

  const JavaCode = `public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        boolean swapped = false;
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

  const PythonCode = `def bubble_sort(arr):
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
    <AlgorithmDetails
      title="Bubble Sort"
      bestTime="O(N)"
      avgTime="O(N²)"
      worstTime="O(N²)"
      space="O(1)"
      properties={[
        { name: "In-Place", value: "Yes" },
        { name: "Stable", value: "Yes" },
        { name: "Method", value: "Exchanging Adjacent Pairs" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default BubbleCode;
