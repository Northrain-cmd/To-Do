import switchTabs from './switch-projects';
export default (function projectsModel(){
    const projects = {};
    const projectsFactory = function (title){
        const todoList = [];
        return {title,todoList}
    }
    const tasksFactory = function (title,dueDate,description,importance,checked){
        return {title,dueDate,description,importance,checked}
    }
    const newProject = function (projectName){
        projects[projectName] = projectsFactory(projectName);
    }
    const deleteProject = function (projectName){
        delete projects[projectName];
    }
    const renameObject = function (oldProject,projectName){
        projects[projectName] = projects[oldProject];
        deleteProject(oldProject);
        projects[projectName].title = projectName;
    }
    const newTask = function (title,dueDate,description,importance,projectName,checked=false){
        projects[projectName].todoList.push(tasksFactory(title,dueDate,description,importance,checked));
    }
    const checkBox = function (index){
        projects[switchTabs.getActiveProject()].todoList[index].checked = !projects[switchTabs.getActiveProject()].todoList[index].checked;
    }
    return {newProject,projects,newTask,deleteProject,renameObject,checkBox}
})()