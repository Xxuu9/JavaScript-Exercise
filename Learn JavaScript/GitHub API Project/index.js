// TODO
import FetchWrapper from "./fetch-wrapper.js"
import {startLoader} from "./helpers.js"
import {stopLoader} from "./helpers.js"

const userName = document.querySelector("#github-username");
const button = document.querySelector("#get-repos");
const form = document.querySelector("#repos-form");
const reposList = document.querySelector("#repos-list");

const GitHubAPI = new FetchWrapper("https://api.github.com/")

form.addEventListener("submit", event => {
    event.preventDefault();

    startLoader(button);
    GitHubAPI.get(`users/${userName.value}/repos`)
       .then(data => {

           reposList.innerHTML = "";
           data.forEach(repo => {
               reposList.insertAdjacentHTML("beforeend", `<li>
                    <a href="${repo.html_url}" target = "_blank">
                    <h2>${repo.full_name}</h2>
                    <p>${repo.description}</p>
                    </a>
                    </li>`);
           });
       })
       .finally(() => {
           stopLoader(button, "Get repos");
       });
})