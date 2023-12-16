const segundos = document.getElementById('segundos');
let timer = null;
let tempoTotal = 10;

function decrementarTempo() {
    tempoTotal -= 1;

    segundos.textContent = tempoTotal;

    if (tempoTotal <= 0) {
        clearInterval(timer);
        window.location.href = 'http://MEU_IP:3000/frontend/home';
    }

}

function main() {
        
    timer = setInterval(decrementarTempo, 1000);
}

main();