window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterv2.azurewebsites.net/api/GetResumeCounter?code=sNAXhZRe16alQ71J1fQ5rDeYElWIuC4HPlHQUZ1Yj3UxAzFuwrkwbw==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    fetch(functionApiUrl)
        .then(response => response.json())
        .then(response => {
            console.log("Website called function API.");
            const count = response.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log(error);
        });
}
