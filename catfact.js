const userAction = async () => {
    const response = await fetch("https://catfact.ninja/fact")
    const myJson = await response.json();
    console.log(myJson)
    document.getElementById('opinion').innerHTML = "Fact: " + myJson.fact
    document.getElementById('opinion2').innerHTML = "Length: " + myJson.length
}

userAction()