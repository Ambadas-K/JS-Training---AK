//1. Ask the user for a number using prompt(). Check if it’s even or odd, and show the result in an alert.

// var num = prompt('Please enter number : ');

// if (num % 2 == 0){
//     alert('Number is even');
// }
// else{
//     alert('Number is odd')
// }

/*2. Write a script that asks the user for their marks (out of 100).
    * If marks ≥ 90 → Show "Grade A"
    * If marks ≥ 75 → Show "Grade B"
    * If marks ≥ 50 → Show "Grade C"
    * Otherwise → Show "Fail"
*/

// var marks = prompt('Please enter your marks')

// if (marks > 100){
//      console.log('Please enter a value between 0 and 100.')
// }
// else if (marks >= 90){
//     console.log('Grade B');
// }
// else if(marks >= 75) {
//     console.log('Grade B')
// }
// else if(marks >= 50){
//     console.log('Grade C')
// }
// else {
//     console.log('Fail')
// }

//3. Use prompt() to ask the user for a day number (1–7). Use a switch statement to print the day name (e.g., 1 → Monday).

// let day = parseInt(prompt('Give the number in between 1 - 7'));

// switch (day) {
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   case 3:
//     console.log('Wednesday');
//     break;
//   case 4:
//     console.log('Thursday');
//     break;
//   case 5:
//     console.log('Friday');
//     break;
//   case 6:
//     console.log('Saturday');
//     break;
//   case 7:
//     console.log('Sunday');
//     break;
//   default:
//     console.log('You have entered the wrong number')

// }

/*4. Use a ternary operator to ask the user for their age.
    * If age ≥ 18 → "You are an adult"
    * Else → "You are a minor"
*/

// var age = prompt('Please enter you age ')

// if (age >= 18){
//     console.log('You are an adult')
// }
// else{
//     console.log('You are a minor')
// }

/*5. Ask the user to enter a password.
    * If the password matches "12345", show "Login Successful".
    * Otherwise show "Wrong Password".
    * 
*/

// let password = prompt('Please enter your password');

// if (password === 12345){
//     console.log('Login Successful');
// }
// else{
//     console.log('Wrong Password');
// }

/*6. Ask the user for a number.
    * If the number is positive
        * Check if it’s also even or odd.
    * Else if the number is negative
        * Show "Negative number".
    * Else show "Number is zero".
*/

// let num = (prompt("Enter a number: "));

// if (num > 0) {
//     if (num % 2 === 0) {
//         console.log("Positive Even number");
//     } else {
//         console.log("Positive Odd number");
//     }
// } else if (num < 0) {
//     console.log("Negative number");
// } else {
//     console.log("Number is zero");
// }

/*7. Ask the user for their age and whether they have a driving license (yes/no).
* If age ≥ 18
    * If license is "yes" → Show "You can drive"
    * Else → Show "You are eligible by age but don’t have a license"
    * Else → Show "You are underage"
*/

// let age = parseInt(prompt("Enter your age: "));
// let license = prompt("Do you have a driving license? (yes/no)");

// if (age >= 18) {
//     if (license === "yes") {
//         console.log("You can drive");
//     } else {
//         console.log("You are eligible by age but don’t have a license");
//     }
// } else {
//     console.log("You are underage");
// }

/*8. Ask the user to enter username and password.
    * If username = "admin"
        * If password = "1234" → Show "Welcome Admin"
        * Else → Show "Wrong password"
    * Else → Show "Invalid username"
*/

// let username = prompt("Enter username: ");
// let password = prompt("Enter password: ");

// if (username === "admin") {
//     if (password === "1234") {
//         console.log("Welcome Admin");
//     } else {
//         console.log("Wrong password");
//     }
// } else {
//     console.log("Invalid username");
// }
