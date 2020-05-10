import ProjectsModel from "./ProjectsModel";
import switchProjects from "./switch-projects";
import toDoView from "./toDoView";

export default function toDoController(){
    function showToggle(editForm,toDo){
        const inputs = editForm.querySelectorAll(".myToggle");
        switch(toDo.importance){
            case "Regular":
                inputs[0].checked = ! inputs[0].checked;
                break
            case "Moderate":
                inputs[1].checked = ! inputs[1].checked;
                break
            case "High":
                inputs[2].checked = ! inputs[2].checked;
                break
            default:
        }
    }
        let importance;
        const getImportance = function(){
            const inputs = editForm.querySelectorAll(".myToggle");  
            inputs.forEach(toggle=>{
                toggle.addEventListener("click",(e)=>{
                    importance = e.target.value;
                    console.log(importance);
                })
            })     
        }
    const toDoList= document.querySelector(".to-do-list");
    const editForm = document.querySelector('.editItem');
        toDoList.addEventListener('click',(e)=>{
            if(e.target.classList.contains("title")){
                e.target.parentNode.nextElementSibling.style.display="flex";
                e.target.parentNode.nextElementSibling.nextElementSibling.style.display="flex";
            }
            
            else if(e.target.classList.contains("editToDo")){
                editForm.style.display= "flex";
                editForm.title.value=e.target.parentNode.previousElementSibling.lastChild.textContent;
                let toDo=ProjectsModel.returnToDo(editForm.title.value,switchProjects.getActiveProject());
                editForm.date.value= toDo.dueDate;
                showToggle(editForm,toDo,importance);
                editForm.description.value = toDo.description;
                getImportance();
                function handleSubmit(e){
                    e.preventDefault();
                    ProjectsModel.editTask(toDo,editForm.title.value,editForm.date.value,
                                           editForm.description.value,importance);
                    toDoView.clearList();
                    toDoView.renderList(switchProjects.getActiveProject())
                    editForm.removeEventListener("submit",handleSubmit);
                    editForm.style.display="none";
                }
                editForm.addEventListener('submit',handleSubmit);
            }
            else if(e.target.classList.contains("delete-button")){
                ProjectsModel.deleteTask(e.target.nextElementSibling.textContent,
                                        e.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('.due-date').textContent);
                toDoList.removeChild(e.target.parentNode.parentNode.parentNode);

            }
            else if(e.target.classList.contains("checkmark")){
                const checkmarks = document.querySelectorAll(".checkbox");
                const checkMarksArray= [...checkmarks];
                const index = checkMarksArray.indexOf(e.target.previousElementSibling);
                ProjectsModel.checkBox(index);
            }
            else if(e.target.parentNode.classList.contains("fold-item")){
                e.target.parentNode.style.display="none";
                e.target.parentNode.previousElementSibling.style.display="none";
            }
            else return
        }) 
        }
