'use strict';

let todoList = {
	todos: [{todoText: 'item1', completed: true}, {todoText: 'item2', completed: true}, {todoText: 'item3', completed: true}],
	
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
	},

	toggleAll: function(){
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		// Get number of completed todos
		for(let i = 0; i < totalTodos; i++){
			if(this.todos[i].completed === true){
				completedTodos++;
			}
		}		
		//If everything is true, make everything false
		if(completedTodos === totalTodos){
			for(let i = 0; i < totalTodos; i++){
				this.todos[i].completed = false;
			}
		} else {
			//If everything is false, make everything true
			for(let i = 0; i < totalTodos; i++){
				this.todos[i].completed = true;
			}
		}
			
		this.displayTodos();
	}
};

const displaytodosBtn = document.getElementById("displaytodoBtn");
const toggleallBtn = document.getElementById("toggleallBtn");

displaytodosBtn.addEventListener('click', () =>{
	todoList.displayTodos();
});

toggleallBtn.addEventListener('click', () =>{
	todoList.toggleAll();
});


// console.log("================Display Todos Object================");