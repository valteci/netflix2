

function enviarFormulario(event) {
    event.preventDefault();
        
    const email = document.getElementById('inputEmail').value;
    const senha = document.getElementById('inputSenha').value;
    const confirmarSenha = document.getElementById('inputConfirmarSenha').value;

    if (senha !== confirmarSenha) {
        alert("Senhas não conferem!")
        return;
    }
        

    
    fetch('http://192.168.25.133:8080/Auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({            
            email: email,
            password: senha,
        })
        
    })
        .then(response => {
            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);
            
            return response.json();
        })
        .then(data => {
            window.location.href = 'http://192.168.25.133:8080/home';
        })
        .catch(error => {
            alert('Não foi possível fazer o cadastro!');
            console.error('Erro ao processar a resposta: ', error);
        });
}



function main() {
    document.getElementById('meuFormulario').addEventListener('submit', enviarFormulario);
}

main();