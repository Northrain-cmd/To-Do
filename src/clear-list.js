export default function clearList(projectName){
    const todoList=document.querySelector(".to-do-list");
    const projectTitle = document.querySelector(".Project-Title-text");
    projectTitle.style.border="none";
    projectTitle.innerHTML="";
    todoList.innerHTML = '';
}