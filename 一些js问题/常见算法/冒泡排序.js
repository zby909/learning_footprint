// 冒泡排序（双指针）
// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
// 针对所有的元素重复以上的步骤，除了最后一个。
// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let flag = 0;

    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        flag = 1;
      }
    }

    if (flag == 0) {
      break;
    }
    console.log('------');
  }
  console.log(arr);
  return arr;
}

let myarr = [3, 6, 2, 4, 5, 1];
let myarr2 = [1, 2, 3, 4, 6, 5];
bubbleSort(myarr);
