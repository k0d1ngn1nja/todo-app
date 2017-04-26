/* Version One
	 Requirements:
		=> It should have a way to store todos
		=> It should have a way to display todos
		=> It should have a way to add new todo
		=> It should have a way to change a todo
		=> It should have a way to delete a todo
*/

// SOLUTION

let todos = [];
console.log(todos);

console.log("Add todo:", "================");

todos.push('first todo item'); //adds a new todo to the end of the list/array
console.log(todos);

console.log("Update todo:", "================");

todos[0] = "updated 1st item"; //updating a todo
console.log(todos);

console.log("Delete todo:", "================");

todos.push('item2');
todos.push('item3');
todos.push('item4');
console.log(todos);

todos.splice(0,1); //splice(start-position, number-of-items-to-delete) and returns the item deleted
console.log(todos);

todos.splice(2,1); 
console.log(todos);