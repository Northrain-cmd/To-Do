import ProjectsModel from "./ProjectsModel";
import switchProjects from "./switch-projects";
import toDoView from "./toDoView";
import format from "date-fns/format";
export default (function toDoController() {
  let darkMode = false;
  const darkModeSwitch = document.querySelector(".darkModeSwitch");
  darkModeSwitch.checked = false;
  let root = document.documentElement;
  darkModeSwitch.addEventListener("click", () => {
    if (darkModeSwitch.checked === true) {
      root.style.setProperty(
        "--main-bg-image",
        "linear-gradient(270deg, #040a39 0%, #090924 50%, #000000 100%)"
      );
      root.style.setProperty("--items-bg-color", "initial");
      root.style.setProperty("--items-color", "white");
      root.style.setProperty("--project-bg-color", "initial");
      root.style.setProperty("--sidebar-bg-color", "#060624");

      darkMode = true;
    } else {
      root.style.setProperty(
        "--main-bg-image",
        "linear-gradient(270deg, #21D4FD 0%, #B721FF 100%)"
      );
      root.style.setProperty("--items-bg-color", "#DADADA");
      root.style.setProperty("--items-color", "black");
      root.style.setProperty("--project-bg-color", "lightcoral");
      root.style.setProperty("--sidebar-bg-color", "#B721FF");
      darkMode = false;
    }
  });
  let showCompleted = false;
  const showChecked = document.querySelector(".showChecked");
  const controlComplete = function () {
    const showChecked = document.querySelector(".showChecked");
    showChecked.checked = false;
    showChecked.addEventListener("click", (e) => {
      if (showChecked.checked === true) {
        showCompleted = true;
        toDoView.clearList();
        toDoView.renderChecked(switchProjects.getActiveProject());
      } else {
        showCompleted = false;
        toDoView.clearList();
        toDoView.renderUnchecked(switchProjects.getActiveProject());
      }
    });
  };
  controlComplete();
  const controlFlow = function () {
    function showToggle(editForm, toDo) {
      const inputs = editForm.querySelectorAll(".myToggle");
      switch (toDo.importance) {
        case "Regular":
          inputs[0].checked = true;
          inputs[1].checked = false;
          inputs[2].checked = false;
          break;
        case "Moderate":
          inputs[1].checked = true;
          inputs[0].checked = false;
          inputs[2].checked = false;
          break;
        case "High":
          inputs[2].checked = true;
          inputs[1].checked = false;
          inputs[0].checked = false;
          break;
        default:
      }
    }
    let importance;
    const getImportance = function () {
      const inputs = editForm.querySelectorAll(".myToggle");
      inputs.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
          importance = e.target.value;
        });
      });
    };
    const toDoList = document.querySelector(".to-do-list");
    const editForm = document.querySelector(".editItem");
    toDoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("title")) {
        e.target.parentNode.nextElementSibling.style.display = "flex";
        e.target.parentNode.nextElementSibling.nextElementSibling.style.display =
          "flex";
      } else if (e.target.classList.contains("editToDo")) {
        editForm.style.display = "flex";
        editForm.title.value =
          e.target.parentNode.previousElementSibling.lastChild.textContent;
        let toDo = ProjectsModel.returnToDo(
          editForm.title.value,
          e.target.parentNode.nextElementSibling.nextElementSibling.children[1]
            .textContent
        );
        importance = toDo.importance;
        editForm.date.value = format(new Date(toDo.dueDate), "yyyy-MM-dd");
        showToggle(editForm, toDo);
        editForm.description.value = toDo.description;
        getImportance();
        function handleSubmit(e) {
          e.preventDefault();
          if (
            !ProjectsModel.doesAlreadyExistForEdit(
              toDo,
              editForm.title.value,
              editForm.date.value.replace(/-/g, "/")
            )
          ) {
            ProjectsModel.editTask(
              toDo,
              editForm.title.value,
              editForm.date.value.replace(/-/g, "/"),
              editForm.description.value,
              importance
            );
            toDoView.clearList();
            if (showCompleted === true)
              toDoView.renderChecked(switchProjects.getActiveProject());
            else toDoView.renderUnchecked(switchProjects.getActiveProject());
            editForm.removeEventListener("submit", handleSubmit);
            editForm.style.display = "none";
          } else {
            toDoView.animateWrongName("titleInputEdit");
          }
        }
        editForm.addEventListener("submit", handleSubmit);
      } else if (e.target.classList.contains("delete-button")) {
        ProjectsModel.deleteTask(
          e.target.nextElementSibling.textContent,
          e.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.querySelector(
            ".due-date"
          ).textContent
        );
        toDoList.removeChild(e.target.parentNode.parentNode.parentNode);
      } else if (e.target.classList.contains("checkmark")) {
        const title =
          e.target.parentNode.previousElementSibling.firstChild.children[1]
            .textContent;
        const date =
          e.target.parentNode.previousElementSibling.lastChild.children[1]
            .textContent;
        ProjectsModel.checkBox(title, date);
        if (showChecked.checked) return;
        e.target.parentNode.parentNode.classList.toggle("taskCompleted");
        setTimeout(() => {
          toDoList.removeChild(e.target.parentNode.parentNode);
        }, 300);
      } else if (e.target.parentNode.classList.contains("fold-item")) {
        e.target.parentNode.style.display = "none";
        e.target.parentNode.previousElementSibling.style.display = "none";
      } else return;
    });
  };
  const getShowCheckedState = function () {
    return showChecked.checked;
  };
  const setShowCompleted = function (value) {
    showChecked.checked = value;
  };
  const getDarkModeState = function () {
    return darkModeSwitch.checked;
  };
  const setDarkMode = function (value) {
    darkModeSwitch.checked = value;
  };
  return {
    getShowCheckedState,
    setShowCompleted,
    getDarkModeState,
    setDarkMode,
    controlFlow,
    controlComplete,
  };
})();
