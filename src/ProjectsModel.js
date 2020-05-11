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
    const deleteTask = function(title,date){
                let index = projects[switchTabs.getActiveProject()].todoList.findIndex((todo)=>{
                 return todo.title === title && todo.date === date
                })
                projects[switchTabs.getActiveProject()].todoList.splice(index,1);
    }
    const editTask = function (toDo,title,dueDate,description,importance){
           toDo.title = title;
           toDo.dueDate = dueDate;
           toDo.description = description;
           toDo.importance = importance;
        }
    const doesAlreadyExist = function(title,date){
        if(projects[switchTabs.getActiveProject()].todoList.some((todo)=>{
            return todo.title === title && Date.parse(todo.dueDate) === Date.parse(date.toString());
           })){
               return true
           }
        else  {
            return false
        } 
    }
    const returnToDo = function (title,projectName){
        return projects[projectName].todoList.find((todo)=>{
            return title === todo.title;
        })
    }
    const checkBox = function (index){
        projects[switchTabs.getActiveProject()].todoList[index].checked = !projects[switchTabs.getActiveProject()].todoList[index].checked;
    }
    return {newProject,projects,newTask,deleteProject,renameObject,deleteTask,editTask,doesAlreadyExist,returnToDo, checkBox}
})()