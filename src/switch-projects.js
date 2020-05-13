import View from './toDoView'
import clearList from './toDoView';
import toDoController from './toDoController';
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
                    clearList.clearList();
                    toDoController.setShowCompleted(false);
                    toDoController.controlComplete();
                    View.renderUnchecked(activeProject);
                }

            })
        
        })
    }
    return {switchTabs,getActiveProject,setActiveProject}  
})()