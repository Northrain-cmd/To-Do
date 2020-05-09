import projectsModel from "./ProjectsModel"
import switchProjects from "./switch-projects";
export default (function toDoListView(){
    const projectTitle = document.querySelector(".Project-Title-text");
    function appendItem(toDo){
        let todoList = document.querySelector(".to-do-list");
       
            let toDoItem = document.createElement("div");
            toDoItem.classList.add("to-do-item");
                let  wrap =  document.createElement("div");     
                wrap.classList.add("wrap");
                    let firstRow =  document.createElement("div");  
                    firstRow.classList.add("first-row");
                        let deleteBtn = document.createElement("i");
                        deleteBtn.classList.add("fas","fa-trash-alt","delete-button")  ;
                    firstRow.appendChild(deleteBtn);
                        let title = document.createElement("p");
                        title.classList.add("title");
                        title.textContent = toDo.title;
                    firstRow.appendChild(title);
                wrap.appendChild(firstRow);
                    let description =  document.createElement("div");
                    description.classList.add("description");
                        let change =  document.createElement("span");
                        change.innerHTML = "&#9881;";
                    description.appendChild(change);
                        let descriptionText =  document.createElement("p");
                        descriptionText.textContent = toDo.description;
                    description.appendChild(descriptionText);
                wrap.appendChild(description);
                    let foldItem = document.createElement("div");
                    foldItem.classList.add("fold-item");
                        let foldButton = document.createElement("button");
                        foldButton.innerHTML = "&#9650;";
                    foldItem.appendChild(foldButton);
                wrap.appendChild(foldItem);
                    let secondRow = document.createElement("div");
                    secondRow.classList.add("second-row");
                        let clock = document.createElement("i");
                        clock.classList.add("far","fa-clock");
                    secondRow.appendChild(clock);
                        let dueDate = document.createElement("p");
                        dueDate.classList.add("due-date");
                        dueDate.textContent = toDo.dueDate;
                    secondRow.appendChild(dueDate);
                        let importance = document.createElement("i");
                        importance.classList.add("fas","fa-exclamation-circle");
                            switch (toDo.importance){
                                case "Regular":
                                    importance.style.color="green";
                                    break
                                case "Moderate":
                                    importance.style.color="orange";
                                    break
                                case "High":
                                    importance.style.color="red";
                                    break
                            }
                    secondRow.appendChild(importance);
                wrap.appendChild(secondRow);
            toDoItem.appendChild(wrap);
                let label = document.createElement("label");
                label.classList.add("container");
                    let checkbox = document.createElement("input");
                    checkbox.setAttribute("type","checkbox");
                    checkbox.checked = toDo.checked;
                    checkbox.classList.add("checkbox");
                label.appendChild(checkbox);
                    let checkmark = document.createElement("span");
                    checkmark.classList.add("checkmark");
                label.appendChild(checkmark);
            toDoItem.appendChild(label);
        todoList.appendChild(toDoItem);
        }
    const renderList = function (projectName){
        projectTitle.innerHTML=projectName;
        projectTitle.style.border="1px solid white";
        projectsModel.projects[projectName].todoList.forEach(toDo =>{
            
            appendItem(toDo);
        })
        //addNewItemHandler();
    }
    const addNewItemHandler = function(){
        const newForm = document.querySelector('.addNewItem');
        const addButton = document.querySelector(".addButton");
        addButton.addEventListener('click',()=>{
            console.log("I here you");
            if(newForm.style.display==="block"){
                newForm.style.display="none";
            }
            else{
                newForm.style.display="block";
            }
        })
        const toggle = document.querySelectorAll(".switch-toggle input");
        let importance = "Regular";
        toggle.forEach(toggle=>{
            toggle.addEventListener("focus",(e)=>{
                importance = e.target.value;
                console.log(importance);
            })
        })
        newForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            projectsModel.newTask(newForm.title.value,newForm.date.value,newForm.description.value,
                                 importance,switchProjects.getActiveProject(),false);
            const todolist = projectsModel.projects[switchProjects.getActiveProject()].todoList;
            const todo = todolist[todolist.length-1];
            appendItem(todo);
            console.log(projectsModel.projects);

        })
    }
    addNewItemHandler();
    return {renderList};
})()