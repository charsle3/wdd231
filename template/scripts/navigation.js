const navButton = document.querySelector("#ham-btn");

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const navBar = document.querySelector("#nav-bar");

// Make sure to change the ID's and variable names for the following code.

const home = document.querySelector('#homelink');
const chamber = document.querySelector('#chamberlink');
const final = document.querySelector('#finallink');

home.addEventListener('click', () => {
    home.classList.add("current");
    chamber.classList.remove("current");
    final.classList.remove("current");
});

chamber.addEventListener('click', () => {
    chamber.classList.add("current");
    home.classList.remove("current");
    final.classList.remove("current");
});

final.addEventListener('click', () => {
    final.classList.add("current");
    chamber.classList.remove("current");
    home.classList.remove("current");
});