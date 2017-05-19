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

	deleteTodo: function(position){
		this.todos.splice(position, 1);
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


let handlers = {
	displayTodos: () =>{
		todoList.displayTodos();
	},
	
	addTodo: () =>{
		let userTodoInput = document.getElementById('addTodoText');
		todoList.addTodo(userTodoInput.value);
		userTodoInput.value = "";
	},

	updateTodo: () =>{
		let position = document.getElementById('todoPosition');
		let userTodoInput = document.getElementById('addTodoText');
		todoList.updateTodo(updatePosition.valueAsNumber, userTodoInput.value);
		updatePosition.value = "";
		userTodoInput.value = "";
	},

	deleteTodo: () =>{
		let position = document.getElementById('todoPosition');
		todoList.deleteTodo(position.valueAsNumber);
		position.value = "";
	},

	toggleCompleted: () =>{
		let position = document.getElementById('todoPosition');
		todoList.toggleCompleted(position.valueAsNumber);
		position.value = "";
	},
	
	toggleAll: () =>{
		todoList.toggleAll();
	}
}


let views = {
	displayTodos: () =>{
		let table = document.getElementById('mytable').getElementsByTagName('tbody')[0];
		table.innerHTML = "";

		for(let i = 0; i < todoList.todos.length; i++){
			let row, cell1, cell2, newText,newText2;

			row 	= table.insertRow(table.rows.length-1);
			cell1 = row.insertCell(0);
			cell2 = row.insertCell(1);
			newText  = document.createTextNode('New row');
			cell1.appendChild(newText);

			newText2  = document.createTextNode('2');
			cell2.appendChild(newText2);
		}
	}
}
// console.log("================Display Todos Object================");


// let table = document.getElementById('mytable').getElementsByTagName('tbody')[0];
// 			let row 	= table.insertRow(table.rows.length-1);
// 		for(let i = 0; i < todoList.todos.length; i++){
// 			let cell1 = row.insertCell(0);	
// 			var newText  = document.createTextNode('New row');
// 			cell1.appendChild(newText);
// 		}