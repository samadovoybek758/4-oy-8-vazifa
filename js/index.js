let arr=[6,5,2,1]
// 20-masala
function maxMin(arr){
    let arr2=[]
    for (let i = 0; i < arr.length; i++) {
        
        arr2.push(arr[i])
        arr2.push(arr[i])
    }
    return arr2
}
console.log(maxMin(arr));


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