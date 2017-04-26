/* Version Two
	 Requirements:
		=> It should have a function display todos
		=> It should have a function to add new todo
		=> It should have a function to change a todo
		=> It should have a function to delete a todo
*/

// SOLUTION

let todos = ['item1', 'item2', 'item3', 'tiem4'];

console.log("Display todos function", "================");

function displayTodos(){
	console.log(todos);
};

console.log("Add todo function", "================");

function addTodo(todo){
	todos.push(todo);
	displayTodos();
};

console.log("Updating a todo function", "================");

function updateTodo(position, newValue){
	todos[position] = newValue;
	displayTodos();
};

console.log("Deleting a todo function", "================");

function deleteTodo(position){
	todos.splice(position, 1);
	displayTodos();
};