'use strict';

let todoList = {
	todos: [{todoText: 'item1', completed: true}, {todoText: 'item2', completed: true}, {todoText: 'item3', completed: true}],

	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},

	updateTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
	},

	deleteTodo: function(position){
		this.todos.splice(position, 1);
	},
	
	toggleCompleted: function(position){
		let todo = this.todos[position];
		todo.completed = !todo.completed;
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
	}
};


let handlers = {	
	addTodo: () =>{
		let userTodoInput = document.getElementById('addTodoText');
		todoList.addTodo(userTodoInput.value);
		userTodoInput.value = "";
		views.displayTodos();
	},

	updateTodo: () =>{
		let position = document.getElementById('todoPosition');
		let userTodoInput = document.getElementById('addTodoText');
		todoList.updateTodo(position.valueAsNumber, userTodoInput.value);
		position.value = "";
		userTodoInput.value = "";
		views.displayTodos();
	},

	deleteTodo: () =>{
		let position = document.getElementById('todoPosition');
		todoList.deleteTodo(position.valueAsNumber);
		position.value = "";
		views.displayTodos();
	},

	toggleCompleted: () =>{
		let position = document.getElementById('todoPosition');
		todoList.toggleCompleted(position.valueAsNumber);
		position.value = "";
		views.displayTodos();
	},
	
	toggleAll: () =>{
		todoList.toggleAll();
		views.displayTodos();
	}
}


let views = {
	displayTodos: () =>{
		let table = document.getElementById('mytable').getElementsByTagName('tbody')[0];
		table.innerHTML = "";

		for(let i = 0; i < todoList.todos.length; i++){
			let row, cell1, cell2, newText, newText2, todo;

			todo = todoList.todos[i];
			row 	= table.insertRow(table.rows.length-1);
			cell1 = row.insertCell(0);
			cell2 = row.insertCell(1);

			newText  = document.createTextNode(todo.todoText);
			cell1.appendChild(newText);
			
			if(todo.completed === true){
				cell1.style.textDecoration = "line-through";
			}

			newText2  = document.createTextNode(todoList.todos[i].completed);
			cell2.appendChild(newText2);
		}
	}
}
// console.log("================Display Todos Object================");