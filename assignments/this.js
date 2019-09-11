/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window object is the default reference for the "this" keyword referenced outside of any other scope. 

* 2. Implicit binding is when the "this" keyword references the scope in which it is contained like an object.

* 3. Explict bindind is where you use the call or apply method to give "this" a regerence.

* 4. Bind creates a new function where "this" is provided a value. It can be used to save a value to a variable where call and apply cannot.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const user1 = {
    username: "Tom",
    email: "tom@example.com",
    greet: function() {
        return `Greetings, ${this.username}!`;
    }
}

const user2 = {
    username: "Bob",
    email: "bob@example.com",
    greet: function() {
        return `Greetings, ${this.username}!`;
    }
}

const user3 = {
    username: "Jerry",
    email: "jerry@example.com",
    greet: function() {
        return `Greetings, ${this.username}!`;
    }
}
userInterest = ["design", "frontend", "backend"];


console.log(user1.greet());
// Principle 3

// code example for New Binding
function interest(interest, interest2) {
    return `${this.username} is interested in ${interest} and ${interest2}`;
}

const user3Inerest = interest.bind(user3, ...userInterest);
console.log(user3Inerest());

// Principle 4

// code example for Explicit Binding
function userEmail (user, email) {
    console.log(this);
    return `${this.username}'s email is ${this.email}`;
}

console.log(userEmail.call(user2, this.email));