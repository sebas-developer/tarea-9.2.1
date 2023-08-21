document.addEventListener('DOMContentLoaded', () => {
    let datoMostrado = localStorage.getItem("dato");

    document.querySelector('#data').innerHTML = datoMostrado;
})