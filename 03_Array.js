

let arr = [1, 2, 3, 80, 5,8]  // array

console.log(arr) // print the arrey [1, 2, 3, 4, 5]

console.log(arr.reverse()) // print the reversed array [5, 4, 3, 2, 1]

console.log(arr.sort()) // print the sorted array [1, 2, 3, 5, 80]

console.log(`print the length of the :  ${arr.length}`) // print the length of the array 5

console.log(arr[0]) // print the first element of the array 1

console.log(`push an element to the array, print the length of the array  : ${arr.push(15)}`) // push an element to the array, print the length of the array 6

console.log(`add an element to the beginning of the array, print the length of the array : ${arr.unshift(10)}`) // add an element to the beginning of the array, print the length of the array 7
console.log(`add an element to the beginning of the array, print the length of the array : ${arr.unshift(100)}`) // add an element to the beginning of the array, print the length of the array 7

//use shift 
console.log(`remove the first element of the array, print the removed element : ${arr.shift()}`) // remove the first element of the array, print the removed element 100


console.log(arr) // print the arrey [1, 2, 3, 4, 5]

console.log(arr.includes(80)) // check if the array includes the element 80, print true

console.log(arr.indexOf(5)) // check the index of the element 5, print 4

console.log(arr.filter((element) => element == 8).length) // frequency of the element 8



let strArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


//remove any element from the array
strArray.splice(0, 1) // remove the element at index 0, print the removed element [ 'a' ]
