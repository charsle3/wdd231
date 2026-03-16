const navButton = document.querySelector("#ham-btn");

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const navBar = document.querySelector("#nav-bar");

const home = document.querySelector('#homelink');
const discover = document.querySelector('#discoverlink');
const directory = document.querySelector('#directorylink');
const join = document.querySelector('#joinlink');

home.addEventListener('click', () => {
    home.classList.add("current");
    discover.classList.remove("current");
    directory.classList.remove("current");
    join.classList.remove("current");
});

discover.addEventListener('click', () => {
    home.classList.remove("current");
    discover.classList.add("current");
    directory.classList.remove("current");
    join.classList.remove("current");
});

directory.addEventListener('click', () => {
    home.classList.remove("current");
    discover.classList.remove("current");
    directory.classList.add("current");
    join.classList.remove("current");
});

join.addEventListener('click', () => {
    home.classList.remove("current");
    discover.classList.remove("current");
    directory.classList.remove("current");
    join.classList.add("current");
});