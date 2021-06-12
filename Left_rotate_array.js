function leftRotatebyOne(arr , n) {
        let first = arr.shift();
        arr.push(first);
        return arr;
    }
function leftRotate(arr , d , n) {
        for (var i = 0; i < d; i++)
            leftRotatebyOne(arr, n);
    }
function resultArray(arr , n) {
    console.log(arr);
}
    
 var arr = [ 1, 2, 3, 4, 5 ];
 leftRotate(arr, 2, 5);
 resultArray(arr, 5);