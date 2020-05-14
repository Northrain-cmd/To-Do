import switchProjects from "./switch-projects";
import ProjectsModel from "./ProjectsModel";
import clearList from "./toDoView";
import toDoView from "./toDoView";

export default (function(){
    const inputField = document.querySelector(".new-project");
    const inputForm = document.querySelector(".new-project-form");
    const sidebar = document.querySelector(".sidebar");
    const foldButton = document.querySelector('#fold-sidebar');
    const projectTitle = document.querySelector(".Project-Title-text");
    const renderProjects = function (){
        Object.keys(ProjectsModel.projects).forEach(key=>{
                const newProject = document.createElement("div");
                newProject.classList.add("deleteProjectDiv");
                const newProjectText = document.createElement("a");
                const newProjectButton = document.createElement("button");
                newProjectButton.classList.add("deleteProject");
                newProjectButton.innerHTML = "&#10060;";
                newProjectText.href = "#";
                newProject.append(newProjectButton,newProjectText);
                newProjectText.textContent = key;
                sidebar.insertBefore(newProject,foldButton);
                projectTitle.style.border="1px solid white";
         })
         sidebar.querySelector("a").classList.add("active");
    }
    const addProjectHandler = function (){
                    inputForm.addEventListener('submit',(e)=>{
                            e.preventDefault();
                            const newProject = document.createElement("div");
                            newProject.classList.add("deleteProjectDiv");
                            const newProjectText = document.createElement("a");
                            const newProjectButton = document.createElement("button");
                            newProjectButton.classList.add("deleteProject");
                            newProjectButton.innerHTML = "&#10060;";
                            newProjectText.href = "#";
                            newProject.append(newProjectButton,newProjectText);
                            if(!inputField.value) alert("Please choose a name for this project");
                            else if(!(inputField.value in ProjectsModel.projects)){
                                newProjectText.textContent = inputField.value;
                                sidebar.insertBefore(newProject,foldButton);
                                ProjectsModel.newProject(inputField.value);
                                projectTitle.style.border="1px solid white";
                                switchProjects.switchTabs();
                                inputForm.reset();
                            }
                            else alert("Project with this name already exists");
            
        
        })
                handleProjectsDeleteButtons();
                handleEditProject();
                
        }
    function handleProjectsDeleteButtons(){
       sidebar.addEventListener('click',(e)=>{
           if (e.target.classList.contains('deleteProject')){
               const links = sidebar.querySelectorAll("a");
                let project = e.target.nextElementSibling.textContent;
                if(links.length>1){
                     sidebar.removeChild(e.target.parentNode);
                    ProjectsModel.deleteProject(project);
                    if(switchProjects.getActiveProject()=== project){
                        clearList.clearList();
                    }
                    else return
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
            if(projectTitle.textContent!== activeTab.textContent && !(ProjectsModel.projectAlreadyExists(projectTitle.textContent))){
                ProjectsModel.renameObject(activeTab.textContent,projectTitle.textContent);
                activeTab.textContent = projectTitle.textContent;
                switchProjects.setActiveProject(activeTab.textContent);
            }
            else toDoView.animateWrongName("project-title");
        })
    }
    return {addProjectHandler,renderProjects}
})()