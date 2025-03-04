// 1 - Age Category Message - Ask the user for their age. If they are under 18 ,print "You are a Minor". If they are between 18 and 60 ,print "You are an adult". If they are above 60 , print "You are a sinior citizen"
// var age = Number(prompt("Enter Your Age "))

// if(age <18){
// console.log("You  are a minor")
// } else if(age>18 && age <60){
// console.log("you are an adult")
// } else if(age>60){
//     console.log("You are a sinior citizen")
// }else if(age == ""){
//     console.log("Age to daal")
// }

// 2:- Even or Odd Sum - Take two numbers from the user using prompt(). If the sum of both numbers is even, print "Even Sum"; otherwise, print "Odd Sum."

// var num1 = Number(prompt("alok"));
// var num2 = Number(prompt("alok"));

// var sum = num1 + num2;
// if (sum % 2 == 0) {
//   console.log("Even Sum");
// } else {
//   console.log("odd Sum");
// }

// 3:- Character Case Checker - Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter).

// function checkCharacterCase(char) {
//     if (char.length !== 1) {
//         console.log("Please enter a single character.");
//         return;
//     }

//     if (char >= 'A' && char <= 'Z') {
//         console.log("The character is uppercase.");
//     } else if (char >= 'a' && char <= 'z') {
//         console.log("The character is lowercase.");
//     } else {
//         console.log("The character is neither uppercase nor lowercase.");
//     }
// }
// let userInput = prompt("Enter a single character:");
// checkCharacterCase(userInput);


// 4:-  Largest of Three Numbers - Take three numbers as input and print the largest number among them without using Math.max().

// var a = Number(prompt("Enter 1st Number"));
// var b = Number(prompt("Enter 2nd Number"));
// var c = Number(prompt("Enter 3rd Number"));

// if (a>b && a>c) {
//     console.log(a,"is largest")
// }else if (b>a && b>c) {
//     console.log(b,"is largest")
// }else if (c>b && c>a) {
//     console.log(c,"is largest")
// }else{
//     console.log("All Numbers are equal")
// }

// 5:- Leap Year Checker - Ask the user for a year and determine if it's a leap year or not.

// var year = Number(prompt("Enter the year"))

// if (year % 4 == 0) {
//     console.log("This is leap year");

// }else{
//     console.log("this not a leap year")
// }

// 6:-  Simple Calculator - Ask the user for two numbers and an operator (+, -, *, /). Perform the operation and display the result

// var a = parseFloat(prompt("Enter the 1st Number"));
// var operator = prompt("Enter the oprator");
// var b = parseFloat(prompt("Enter the 2nd Number"));
// var result;

// if (isNaN(a) || isNaN(b)) {
//   alert("Invalid input. Please enter only Numbers.");
// } else {
//   switch (operator) {
//     case "+":
//       result = a + b;
//       break;
//     case "-":
//       result = a - b;
//       break;
//     case "*":
//       result = a * b;
//       break;
//     case "/":
//       if (b === 0) {
//         alert("can not divid by zero");
//         result = "Error";
//       } else {
//         result = a / b;
//         break;
//       }
//     default:
//       alert("Invalid Opertor.");
//       result = "Error";

//       if (result !== "Error") {
//         alert("Result:" + result);
//       }
//   }
// }

// console.log(result);




// 7:-  Positive, Negative, or Zero - Take a number input and check if it is positive, negative, or zero.

// var num = parseFloat(prompt("Enter a number"))
// if(num>0){
//     console.log("Entered number is possitive");
// }else if(num<0){
//     console.log("Entered number is negative");
// }else if(num===0){
//     console.log("Entered number is zero");
// }else if(isNaN(num)){
//    alert("Invalid number")
//    console.log("Invalid Number");
// }else{
//     console.log("Pls Enter a number");
    
// }






// 8:- User Greeting - Ask for the user's name and time (24-hour format). Greet them accordingly:

// var d = new Date();
// var h = d.getHours()
// var m =  d.getMinutes()
// var time= h+":"+m

