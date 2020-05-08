import   './sidebar';
import switchTabs from './switch-projects';
import ExpandItem from './expand-fold-todo';
import './ProjectsModel'
import projectsModel from './ProjectsModel';
import View from  './toDoList-View';
import handleCheckBoxes from './checkbox-handler';
import newProject from './ProjectView';
switchTabs.switchTabs();
projectsModel.newProject("Today Tasks");
projectsModel.newTask("Do something productive about your life","25.05.2020",
                      "Description Is Right Here","Regular","Today Tasks");
projectsModel.newTask("Do something productive right now","30.05.2020",
                      "Here goes my super duper long description","High","Today Tasks");
projectsModel.newProject("Tomorrow Tasks");
projectsModel.newTask("Do something productive about your life","25.05.2020",
                      "Description Is Right Here","Moderate","Tomorrow Tasks",true);
const sidebarLinks = document.querySelectorAll(".sidebar a");
let activeProject = sidebarLinks[0].textContent;
View.renderList(activeProject);
newProject.addProjectHandler();
ExpandItem();
handleCheckBoxes.checkBoxes();
const toggle = document.querySelectorAll(".switch-toggle input");
let importance = "Regular";
toggle.forEach(toggle=>{
    toggle.addEventListener("focus",(e)=>{
       importance = e.target.value;
       console.log(importance);
    })
})