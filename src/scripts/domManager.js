console.log("domManager working");

//reference to the div object the domManager will append to.
const parksContainer = document.querySelector("#parks-container");
console.log("parks container", parksContainer);

//First attribute is the element to pass to, second is the HTML that will be added to the element.
const addToElement = (element, html) => {
    console.log("html to element", html);
    element.appendChild(html);
}

//creates an article section with a different tag based on whether or not the location as been vistied. First item passed is the HTML, the second item passed is the park, the visted attribute of which will be evaluated.
const parkVisitTag = (parkHTML, park) => {
    console.log("park visted", park.visited);
    const article = document.createElement("article");
    if (park.visited === true) {
        article.classList.add("park__visited")
    } else {
        article.classList.add("park__notVisted")
    }
    console.log("being passed to article", parkHTML);
    article.innerHTML = parkHTML;
    return article;
}

//returns park information arranged in HTML format for posting.
const parkToHTML = (park) => {
    return `
            <h3>${park.name}</h3>
            <p>${park.state}</p>
    `
}