function findMajority(arr, n)
{
    let maxCount = 0;
    let index = 0;
    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] === arr[j])
                count++;
        }
        if (count > maxCount)
        {
            maxCount = count;
            index = i;
        }
    }
    if (maxCount > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}
let arr = [ 1, 5, 2, 5, 3, 5, 5 ];
let n = arr.length;
findMajority(arr, n);