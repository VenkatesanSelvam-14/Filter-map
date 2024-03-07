// var arr=[1,2,3,4,5,6,7,8,9];
// let targetValue=15;


// for(let i=0;i<arr.length;i++)
// {
    
//     for(j=i;j<arr.length;j++)
//     {
//         sum=arr[i]+arr[j];
//         if(sum===targetValue)
//         {
            
//             result.push(arr[i],arr[j]);
//             break;
//         }
//     }
//     if(result.length>0)
//     break;

// }

// // console.log(result);

// // result=[]
// // console.log(typeof result);
// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 2, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 4));
// // Expected output: Array ["d", "d", "e", "d", "e"]




// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]

// console.log(words);
sum=0;
function sub(arr){ 
    const result =arr.forEach((x) =>{
      sum+=x
    });
    return result;
}

console.log(sub());