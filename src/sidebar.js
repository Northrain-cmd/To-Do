export default (function sidebarToggle() {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".toggle-sidebar");
  const fold = document.getElementById("fold-sidebar");
  toggle.addEventListener("click", () => {
    sidebar.style.display = "flex";
    sidebar.classList.add("active");
  });
  fold.addEventListener("click", () => {
    sidebar.style.display = "none";
    sidebar.classList.remove("active");
  });
})();
