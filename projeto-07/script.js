//MENSAGEM DE ERRO
function mensagem () {

    /*erro*/ 
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

}

// Seleção de elementos

const todoFormulario = document.querySelector("#formulario");
const nascimento = document.querySelector("#nome");
const contato = document.querySelector("#telefone");
const email = document.querySelector("#email");
const cep = document.querySelector("#cep");
const endereco = document.querySelector("#endereco");
const numero = document.querySelector("#numero");
const complemento = document.querySelector("#complemento");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const uf = document.querySelector("#estado");

// Verificar se estpa vazio - função
todoFormulario.addEventListener("submit", (event) => {
event.preventDefault();


if (nascimento.value === "")
    alert("Por favor, preencha corretamente")
   return; //para n continuar a função

if (contato.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

if (email.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

if (cep.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

if (endereco.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

if (numero.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

if (complemento.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

if (bairro.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

if (cidade.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

if (uf.value === "")
    alert("Por favor, preencha corretamente")
    return; //para n continuar a função

// Se todos os campos estiverem corretamente preenchidos. envie o form
    todoFormulario.submit();

})
/**/ 