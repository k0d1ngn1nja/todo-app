'use strict';
/* Version Five
	 Requirements:
		=> displayTodos should show todoText
		=> displayTodos should tell you if todos is empty
		=> displayTodos should show completed
*/

// SOLUTION
let todoList = {
	todos: [{todoText: 'item1', completed: false}, {todoText: 'item2', completed: true}, {todoText: 'item3', completed: false}],
	
	displayTodos: function() {
		if(this.todos.length > 0){
			this.todos.forEach( function(todo) {
				if(todo.completed === true){
					console.log(`(X) ${todo.todoText}`);
				} else{
					console.log(`( ) ${todo.todoText}`);
				}
			});	
		} else {
			console.log("Your todo list is empty!");
		}
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
todoList.displayTodos();

