/* Keyword this get created in the global execution, it's a pointer refers to an object
Useful when we create objects */

// const user = {
//   name: "louis",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi(); // This will refers to the objects itself not the window anymore

/* Keywork this checked where your function is invoqued */

// const user = {
//   name: "louis",
// };

// const admin = {
//   name: "admin",
// };

// function yell() {
//   console.log(this.name.toUpperCase());
// }

// user.yell = yell;
// admin.yell = yell;

// user.yell();
// admin.yell(); // Going to return LOUIS and ADMIN, here the this keyword is user and admin

// A pointer -> It refers to an object

// const lists = document.querySelectorAll("li");

// lists.forEach((li) => {
//   li.addEventListener("click", function () {
//     console.log(this);
//   });
// });

// Can be tricky to use

const user = {
  name: "louis",
  videos: ["html", "css", "react", "js"],
  greet() {
    console.log(`Hello there ${this.name}`);
    // ADD function
    const getVideos = () => {
      console.log(`You have ${this.videos.lenght} videos`);
    };
    getVideos();
  },
};

user.greet();

// Use arrow functions to fix everything E.G line 51

/* When adding a function to a method, we should use an arrow function 
instead of the 'function' keyword. Remember when a function is invoked, 
a new execution context is created as well. Which treats the function 
like its not even in the greet function. It treats the getVideos 
function and the greet function as two different functions. 
Which they already are, but when using the function keyword in a 
method the function that was created is in no way related to the object,
so all the properties(variables) in the object are not inherited when 
the getVideos function is created.  */
