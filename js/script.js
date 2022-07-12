document.querySelector(".icon").addEventListener("click", generate_phrases)

 async function generate_phrases() {
    var url ="https://api.adviceslip.com/advice"
    const dados = await fetch(url)
    show_on_screen(await dados.json())
}

function show_on_screen (dados) {
    console.log(dados)
    var phrases = document.querySelector(".phrases")
    var title = document.querySelector(".title")
    phrases.innerHTML = `
            "${dados.slip.advice}"
    `
    title.innerHTML = `
            adivice #${dados.slip.id}
    `

}

