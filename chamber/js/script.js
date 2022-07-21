
const x = document.querySelector("hamburgerBtn");
function toggleMenu() {
    document.querySelector("primaryNav").classList.toggle("open");
    document.querySelector("hamburgerBtn").classList.toggle("open");
}

x.addEventListener("click", toggleMenu);

const d = new Date();
//console.log(d)
//const dayDate = d.getDate();
//const month = d.getMonth();
// const year = d.getFullYear();
// const hours = d.getHours();
// const minutes = d.getMinutes();
// const seconds = d.getSeconds();
// const fulldate = `${month}/${dayDate}/${year}`;
document.getElementById("currentdate").textContent = d.toLocaleDateString("en-us", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', });
document.getElementById("copyright").textContent = d.getFullYear(); // this gets the mm/dd/year
document.getElementById('modified').innerHTML = document.lastModified;
