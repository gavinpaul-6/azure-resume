window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterv2.azurewebsites.net/api/GetResumeCounter?code=sNAXhZRe16alQ71J1fQ5rDeYElWIuC4HPlHQUZ1Yj3UxAzFuwrkwbw==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
         console.log(error);
    });
    return count;
}