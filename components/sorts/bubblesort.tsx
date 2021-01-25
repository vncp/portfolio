function swap(i: number, j: number, array: number[]) {}

export const insertionSort = (array: number[], i: number) => {
  for (let j = 0; j < array.length; j++) {
    if (array[j] < array[j - 1]) {
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      return array;
    }
  }
  return array;
};
