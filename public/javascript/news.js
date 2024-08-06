  // <,,,,,,,,,,Hamburger..........>
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

const activeLinks=document.getElementsByClassName("active-links");
const activeTabs=document.getElementsByClassName("active-tabs");
function opentab(classname){
for(let activelink of activeLinks){
    activelink.classList.remove("active-links");
}
for(let activetab of activeTabs){
    activetab.classList.remove("active-tabs");
}

event.currentTarget.classList.add('active-links');
document.getElementById(classname).classList.add('active-tabs');
}