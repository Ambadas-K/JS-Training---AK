/*1. Rearranging with splice()
    * Start with an array ["pen", "book", "eraser", "scale"].
    * Remove "eraser" and insert "pencil" at the same place.
    * Show the updated array.
*/
// var arr = ["pen", "book", "eraser", "scale"]
// arr [2]= 'pencil';
// console.log(arr);

/*2. Finding the maximum
    * Given [10, 45, 67, 23, 89, 12], find the largest number using Math.max.apply(null, array).
*/

// let number = [10, 45, 67, 23, 89, 12]
// let largeNumber = Math.max.apply(null, number);
// console.log(largeNumber);

/*3. String to Array & Back
    * Take a string "apple,banana,orange".
    * Convert it into an array using split().
    * Then convert back into a string "apple | banana | orange" using join().
*/

// let fruits = "apple,banana,orange";
// let arr = fruits.split(",");
// let newfruits = arr.join(" | ");

// console.log(arr);
// console.log(newfruits);

//4. Create an array of 5 colors. Show the 3rd color using its index.

// let colours = ['black','red','blue','pink','yellow'];
// console.log(colours[2]);

//5. Make an array of numbers [10, 20, 30, 40, 50]. Find the position of 30 using

// let number = [10, 20, 30, 40, 50];
// let index = number.indexOf(30);
// console.log(index);

/*6. Create an array of names ["Amit", "Rahul", "Sneha", "Priya"].
    * Add one more name at the end using push().
    * Remove the first name using shift().
    * Show the final array in the console.
*/

// let names = ["Amit", "Rahul", "Sneha", "Priya"];
// names.push('Riya');
// names.shift('Amit');
// console.log(names);

/*7. Make an array of numbers [100, 200, 300].
    * Use concat() to add another array [400, 500].
    * Show the new array in the console.
*/

// let number1 = [100, 200, 300]
// let number2 = [400, 500];
// let numbers = number1.concat(number2);
// console.log(numbers);

//8. Create an array ["HTML", "CSS", "JavaScript"]. Use reverse() to reverse the order. Show it in an alert.

// let arr = ["HTML", "CSS", "JavaScript"];
// arr.reverse();
// alert(arr);

//9. Create an array of numbers [2, 4, 6, 8, 10]. Use every() to check if all numbers are even.

// let number = [2, 4, 6, 8, 10];
// let Even = number.every(num => num % 2 === 0);

// console.log(Even);

//9. Create an array of ages [12, 18, 20, 25]. Use some() to check if there’s at least one person under 18.

// let ages = [12, 18, 20, 25];
// let Under18 = ages.some(age => age < 18);

// console.log(Under18);