import View from './toDoList-View'
import clearList from './clear-list';
import expandToDo from './expand-fold-todo';
import handleCheckBoxes from './checkbox-handler';
export default (function (){
    let activeProject;
    let sidebarLinks = document.querySelectorAll(".sidebar a");
    const projectTitle = document.querySelector(".Project-Title-text");
    const setActiveProject = function (value){
        activeProject = value;
    }
    const getActiveProject = function(){
        if(!activeProject) setActiveProject(sidebarLinks[0].textContent);
        return activeProject;
    };
    function switchTabs(){
        sidebarLinks = document.querySelectorAll(".sidebar a");
        sidebarLinks.forEach((link)=>{
            link.addEventListener('click',()=>{
                if (link.classList.contains("active")){
                   setActiveProject(link.textContent);
                }
                else{
                    sidebarLinks.forEach(link=>{
                        link.classList.remove("active");
                    })
                    link.classList.add("active");
                    setActiveProject(link.textContent);
                    projectTitle.textContent = link.textContent;
                    clearList(activeProject);
                    View.renderList(activeProject);
                    expandToDo();
                    handleCheckBoxes.checkBoxes();
        
                }

            })
        
        })
    }
    return {switchTabs,getActiveProject,setActiveProject}  
})()