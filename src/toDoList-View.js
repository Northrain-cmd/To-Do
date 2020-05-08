import projectsModel from "./ProjectsModel"
export default (function toDoListView(){
    const projectTitle = document.querySelector(".Project-Title-text");
    const renderList = function (projectName){
        projectTitle.innerHTML=projectName;
        projectTitle.style.border="1px solid white";
        projectsModel.projects[projectName].todoList.forEach(toDo =>{
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
                                    case "regular":
                                        importance.style.color="green";
                                        break
                                    case "moderate":
                                        importance.style.color="orange";
                                        break
                                    case "high":
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
        })
    }
    return {renderList};
})()