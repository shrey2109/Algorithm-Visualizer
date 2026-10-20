import React from 'react';
import AlgorithmDetails from '../../common/AlgorithmDetails';

const QuickCode = () => {
  const CppCode = `int partition(vector<int> &arr, int low, int high) {
    int pivot = arr[low];
    int i = low;
    int j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
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

  const JavaCode = `static int partition(List<Integer> arr, int low, int high) {
    int pivot = arr.get(low);
    int i = low;
    int j = high;

    while (i < j) {
        while (arr.get(i) <= pivot && i <= high - 1) {
            i++;
        }
        while (arr.get(j) > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) {
            int temp = arr.get(i);
            arr.set(i, arr.get(j));
            arr.set(j, temp);
        }
    }
    int temp = arr.get(low);
    arr.set(low, arr.get(j));
    arr.set(j, temp);
    return j;
}

static void quickSort(List<Integer> arr, int low, int high) {
    if (low < high) {
        int pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}`;

  const PythonCode = `def partition(arr, low, high):
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
    <AlgorithmDetails
      title="Quick Sort"
      bestTime="O(N log N)"
      avgTime="O(N log N)"
      worstTime="O(N²)"
      space="O(log N)"
      properties={[
        { name: "In-Place", value: "Yes" },
        { name: "Stable", value: "No" },
        { name: "Paradigm", value: "Divide and Conquer" }
      ]}
      cppCode={CppCode}
      javaCode={JavaCode}
      pythonCode={PythonCode}
    />
  );
};

export default QuickCode;