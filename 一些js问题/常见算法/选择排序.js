// 选择排序
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 重复第二步，直到所有元素均排序完毕。
function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  console.log(arr);
  return arr;
}

let myarr = [3, 6, 2, 4, 1, 5];
selectionSort(myarr);
