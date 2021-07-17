function printPairs(arr, sum)
{
    let n = arr.length;
 
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] === sum)
                console.log("(" + arr[i] + ", " + arr[j] + ")");
}

let arr = [ 1, 2, 3, 4, 5 ];
let sum = 7;
printPairs(arr, sum);