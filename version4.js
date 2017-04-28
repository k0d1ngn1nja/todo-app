'use strict';
/* Version Three
	 Requirements:
		=> It should store the todos array on an object
		=> It should have a display Todos method
		=> It should have an addTodo method
		=> It should have an updateTodo method
		=> It should have a deleteTodo method
*/

// SOLUTION

let todoList = {
	todos: ['item1', 'item2', 'item3', 'tiem4'],
	
	displayTodos: function() {
		console.log(this.todos);
	},

	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},

	updateTodo: function(position, newValue){
		this.todos[position] = newValue;
		this.displayTodos();
	},

	deleteTodo: function(position){
		this.todos.splice(position, 1);
		this.displayTodos();
	}
}

console.log("================Display Todos Object================");
console.log(todoList.displayTodos());

