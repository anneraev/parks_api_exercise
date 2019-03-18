console.log("domManager working");

//reference to the div object the domManager will append to.
const displayContainer = document.querySelector("#display-container");
console.log(displayContainer);
//reference ot the fragment that park information will be appended to, which, in turn, will be appended to the displayContainer.
const parkFragment = document.createDocumentFragment();

const parkToHTML = (park) => {
    return `
        <article>
            <h3>${park.name}</h3>
            <p>${park.state}</p>
        </article>
    `
}