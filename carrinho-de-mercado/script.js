let carrinho = [];

function adicionarProduto(){

    let produto = document.getElementById("produto").value;
    // verifica se o produto não está vazio
    if (produto !== "") {
        carrinho.push(produto); //adiciona ao carrinho
        document.getElementById("produto").value = ""; //limpa o campo de texto
        exibirCarrinho(); //atualiza a lista do carrinho 
    } else{
        alert("por favor,insira um gibi.");
    }
}
// função de remover o produto
function removerProduto(index) {
    carrinho.splice(index, 1); //reomve o produto arrav
    exibirCarrinho(); //atuliza a lista do carrinho
}
function exibirCarrinho(){
    let lista = document.getElementById("listaCarrinho");
    lista.innerHTML = ""; //limpa a lista antes de atulizar
    carrinho.forEach(function(produto, index){
        lista.innerHTML += `<li>${produto}<button onclick="removerProduto(${index})">Remover</button></li>`
    });  
}