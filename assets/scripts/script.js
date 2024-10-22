console.log("hello!");

mynav = document.getElementById("sidenav");
openbtn = document.getElementById("burger-icon");

openbtn.addEventListener("click", function () {
  mynav.classList.toggle("show");
});
