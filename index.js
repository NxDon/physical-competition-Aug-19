/*
数组去重
例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]*/

function removeDuplicate(arr) {
    return arr.filter((elem,index,array) => {
        return array.indexOf(elem) === index;
    })
}
arr = ['s', 'a', 's', 'b', 'a',1,'1',1];
console.log("arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1]");
console.log("removeDuplicate(arr):");
console.log(removeDuplicate(arr))
