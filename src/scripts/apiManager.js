console.log("apiManger working");

const fetchFromAPi = (api) => {
    return fetch(api)
    .then(response => response.json())
}