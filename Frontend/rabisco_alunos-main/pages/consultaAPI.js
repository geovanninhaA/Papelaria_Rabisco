// Função para consultar a API
async function consultarAPI() {
    try {
      const pedido = await fetch('http://127.0.0.1:5000');
      const conversao = await pedido.json(); // converte em json a requisicao(pedido do js)
      console.log(conversao);
    } 
    catch (error) {
      console.error( error,'Erro ao consultar a API' );
    }
  }
window.onload = consultarAPI