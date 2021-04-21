// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// EVENT LISTENERS

todoButton.addEventListener('click', submitTodo);
todoList.addEventListener('click', deleteCheck); //GRABBING THE UL WHOLE UL HERE
filterOption.addEventListener('change', filterTodo);

// FUNCTIONS

function submitTodo(e) {
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //HERE WE HAVE CREATED A DIV WHEN THE BUTTON IS PRESSED
    //AND APPEND NEW TODO ITEM TO THE DIV
    //SO NEWTODO IS THE CHILD OF THE TODODIV

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
};

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    };

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('complete');
    }
};

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "complete":
                if (todo.classList.contains('complete')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "incomplete":
                if (!todo.classList.contains('complete')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

//FOREACH TAKES A CALLBACK AS AN ARGUMENT, AND THE CALLBACK TAKES
//THE currentValue AS THE FIRST ARGUMENT (OTHER ARGUMENTS ARE OPTIONAL)
// THE currentValue is 'the current element being processed in the array
//in this case the current todo refers to the current item in todoList.childNodes

