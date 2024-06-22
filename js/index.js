let arr =[1,3,4,5,6,7];
let arr2 =[0,6,9,7,9,8,7,6]

// 8-dars vazifa

// 20-masala
// function maxMin(arr){
//     let arr2=[]
//     for (let i = 0; i < arr.length; i++) {
        
//         arr2.push(arr[i])
//         arr2.push(arr[i])
//     }
//     return arr2
// }
// console.log(maxMin(arr));


// 32-masala
// function maxMin(arr){
//     let arr2=Math.max(arr)
//     return arr2
// }
// console.log(maxMin(arr));


// 30-masala
// function unique(arr) {
//     let result = Array.from(new Set(arr));
//     return result;
// }
// console.log(unique(arr));







// qushimcha dars vazifa


// 1-masala
// function leng(arr) {
//     return arr.length
// }
// console.log(leng(arr));


// 2-masala
// function leng(arr) {
//     let arr2 = arr.toString()
//     return arr2
// }
// console.log(leng(arr));



// 3-masal
// function leng(arr) {
//     let arr2 = arr.join("<")
//     return arr2
// }
// console.log(leng(arr));



// // 4-masala
// function end(arr) {
//     arr.push("123")
//     return arr
// }
// console.log(end(arr));



// 5-masala
// function end(arr) {
//     arr.pop()
//     return arr
// }
// console.log(end(arr));


// 6-masala
// function first(arr) {
//     arr.shift()
//     return arr
// }
// console.log(first(arr));



// 7-masala
// function leng(arr) {
//     arr.unshift("123")
//     return arr
// }
// console.log(leng(arr));

// 8-masala
// function add(arr,arr2) {
//     let addd= arr.concat(arr2)
//     return addd
// }
// console.log(add(arr,arr2));


// 9-masala
// function name(arr,element,element1,element2) {
//     arr.splice(element,element1,element2)
//     return arr
// }
// console.log(name(arr,2,4,"salom"));



// 10-masala
// function name(arr,element,element1) {
//     let result =arr.slice(element,element1)
//     return result
// }
// console.log(name(arr,0,4));



// 11-masala
// function leng(arr) {
//     return arr.length
// }
// console.log(leng("hayrli"));


// 12-masala
// function change(arr) {
//     let arr2 = arr.toString()
//     return arr2
// }
// console.log(leng(arr));



// 13-masal
// function add(arr) {
//     let arr2 = arr.join(" ")
//     return arr2
// }
// console.log(leng(arr));



//14-masala
// function end(arr,element,element1) {
//     arr.push(element,element1)
//     return arr
// }
// console.log(end(arr,"saalom","hayr"));



// 15-masala
// function end(arr) {
//     arr.pop();
//     arr.pop()
//     return arr
// }
// console.log(end(arr));


// 16-masala
// function first(arr) {
//     arr.shift();
//     arr.shift()
//     return arr
// }
// console.log(first(arr));



// 17-masala
// function leng(arr,element,element1) {
//     arr.unshift(element,element1)
//     return arr
// }
// console.log(leng(arr,"salommm","hello"));



// 18-masala
// let cars =["damas","gentra","malibu"]
// function add(arr,arr2,cars) {
//     let addd= arr.concat(arr2,cars)
//     return addd
// }
// console.log(add(arr,arr2,cars));


// 19-masala
// function name(arr,element,element1) {
//     arr.splice(element,element1)
//     return arr
// }
// console.log(name(arr,2,1));



// 20-masala
// function name(arr,element,element1) {
//     let result =arr.slice(element,element1)
//     return result
// }
// console.log(name(arr,3,arr.length-1));



// Search metodlariga oid masalalar.

// 1-masala
// function inc(arr,element) {
//     return arr.includes(element)
// }
// console.log(inc(arr,13));

// 2-masal
// function index(arr2,element) {
//     return arr2.indexOf(element)
// }
// console.log(index(arr2,6));


// 3-masal
// function index(arr2,element) {
//     return arr2.lastIndexOf(element)
// }
// console.log(index(arr2,6));


// 4-masala
//     let result = arr.find(function (value,index) {
//     return value>10
    
// })
//     console.log(result);


 
// 5-masala
//     let result = arr.findIndex(function(value,index) {
//     return value%2==0
// })
// console.log(result);



// 6-masala
// let fruits =['apple','orange','pineapple','watermelon']
// function index(fruits,element) {
//     return fruits.includes(element)
// }
// console.log(index(fruits,"watermelon"));


// 7-masala
// function index(arr2,element) {

//     if (arr2.indexOf(element)==-1) {
//         console.log("Element topilmadi");
//     }else{
//         return arr2.indexOf(element)
//     }
    
// }
// console.log(index(arr2,7));


// 8-masala
// function index(arr2,element) {

//     if (arr2.lastIndexOf(element)==-1) {
//         console.log("Element topilmadi");
//     }else{
//         return arr2.lastIndexOf(element)
//     }
    
// }
// console.log(index(arr2,34));



// 9-masala
//     let result=arr.find(function (value,index) {
//     return value>100
        
// })
//     console.log(result);




// 10-masala
//      let result =arr.findIndex(function(value,index) {
//       return value>50
//     })
// console.log(result);









// qushimchga

// 1-masala
// berilgan sonli massivning birinchi va oxirgi elementlari yigindisini toping

// function end(arr) {
//     let first =arr[0]
//     let end = arr[arr.length-1]
//     return first+end
// }
// console.log(end(arr));


// 2-masala
// massiv elementlarining yigindisini toping
// function end(arr) {
//     let sum =0
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum
// }
// console.log(end(arr));



// 3-masala
// massiv elementlarining kupaytmasini toping
// function end(arr) {
//     let kup =1
//     for (let i = 0; i < arr.length; i++) {
//         kup=kup*arr[i]
//     }
//     return kup
// }
// console.log(end(arr));


// 4-masala
// massivning birinchi elementi toq bulsa ixtiyoriy juft songa almashtiring
// function toq(arr) {
//     let first =arr[0]
//     if (first%2==1) {
//        first= first+1
//     }
//     return first
// }
// console.log(toq(arr));




// 5-masala
// massivning birinchi elementi juft bulsa ixtiyoriy toq songa almashtiring
// function juft(arr) {
//     let first =arr[0]
//     if (first%2==0) {
//        first= first+1
//     }
//     return first
// }
// console.log(juft(arr));