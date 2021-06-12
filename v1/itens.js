var add_input = document.getElementById("add_input");
var lista = document.getElementById("lista");

function add() {
    var elem = add_input.value;
    console.log(elem);

    if (elem == '') {
        console.log("vazio");        
    } else {
        console.log("ok");
        var item = document.createElement('li');//cria linha
        item.classList.add('linha');//add classe linha 
        item.innerText = elem;//muda conteudo
        
        item.setAttribute('id',elem);
    
        lista.appendChild(item);//add na lista
    } 

}


function excluir() {
    var item = document.getElementById(add_input.value);
    lista.removeChild(item);
}




function sortear() {
    var tamanho_da_lista = document.getElementsByTagName("li").length;
    var numer_aleatorio = Math.floor(Math.random() * ( tamanho_da_lista - 0)  + 0);
    var li_sorteado = document.getElementsByTagName("li")[numer_aleatorio];
    var resul = li_sorteado.textContent;

   localStorage.setItem('Ganhador',resul);
   window.open('resultado.html', '_blank');
}