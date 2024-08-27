const navBar = document.getElementById("nav-bar");
const openMenu = document.getElementById("openmenu");
const closeMenu = document.getElementById("closemenu");

openMenu.addEventListener("click", () => {
  if (navBar.style.right == "-400px") {
    navBar.style.right = "0";
  } else {
    navBar.style.right = "-400px";
  }
});

closeMenu.addEventListener("click", () => {
  if (navBar.style.right == "0") {
     navBar.style.right = "-400px";
  } else {
    navBar.style.right = "-400px";
  }
});
