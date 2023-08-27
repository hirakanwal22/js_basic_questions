// Question no 1
// let numlen=20
// for (let i=0;i<numlen;i=+2){
//     if(i/2){
//         console.log("Number is Even");
//     }
//     else{
//         console.log("Number is odd");
//     }
// }

// Question no 2
// const variable = "num";

// if (isNaN(variable)) {
//     console.log("Variable is not a number");
// } else {
//     console.log("Variable is a valid number");
// }

// Question no 3
// let num1 = 7;
// let num2 = 4;
// if (num1>num2){
//     console.log("num1 is the largest number");
// }
// else if (num1<num2){
//     console.log("num2 is the largest number")
// }
// else{
//     console.log("num1 and num2 are equal")
// }

// Question no 4
// let num1 = 7;
// let num2 = 4;
// let num3 = 9;
// if(num1>num2 && num1>num3){
//     console.log("num1 is the largest number");
// }
// else if (num2>num3){
//     console.log("num2 is the largest number")
// }
// else{
//     console.log("num3 =",num3)
// }


// Question no 5
// let side1 = 3;
// let side2 = 5;
// let side3 = 3;

// if(side1==side2==side3){
//     console.log("This is Equilateral triangle.")
// }
// else if(side1==side2 || side2==side3 || side1 == side3){
//     console.log("This is Isosceles triangle.")
// }
// else{
//     console.log("This is Scalene triangle.")
// }

// Question no 6
// let num1 = 3;
// let num2 = 5;

// const add= num1+num2;
// const subtract= num1-num2;
// const multiply= num1*num2;
// const divide= num1+num2;
// const modulus= num1%num2;

// const user = "subtract";
// if(user=="add"){
//     console.log("Add ",add);
// }
// else if(user=="subtract"){
//     console.log("Subtract ",subtract);
// }
// else if(user=="multiply"){
//     console.log("Multiply ",multiply);
// }
// else if(user=="divide"){
//     console.log("Divide ",divide);
// }
// else if(user=="modulus"){
//     console.log("Modulus",modulus);
// }
// else{
//     console.log("invalid Operation");
// }

// Question no 7

// inputmarks= 67;
// if(inputmarks>90){
//     console.log("S Grade")
// }
// else if(inputmarks>=80 && inputmarks<=90){
//     console.log("A Grade")
// }
// else if(inputmarks>=70 && inputmarks<=80){
//     console.log("B Grade")
// }
// else if(inputmarks>=60 && inputmarks<=70){
//     console.log("C Grade")
// }
// else if(inputmarks>=50 && inputmarks<=60){
//     console.log("D Grade")
// }
// else if(inputmarks>=40 && inputmarks<50){
//     console.log("E Grade")
// }
// else if(inputmarks>=0 && inputmarks<40){
//     console.log("Student has failed")
// }
// else{
//     console.log("invalid Marks");
// }

// Question no 8
// function findLargestNumber(arr) {
//     if (arr.length === 0) {
//       return null; 
//     }
//     let largest = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         largest = arr[i]; 
//       }
//     }
//     return largest;
//   }
//   const arr=[2,45,3,67,34,567,34,345,123];
//   const largestNumber = findLargestNumber(arr);
//   console.log("The largest number is:", largestNumber);


// Question no 9
// const numberOfRows = 5; 

// for (let i = 1; i <= numberOfRows; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '* ';
//     }
//     console.log(pattern);
// }

// Question no 10
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

// function calculateArraySum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let sum_1 = calculateArraySum(arr_1);
// console.log("Sum of array 1 = ",sum_1)
// let sum_2 = calculateArraySum(arr_2);
// console.log("Sum of array 2 = ",sum_2);

// let totalSum = sum_1 + sum_2;
// console.log(totalSum); 


// Question no 11

// for (let i=2; i<=100; i+=2){
//     console.log(i);
// }

// Question no 12

let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}