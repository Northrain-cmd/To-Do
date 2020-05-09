import switchProjects from "./switch-projects";
import ProjectsModel from "./ProjectsModel";
import clearList from "./clear-list";

export default (function(){
    const addProjectBtn = document.querySelector(".new-project-submit");
    const inputForm = document.querySelector(".new-project");
    const sidebar = document.querySelector(".sidebar");
    const foldButton = document.querySelector('#fold-sidebar');
    const addProjectHandler = ()=>{
             const projectTitle = document.querySelector(".Project-Title-text");
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
                projectTitle.style.border="1px solid white";
            }
            else alert("Project with this name already exists");
            switchProjects.switchTabs();
        
        })
                handleProjectsDeleteButtons();
                handleEditProject();
                
        }
    function handleProjectsDeleteButtons(){
       sidebar.addEventListener('click',(e)=>{
           if (e.target.classList.contains('deleteProject')){
                let project = e.target.nextElementSibling.textContent;
               sidebar.removeChild(e.target.parentNode);
               ProjectsModel.deleteProject(project);
               if(switchProjects.getActiveProject()=== project){
               
                   clearList(project);
                   console.log("Hello");
                 
                   
               }
               else return
           }
           else return
       })

        }
    function handleEditProject(){
        const projectTitle = document.querySelector(".Project-Title-text");
        projectTitle.addEventListener('focusout',()=>{
            let activeTab = sidebar.querySelector('.active');
            if(projectTitle.textContent!== activeTab.textContent){
                ProjectsModel.renameObject(activeTab.textContent,projectTitle.textContent);
                activeTab.textContent = projectTitle.textContent;
                switchProjects.setActiveProject(activeTab.textContent);
            }
            else return ;
        })
    }
    return {addProjectHandler}
})()