console.log("eventManager working");

const createParksList = () => {
    //parksContainer is defined in the domManager and referenced here so that its HTML can be erased when needed, and a new document fragment containing a new parksList can be appneded easily.
    parksContainer.innerHTML = "";
    //
    parksList = document.createElement("div");
    parksList.classList.add("results__list");
    //reference ot the fragment that park information will be appended to, which, in turn, will be appended to the parksBox.
    const parksFragment = document.createDocumentFragment();
    //pases URL to API manager, then parses the information and performs functions for each item in the list.
    fetchFromAPi("http://localhost:9099/parks").then(parsedParks => {
        //for each item in the list returned from the fetch call.
        parsedParks.forEach(park => {
            console.log("park object",park);
            //wraps HTML in an article with a tag depending on whether or not the park has beem visted. First item is the function that builds the HTML and returns it to be passed, the second is the park that is being evaluated.
            parkVistedHTML = parkVisitTag(parkToHTML(park), park);
            //Dom manager. First attribute is the fragment to pass to, second is the HTML that will be added to the fragment.
            addToElement(parksList, parkVistedHTML);
        })
        //appends List to fragment, then append fragment to the parks container.
        parksFragment.appendChild(parksList);
        parksContainer.appendChild(parksFragment);
    })
}