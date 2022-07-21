let templesList = [];

const output = (temples) => {
    temples.forEach(
        temple => {

            let article = document.createElement("article");
            let templeName = document.createElement("h3");
            templeName.textContent = temple.templeName;
            let location = document.createElement("h4");
            location.textContent = temple.location;
            let dedicated = document.createElement("h4");
            dedicated.textContent = temple.dedicated;
            let img = document.createElement("img");
            img.setAttribute("src", temple.templePic);
            img.setAttribute("alt", temple.templeName);

            article.appendChild(templeName);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(img);

            document.querySelector("#temples").appendChild(article);
        })
};

const url = /*"json/temples.json"; */"https://byui-cse.github.io/cse121b-course/templeinn/json/temples.json"


let results = null;

async function getTemples() {
    const response = await fetch(url);
    templesList = await response.json();
    output(templesList);

};
getTemples();

const reset = () => {
    document.querySelector("#temples").innerHTML = "";
};


function sortBy(e) {
    // - Calls the reset function
    reset();

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    let sort = document.querySelector('sortBy');


    if (e.target.value === 'templeNameAscending') {
        let sorted = templesList.sort(function (a, b) { return a.templeName > b.templeName ? 1 : -1 });

        return output(sorted);

    } else if (e.target.value === 'templeNameDescending') {
        let sorted = templesList.sort(function (a, b) { return b.templeName > a.templeName ? 1 : -1 });

        return output(sorted);
    };

};

document.querySelector("#sortBy").addEventListener("change", sortBy);
