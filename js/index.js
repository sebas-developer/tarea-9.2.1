document.querySelector("#buttonText").addEventListener('click', () => {
    let input = document.querySelector("#inputText").value
    localStorage.setItem("dato", input)
})