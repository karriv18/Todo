const input = document.getElementById('input')
const todoList = document.getElementById('todo-list')


function addTodo(){
    if (input.value === ''){
        alert('Enter something')
    }
    else if(input.value === ' '){
        alert('Enter something')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        todoList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = 'remove'
        li.appendChild(span)
    }
    input.value = "";
    saveData()
}

todoList.addEventListener("click", (props) =>{
    if (props.target.tagName === 'SPAN'){
        props.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data', todoList.innerHTML)
}

function showTask(){
    todoList.innerHTML = localStorage.getItem('data')
}
showTask()