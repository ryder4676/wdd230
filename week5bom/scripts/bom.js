const list = document.querySelector("ul");
const listInput = document.querySelector("input");
const Btn = document.querySelector("button");
Btn.addEventListener("click", () => {
    const myItem = listInput.value;
    listInput.value = "";
    if (myItem === "") {
        return;
    };
    const listItems = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItems.appendChild(listText);
    listText.textContent = myItem;
    listItems.appendChild(listBtn);
    listBtn.textContent = "X";
    list.appendChild(listItems);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItems);
    });


    listInput.focus();
});


const d = new Date();
document.getElementById("copyright").textContent = d.getFullYear(); // this gets the mm/dd/year
document.getElementById('modified').innerHTML = document.lastModified; //this gets the 00:00:00 time format