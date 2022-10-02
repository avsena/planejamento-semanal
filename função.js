//Atualiza a página automaticamente:
setInterval(() => {

    //Define horário "hora e minutos":
    var horaData = new Date();
 /* var dia = horaData.getDate();
    var mes = horaData.getMonth();
    var ano = horaData.getFullYear(); */

    function fix(digito) {
       if (digito < 10) {
          digito = "0" + digito
       }
       return digito;
    }

    document.querySelector('.relogio').innerHTML =
    (fix(horaData.getHours()) + ':' + fix(horaData.getMinutes()));

 //Define a data "dia, mes e ano":
    meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
    document.querySelector('.data').innerHTML = (fix(horaData.getDate()) + ' de ' + meses[horaData.getMonth()] + ' de ' + horaData.getFullYear());
 }, 1000);//segundos definidos para atualizar a página

 //função limpar input:
function clear() {
   addAtividade.value = "";
   addHora.value = "";
}

 // salvar localStorage:
 const planejamento = [] = JSON.parse(localStorage.getItem("planejar")) || [];

 var salvar = document.querySelector(".salvar");
 salvar.addEventListener("click", () => {
    localStorage();
 });

 //botão exclui localStorage:
var excluir = document.querySelector(".excluir");
excluir.addEventListener("click", () => {
    localStorage.removeItem();
});

//manipular o localStorage:
function saveLocalStorage() {
   localStorage.setItem()
}



//seção para adicionar atividade "input de atividade, dia e hora":
var addAtividade = document.querySelector(".adicionar-atividade");
var addDia = document.querySelector("dia-semana")
var addHora = document.querySelector('.add-hora')

addAtividade.addEventListener("submit", (e) => {
    e.preventDefault();
    var addAtividades = addAtividade.value;
    var addDias = addDia.value;
    var addHoras = addHora.value;
    clear();
    save(addAtividades, addDias, addHoras);
});
