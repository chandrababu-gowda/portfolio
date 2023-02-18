let ham = document.querySelector(".hamburger");
let navLink = document.querySelector(".button");

ham.addEventListener("click", () => {
  if (navLink.classList.contains("hidden")) {
    navLink.classList.remove("hidden");
  } else {
    navLink.classList.add("hidden");
  }
});
