import View from './toDoList-View'
import clearList from './clear-list';
import expandToDo from './expand-fold-todo';
import handleCheckBoxes from './checkbox-handler';
export default (function (){
    let activeProject;
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const setActiveProject = function (value){
        activeProject = value;
    }
    const getActiveProject = function(){
        return activeProject;
    };
    function switchTabs(){
        sidebarLinks.forEach((link)=>{
            link.addEventListener('click',()=>{
                if (link.classList.contains("active")){
                   setActiveProject(link.textContent);
                    console.log(getActiveProject());
                }
                else{
                    sidebarLinks.forEach(link=>{
                        link.classList.remove("active");
                    })
                    link.classList.add("active");
                    setActiveProject(link.textContent);
                    console.log(getActiveProject());
                    clearList(activeProject);
                    View.renderList(activeProject);
                    expandToDo();
                    handleCheckBoxes.checkBoxes();
        
                }

            })
        
        })
    }
    return {switchTabs,getActiveProject}  
})()