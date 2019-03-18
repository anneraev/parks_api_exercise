console.log("eventManager working");

const createParksList = () => {
    //pases URL to API manager, then parses the information and performs functions for each item in the list.
    fetchFromAPi("http://localhost:9099/parks").then(parsedParks => {
        //for each item in the list returned from the fetch call.
        parsedParks.forEach(park => {
            console.log(park);
            //domManager function to return park attributes in HTML format and write it to the console.
            console.log(parkToHTML(park));
        })
    })
}