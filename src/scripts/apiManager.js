console.log("apiManager working");

//fetches information from the .json URL passed to it.
const fetchFromAPi = (api) => {
    return fetch(api)
    .then(response => response.json())
}