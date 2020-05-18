import format from 'date-fns/format';
import switchProjects from "./switch-projects";
import ProjectsModel from "./ProjectsModel";
import toDoController from './toDoController';
export default (function toDoListView(){
    const projectTitle = document.querySelector(".Project-Title-text");
    const renderToggle = function(toDo,importance){
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
    }
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
                        change.classList.add("editToDo");
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
                        dueDate.textContent = format(new Date(toDo.dueDate),"PPP");
                    secondRow.appendChild(dueDate);
                    let importance = document.createElement("i");
                    importance.classList.add("fas","fa-exclamation-circle");
                        renderToggle(toDo,importance);
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
    const renderChecked = function (projectName){
        projectTitle.innerHTML=projectName;
        projectTitle.style.border="1px solid white";
        Projects[projectName].todoList.sort((a,b)=>{
            let table = {"Regular":1,"Moderate":2,"High":3};
            return table[b.importance]-table[a.importance];
            
        }).sort((a,b)=>{
            let table = {true:1,false:2};
            return table[b.checked]-table[a.checked];
        }).forEach(toDo =>{
            
            appendItem(toDo);
        })
    }
    const renderUnchecked = function (projectName){
        projectTitle.innerHTML=projectName;
        projectTitle.style.border="1px solid white";
       Projects[projectName].todoList.filter((item)=>{
            return item.checked === false;
        }).sort((a,b)=>{
            let table = {"Regular":1,"Moderate":2,"High":3};
            return table[b.importance]-table[a.importance];
            
        }).forEach(toDo =>{
            appendItem(toDo);
        })
    }
    const addNewItemHandler = function(){
        const newForm = document.querySelector('.addNewItem');
        const addButton = document.querySelector(".addButton");
        addButton.addEventListener('click',()=>{
            if(newForm.style.display==="block"){
                newForm.style.display="none";
            }
            else{
                newForm.style.display="block";
            }
        })
        const toggle = document.querySelectorAll(".addInput");
        let importance = "Regular";
        toggle.forEach(toggle=>{
            toggle.addEventListener("focus",(e)=>{
                importance = e.target.value;
            })
        })
        newForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const tempDate = new Date(newForm.date.value.replace(/-/g,"/"));
            if(ProjectsModel.doesAlreadyExist(newForm.title.value.replace(/-/g,"/"),tempDate)){
                animateWrongName("titleInput");
            }
            else{
                const activeProject = switchProjects.getActiveProject();
                ProjectsModel.newTask(newForm.title.value,tempDate,newForm.description.value,
                                    importance,activeProject,false);
                animateAdded();
                clearList();
                if(toDoController.getShowCheckedState()){
                    renderChecked(activeProject);
                }
                else renderUnchecked(activeProject);
                newForm.reset();
            }
        })
        function animateAdded(){
            const sign = document.querySelector('.taskAdded');
            sign.style.animation="fadeIn .5s";
            sign.addEventListener('animationend',()=>{
                sign.style.animation="none";
            })
        }
        
    }
        const animateWrongName= function(id){
            const title = document.getElementById(id);
            title.style.animation="wrongShake 1s";
            title.addEventListener('animationend',()=>{
                title.style.animation="none";
            })
    }
    const clearList = function(){
        const todoList=document.querySelector(".to-do-list");
        const projectTitle = document.querySelector(".Project-Title-text");
        projectTitle.style.border="none";
        projectTitle.innerHTML="";
        todoList.innerHTML = '';
    }
    //addNewItemHandler();
    return {renderChecked,clearList,addNewItemHandler,renderUnchecked,animateWrongName};
})()