// var username = prompt("Enter your name")

// if(5< h <12){
//     console.log(`Good Moring ! ${username}`);
//     console.log(`Time is ${time}`)
    
// }else if(12< h >16){
//     console.log(`Good AfterNoon ! ${username}`);
//     console.log(`Time is ${time}`)
    
// } else if(16< h >21){
//     console.log(`Good Evening ! ${username}`);
//     console.log(`Time is ${time}`)
    
// } else if(21< h >5){
//     console.log(`Good Night ! ${username}`);
//     console.log(`Time is ${time}`)
    
// }else{
//     console.log("Invalid Input")
// }




// 9:-  Traffic Light System - Ask the user for a traffic light color (red, yellow, green). Print appropriate messages:


// var color = prompt("Enter the color of Light : red , green , yellow")
// if (color=="red") {
//     console.log("Stop!");
// }else if(color==="green"){
//     console.log("Go!")
// }else if(color==="yellow"){
//     console.log("Get Ready!")
// }else{
//     alert("Invalid color")
//     console.log("Enter the light color")
// }




// 10:- Multiplication Table - Ask the user for a number and print its multiplication table up to 10.
// var num = Number(prompt("Enter a number"));
// for(var i= 1; i<=10; i++){
//     console.log(num*i)
// }







// 11:-  Grade Calculator - Ask the user for their marks (0-100). Assign grades based on the range:


// var marks = Number(prompt('Enter Your Marks (0-100)'));
// var result;

// if (marks >= 90 && marks <= 100) {
//     result = "You got Grade A";
// } else if (marks >= 80 && marks < 90) {
//     result = "You got Grade B";
// } else if (marks >= 70 && marks < 80) {
//     result = "You got Grade C";
// } else if (marks >= 60 && marks < 70) {
//     result = "You got Grade D";
// } else if (marks > 100 || isNaN(marks) || marks < 0) {
//     result = "Enter valid marks";
// } else {
//     result = "You got Fail";
// }

// console.log(result);





// 12:- Simple Login System - Set a predefined username and password. Ask the user to enter their credentials using prompt(). If correct, print "Login Successful"; otherwise, print "Incorrect username or password."

// var username = prompt("Enter username")
// var password = prompt("Enter password")
// var id= "alok"
// var pass = "1234"
// if(username==id && password==pass){
//     console.log("Login Successful")
// }else{
//     console.log("Incorrect username or password.")
// }



//13:- Swapping Without Third Variable - Take two numbers from the user and swap their values without using a third variable.


// var a = Number(prompt("Enter 1st number"))
// var b = Number(prompt("Enter 2nd number"))
// console.log("Your First Value was",a)
// console.log("Your second Value was",b)
// b = b+a
// a = b-a
// b = b-a
// console.log('Now swaped 1st value is',a)
// console.log("Now swaped 2nd value is",b)









// 14:-  FizzBuzz (Multiple of Both) - Ask the user for a number. If it's a multiple of both 3 and 5, print "FizzBuzz"; if only 3, print "Fizz"; if only 5, print "Buzz"; otherwise, print the number itself.

// var a = Number(prompt("Enter a number"))

// if (a % 3 === 0 && a%5 !=0) {
//     console.log("Fizz")
// }else if (a%5 === 0 && a%3 !=0) {
//     console.log("Buzz")
// }else if (a % 3 === 0 && a % 5 === 0) {
//     console.log("FizzBuzz")
//     }else{
//         console.log(a)
//     }











//15:- . Number Reversal - Take a three-digit number from the user and print its reverse. (Example: 123 → 321)
//  var num = prompt("enter your number")
//   var reverse = num.split('').reverse('').join('')
//   console.log("Reversed number is : ", reverse)



// var num = Number(prompt("Enter a number"))
//  var reverse = 0

//  while(num!=0){
//         reverse = reverse*10 + num%10
//         num = Math.floor(num/10)
//     }
//     console.log("Reversed Number is",reverse)


//16:- Sum of Digits – Take a number from the user and print the sum of its digits. (Example: 123 → 1+2+3 = 6).

