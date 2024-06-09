function arrSum(arr, target) {
    let currentSum = arr[0];
    let start = 0;

    for (let i = 1; i <= arr.length; i++) {
        while (currentSum > target && start < i - 1) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }

        if (i < arr.length) {
            currentSum += arr[i];
        }
    }

    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(arrSum(arr, target)); 
