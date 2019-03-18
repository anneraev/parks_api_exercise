const getPark = () => {
    return fetch("http://localhost:9099/parks")
    .then(response => response.json())
}

const logPark = () => {
    getPark().then(parsedParks => {
        console.table(parsedParks);
    })
}