window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://gavinazureresume.azurewebsites.net/api/GetResumeCounter?code=HDSTEXueoITmydDuCQuTmA_xNKIguQ2CU0hRCkmOd_u_AzFu7KEo7A==';
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