// var num = Number(prompt("Enter a number"))
// var sum = 0
// while(num!=0){
//         sum = sum + num%10
//         num = Math.floor(num/10)
//     }
//     console.log("Sum of digits is :",sum)



//17:- Palindrome Checker – Ask the user for a word. Check if it reads the same forward and backward. Print “Palindrome” or “Not a Palindrome.”

// function palindrome(){
// let word = prompt("Enter a word");
// let reverse = word.split('').reverse().join('');
// if (word === reverse) {
//     console.log("Palindrome");
// } else { console.log("Not a Palidrome"); 
// }
// }
// palindrome();




//18:- Reverse Without String Methods – Ask the user for a number and reverse it without using .split(), .reverse(), or .join().

// var num = Number(prompt("Enter a number"))
// var reverse = 0
// while(num!=0){
//        var digit = num%10
//        reverse= reverse*10 + digit
//        num = Math.floor(num/10)
// } 
// console.log("Reversed number is : ",reverse);




//19:- Find Second Largest – Take three numbers as input and find the second largest number (without using sort() or Math.max()).

// var a = Number(prompt("Enter first number"));
// var b = Number(prompt("Enter second number"));
// var c = Number(prompt("Enter third number"));

// if((a>b && a<c) || (a<b && a>c)){
//     console.log("Second largest number is : ",a);
// } else if((b>a && b<c) || (b<a && b>c)){
//     console.log("Second largest number is : ",b);
// }else{
//     console.log("Second largest number is : ",c);
// }




// 20:-  Find First Non-Repeating Character – Ask the user for a word and find the first character that does not repeat. Example: hello → h (since e, l, and o repeat).


// var word = prompt("Enter a word")

// var charCount = {};

// for(var i=0; i<word.length; i++){
//     if(charCount[word[i]]){
//         charCount[word[i]]++;
//     } else {
//         charCount[word[i]] = 1;
//     }
// }

// for(var char in charCount){
//     if(charCount[char] === 1){
//         console.log("First non-repeating character is : ", char);
//         break;
//     }
// }



// 21:- Even Digit Counter – Take a number from the user and count how many even digits it has.


// let userInput = prompt("Enter a number:"); // Take input from user
// let count = 0;

// for (let digit of userInput) {
//     if (digit >= '0' && digit <= '9') { // Ensure it's a digit
//         if (parseInt(digit) % 2 === 0) { // Check if it's even
//             count++;
//         }
//     }
// }
// console.log(`The number ${userInput} has ${count} even digits.`);

/* 22:- Nested Condition Challenge – Ask the user for their age and
salary. Print a message based on conditions:

 If age is below 18, print “Not eligible”
If age is 18 or more but salary is less than ₹20,000, print “Low
Salary”
If salary is ₹50,000 or more, print “High Salary”
Otherwise, print “Medium Salary” */





// var age = Number(prompt("Enter your age"))
// var salary= Number(prompt("Enter your salary"))

// if(age<18){
//       console.log("You are not eligible")
// } 
// else if(age>=18 && salary < 20000){
//     console.log("You are eligible and Low salary")
// }
//  else if (age>=18 && (20000 < salary && salary < 50000)){
//     console.log("You are eligible and Medium salary")
// } 
// else if (age>=18 && 50000<salary){
//     console.log("You are eligible and High salary")
// }
// else{
//     console.log("Invalid input")
// }






// 23:- Toggle Case – Ask the user for a word and toggle the case of every character. Example: HeLLo → hEllO.

// function toggleCase(){

//  var word = prompt("Enter a word");
// var toggleword ="";
// if(word){

//     for(var i=0; i<word.length; i++){
//         if(word[i] === word[i].toUpperCase()){
//             toggleword += word[i].toLowerCase();
//         } else{
//             toggleword += word[i].toUpperCase();
//         }
//     }
// }else{
//     toggleword = "Invalid input";
// }
// console.log("Original word",word)
// console.log("Toggaled word",toggleword)
// }


// toggleCase();



