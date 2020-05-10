import ProjectsModel from "./ProjectsModel";

export default function toDoController(){
    const toDoList= document.querySelector(".to-do-list");
        toDoList.addEventListener('click',(e)=>{
            if(e.target.classList.contains("title")){
                e.target.parentNode.nextElementSibling.style.display="flex";
                e.target.parentNode.nextElementSibling.nextElementSibling.style.display="flex";
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
