function findTriplets(arr) {
    let triplets = [];
    arr.sort((a, b) => a - b); // Sort array

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicates

        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) left++; // Skip duplicate values
                while (left < right && arr[right] === arr[right - 1]) right--; // Skip duplicate values
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Sample Input
let numbers = [0, -1, 2, -3, 1, -2, 3, 1];

// Find triplets
let result = findTriplets(numbers);

if (result.length > 0) {
    console.log("Unique Triplets that sum to zero:", result);
} else {
    console.log("No triplets found that sum to zero.");
}
