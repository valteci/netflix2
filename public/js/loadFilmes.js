const acesso_negado = `
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="/public/js/load.js"></script>
  <meta charset="UTF-8">
  <title>Acesso Não Autorizado</title>
  <link rel="stylesheet" href="/public/styles/load.css">
</head>
<body>
  <div class="unauthorized-wrapper">
    <h1>FAÇA <a href="http://192.168.25.133:8080/entrar">LOGIN<a> PARA ACESSAR ESSA PÁGINA OU <a href="http://192.168.25.133:8080/cadastrar">CADASTRE-SE<a></h1>
  </div>  
</body>
</html>`

function carregarPaginaAcessoNegado() {
  document.open();
  document.write(acesso_negado);
  document.close();
}

function buscarConteudo() {

    fetch('http://192.168.25.133:8080/conteudoFilmes_auth', {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
      },
    })
    .then(response => {
      if (!response.ok) {
        carregarPaginaAcessoNegado();
        setTimeout(() => {alert("você não tem autorização para acessar essa página")}, 1000);
        
          throw new Error('Não foi possível acessar a rota protegida');          
        }
      
        return response.text();        
    })
    .then(html => {
      document.open();
      document.write(html);
      document.close();
    })
    .catch(error => {
      carregarPaginaAcessoNegado();
      console.error('Erro ao acessar a rota protegida:', error);
    })
}


function main() {
  buscarConteudo();
}

main();