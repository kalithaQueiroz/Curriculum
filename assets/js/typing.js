const el = document.querySelector("#typing");
const text = "Olá, eu sou Kálitha Queiroz";
const interval = 100;

function showText(el, text, interval) {

    const char = text.split("").reverse();
    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer);
        }
        const next = char.pop();

        el.innerHTML += next;

    }, interval);

}

showText(el,text, interval);