// TODO
import FetchWrapper from './fetch-wrapper.js'

const todoTitle = document.querySelector("#todo-title");
const todoCategory = document.querySelector("#todo-category");
const form = document.querySelector("#todo-form");
const button = document.querySelector("#button-add");
const todoList = document.querySelector("#todos-list");

const API = new FetchWrapper("https://api.learnjavascript.online/");

form.addEventListener("submit", event=> {
    event.preventDefault();
    button.setAttribute("disabled", "disabled")

    API.put("demo/todos",{
        title: todoTitle.value, 
        category: todoCategory.value
    })
      .then(data => {
         console.log(data);
         if(!data.error){
             render();
         }
    })
    .finally(() => {
        button.removeAttribute("disabled");
    });
})

const render = () => {
    API.get("demo/todos").then(data=>{
        todoList.innerHTML = "";
        console.log(data.todos)
        data.todos.forEach(todo => {
            todoList.insertAdjacentHTML("beforeend",`<li><div class="card">[${todo.category}] ${todo.title}</div></li>`)
        });
    });
}

render();