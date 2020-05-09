export default function expandToDo(){
    const toDoList= document.querySelector(".to-do-list");
        toDoList.addEventListener('click',(e)=>{
            if(e.target.classList.contains("title")){
                e.target.parentNode.nextElementSibling.style.display="flex";
                e.target.parentNode.nextElementSibling.nextElementSibling.style.display="flex";
            }
            else if(e.target.parentNode.classList.contains("fold-item")){
                e.target.parentNode.style.display="none";
                e.target.parentNode.previousElementSibling.style.display="none";
            }
            else return
        }) 
        }
