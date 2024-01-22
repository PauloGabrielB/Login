
async function login() {
    try {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = {email, senha}

    const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
        method: 'POST',
        body: JSON.stringify({usuario})
    }
    );

    const dados = await resposta.json();

    alert('Login bem sucedido');
 } catch (error) {
    alert('Erro ao logar');
 }
}

export default login;