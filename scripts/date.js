const d = new Date();
// //console.log(d)
// const dayDate = d.getDate();
// const month = d.getMonth();
// const year = d.getFullYear();
// const hours = d.getHours();
// const minutes = d.getMinutes();
// const seconds = d.getSeconds();
// const fulldate = `${month}/${dayDate}/${year}`;
document.getElementById("copyright").textContent = d.getFullYear(); // this gets the mm/dd/year
document.getElementById('modified').innerHTML = document.lastModified; //this gets the 00:00:00 time format