import switchProjects from "./switch-projects";
import projectsModel from "./ProjectsModel";

export default (function(){
    const addProjectBtn = document.querySelector(".new-project-submit");
    const inputForm = document.querySelector(".new-project");
    const sidebar = document.querySelector(".sidebar");
    const foldButton = document.querySelector('#fold-sidebar');
    const addProjectHandler = ()=>{
        addProjectBtn.addEventListener('click',()=>{
            const newProject = document.createElement("a");
            newProject.href = "#";
            if(!inputForm.value) alert("Please choose a name for this project");
            else if(!(inputForm.value in projectsModel.projects)){
                newProject.textContent = inputForm.value;
                sidebar.insertBefore(newProject,foldButton);
                projectsModel.newProject(inputForm.value);
            }
            else alert("Project with this name already exists");
            console.table(projectsModel.projects);
            switchProjects.switchTabs();
        
        })
    }
    return {addProjectHandler}
})()