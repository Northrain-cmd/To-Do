import switchProjects from "./switch-projects";
import ProjectsModel from "./ProjectsModel";
import clearList from "./clear-list";

export default (function(){
    const addProjectBtn = document.querySelector(".new-project-submit");
    const inputForm = document.querySelector(".new-project");
    const sidebar = document.querySelector(".sidebar");
    const foldButton = document.querySelector('#fold-sidebar');
    const addProjectHandler = ()=>{

        addProjectBtn.addEventListener('click',()=>{
            const newProject = document.createElement("div");
            newProject.classList.add("deleteProjectDiv");
            const newProjectText = document.createElement("a");
            const newProjectButton = document.createElement("button");
            newProjectButton.classList.add("deleteProject");
            newProjectButton.innerHTML = "&#10060;";
            newProjectText.href = "#";
            newProject.append(newProjectButton,newProjectText);
            if(!inputForm.value) alert("Please choose a name for this project");
            else if(!(inputForm.value in ProjectsModel.projects)){
                newProjectText.textContent = inputForm.value;
                sidebar.insertBefore(newProject,foldButton);
                ProjectsModel.newProject(inputForm.value);
            }
            else alert("Project with this name already exists");
            switchProjects.switchTabs();
        
        })
                handleProjectsDeleteButtons();
                
        }
    function handleProjectsDeleteButtons(){
       sidebar.addEventListener('click',(e)=>{
           if (e.target.classList.contains('deleteProject')){
                let project = e.target.nextElementSibling.textContent;
               sidebar.removeChild(e.target.parentNode);
               ProjectsModel.deleteProject(project);
               if(switchProjects.getActiveProject()=== project){
                   clearList(project);
               }
               else return
           }
           else return
       })
      
        }
    return {addProjectHandler}
})()