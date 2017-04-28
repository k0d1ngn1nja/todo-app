'use strict';
/* Version Four
	 Requirements:
		=> todoList.addTodo should add objects
		=> todoList.updatedTodo should change todoText property
		=> todoList.toggleCompleted should change the completed property
*/

// SOLUTION
let todoList = {
	todos: [],
	
	displayTodos: function() {
		console.log(this.todos);
	},

	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	updateTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	
	toggleCompleted: function(position){
		let todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
}

console.log("================Display Todos Object================");
console.log(todoList.displayTodos());

