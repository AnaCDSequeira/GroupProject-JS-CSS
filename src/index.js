const list = document.querySelectorAll(".mobile-nav-bar-item");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
  console.log("boo");
}
 
list.forEach((item) => item.addEventListener("click", activeLink));