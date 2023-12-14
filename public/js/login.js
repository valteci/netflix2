


function signin(evento) {
    
    evento.preventDefault();

    const txtEmail = document.getElementById('inputEmail');
    const txtSenha = document.getElementById('inputSenha');

    const email = txtEmail.value;
    const senha = txtSenha.value;

    if (senha === '') {
        alert('Preencha Sua Senha!');
        return;
    }

    if (email === '') {
        alert('Preencha Seu Email!');
        return;
    }

    
    fetch('http://192.168.25.133:3000/Auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: senha
        })
        
    })
        .then(response => {
            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);
            
            return response.json();
        })
        .then(jwt => {
            localStorage.setItem('access_token', jwt.access_token);
            window.location.href = "http://192.168.25.133:3000/frontend/conteudo";
        })
        .catch(error => {
            console.error('Erro ao processar a resposta: ', error);
            alert('Email ou Senha incorretos');
        });
    
}

function main() {

    const formLogin = document.getElementById('formLogin');

    formLogin.addEventListener('submit', function (evento) {
        signin(evento);
    });

}

main();