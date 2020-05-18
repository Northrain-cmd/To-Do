import format from "date-fns/format";
import parse from "date-fns/parse";
import switchTabs from "./switch-projects";

export default (function projectsModel() {
  const projectsFactory = function (title) {
    const todoList = [];
    return { title, todoList };
  };
  const tasksFactory = function (
    title,
    dueDate,
    description,
    importance,
    checked
  ) {
    return { title, dueDate, description, importance, checked };
  };
  const newProject = function (projectName) {
    Projects[projectName] = projectsFactory(projectName);
    db.collection("users")
      .doc(userId)
      .set(Projects)
      .then(() => {
        console.log("Synchronized");
      })
      .catch((error) => console.log(error));
  };
  const deleteProject = function (projectName) {
    delete Projects[projectName];
    db.collection("users")
      .doc(userId)
      .set(Projects)
      .then(() => {
        console.log("Synchronized");
      })
      .catch((error) => console.log(error));
  };
  const renameObject = function (oldProject, projectName) {
    Projects[projectName] = Projects[oldProject];
    deleteProject(oldProject);
    Projects[projectName].title = projectName;
    db.collection("users")
      .doc(userId)
      .set(Projects)
      .then(() => {
        console.log("Synchronized");
      })
      .catch((error) => console.log(error));
  };
  const newTask = function (
    title,
    dueDate,
    description,
    importance,
    projectName,
    checked = false
  ) {
    Projects[projectName].todoList.push(
      tasksFactory(title, dueDate.toString(), description, importance, checked)
    );
    db.collection("users")
      .doc(userId)
      .set(Projects)
      .then(() => {
        console.log("Synchronized");
      })
      .catch((error) => console.log(error));
  };
  const deleteTask = function (title, date) {
    let index = Projects[switchTabs.getActiveProject()].todoList.findIndex(
      (todo) => {
        return (
          todo.title === title &&
          format(new Date(todo.dueDate), "MM/dd/yyyy") ===
            format(parse(date, "PPP", new Date()), "MM/dd/yyyy")
        );
      }
    );
    Projects[switchTabs.getActiveProject()].todoList.splice(index, 1);
    db.collection("users")
      .doc(userId)
      .set(Projects)
      .then(() => {
        console.log("Synchronized");
      })
      .catch((error) => console.log(error));
  };
  const editTask = function (toDo, title, dueDate, description, importance) {
    toDo.title = title;
    toDo.dueDate = new Date(dueDate).toString();
    toDo.description = description;
    toDo.importance = importance;
    db.collection("users")
      .doc(userId)
      .set(Projects)
      .then(() => {
        console.log("Synchronized");
      })
      .catch((error) => console.log(error));
  };
  const doesAlreadyExistForEdit = function (toDo, title, date) {
    if (
      toDo.title === title &&
      format(new Date(toDo.dueDate), "MM/dd/yyyy") ===
        format(parse(date, "yyyy/MM/dd", new Date()), "MM/dd/yyyy")
    ) {
      return false;
    } else {
      if (
        Projects[switchTabs.getActiveProject()].todoList.some((todo) => {
          return (
            todo.title === title &&
            format(new Date(todo.dueDate), "MM/dd/yyyy") ===
              format(parse(date, "yyyy/MM/dd", new Date()), "MM/dd/yyyy")
          );
        })
      ) {
        return true;
      } else {
        return false;
      }
    }
  };
  const projectAlreadyExists = function (projectName) {
    return Projects[projectName] ? true : false;
  };
  const doesAlreadyExist = function (title, date) {
    if (
      Projects[switchTabs.getActiveProject()].todoList.some((todo) => {
        return (
          todo.title === title &&
          format(new Date(todo.dueDate), "MM/dd/yyyy") ===
            format(date, "MM/dd/yyyy")
        );
      })
    ) {
      return true;
    } else {
      return false;
    }
  };
  const returnToDo = function (title, date) {
    return Projects[switchTabs.getActiveProject()].todoList.find((todo) => {
      return (
        todo.title === title &&
        format(new Date(todo.dueDate), "MM/dd/yyyy") ===
          format(parse(date, "PPP", new Date()), "MM/dd/yyyy")
      );
    });
  };
  const checkBox = function (title, date) {
    let checkedVar = Projects[switchTabs.getActiveProject()].todoList.find(
      (todo) => {
        return (
          todo.title === title &&
          format(new Date(todo.dueDate), "MM/dd/yyyy") ===
            format(parse(date, "PPP", new Date()), "MM/dd/yyyy")
        );
      }
    );
    checkedVar.checked = !checkedVar.checked;
    db.collection("users")
      .doc(userId)
      .set(Projects)
      .then(() => {
        console.log("Synchronized");
      })
      .catch((error) => console.log(error));
  };
  return {
    newProject,
    newTask,
    deleteProject,
    renameObject,
    deleteTask,
    editTask,
    doesAlreadyExist,
    doesAlreadyExistForEdit,
    projectAlreadyExists,
    returnToDo,
    checkBox,
  };
})();
