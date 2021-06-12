var N = 4
function findMax (arr)
{
    var row = 0, i, j;
    for (i=0, j=N-1; i<N;i++)
    {
        while (arr[i][j] == 1)
        {
            row = i;
            j--;
        }
    }
    console.log(row);
}
var arr = [[0, 1, 1, 1],
          [0, 0, 1, 1],
          [1, 1, 1, 1],
          [0, 0, 0, 0]];
findMax(arr);