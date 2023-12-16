function redirecionarParaPaginaEntrar() {
    window.location.href = 'http://192.168.25.133:8080/entrar';
}

function redirecionarParaPaginaCadastrar() {
    window.location.href = 'http://192.168.25.133:8080/cadastrar';
}

function redirecionarParaPaginaTrailerJogos() {
    window.location.href = 'http://192.168.25.133:8080/trailerJogos';
}

function redirecionarParaPaginaTrailerFilmes() {
    window.location.href = 'http://192.168.25.133:8080/trailerFilmes';
}

async function main() {
    try {
        const jwt = localStorage.getItem('access_token');
        const resposta = await fetch('http://192.168.25.133:8080/me', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        if (resposta.status === 401)
            document.getElementById('userName').textContent = 'Guest';
        else {
            const user = await resposta.json(); //pegue o email
            console.log(user); // [Object Object]
            document.getElementById('userName').textContent = user.email;
        }
        
        

    } catch(error) {
        console.log(error.message);
        alert(error.message);
    }
}

main();
