console.log("eventManager working");

const logParksList = () => {
    fetchFromAPi("http://localhost:9099/parks").then(parsedParks => {
        parsedParks.forEach(park => {
            console.log(park);
        })
    })
}