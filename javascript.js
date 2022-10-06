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

    document.querySelector(".relogio").innerHTML =
        (fix(horaData.getHours()) + ":" + fix(horaData.getMinutes()));

    //Define a data "dia, mes e ano":
    meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    document.querySelector(".data").innerHTML = (fix(horaData.getDate()) + " de " + meses[horaData.getMonth()] + " de " + horaData.getFullYear());
}, 1000);//segundos definidos para atualizar a página

//valores das variáveis: de atividade, localStorage e horário:
var escreverAtividade = document.getElementById("escrever-atividade");//primeira adicição
var selecionarDiaSemana = document.getElementById("selecionar-dia-semana");//segunda adição
var addHorario = document.getElementById("entrada-hora");//terceira adição
var adicionarAtividades = document.getElementById("submitEvento");//botão de adicionar evento (atividade, dia da semana e hora)
var delAtividade = document.getElementById("deletar-todas-atividades-btn");//botao excluir todos
var cardElementoAtividade = document.getElementById("cardElementoDeAtividades");
var salvarLocalStorage = document.getElementById("salvar-local-storage");//botao de salvar localStorage
var excluirLocalStorage = document.getElementById("excluir-local-storage");//botao de excluir localStorage
//dias da semana:
const segundaFeira = document.getElementById('segunda');
const tercaFeira = document.getElementById('terca');
const quartaFeira = document.getElementById('quarta');
const quintaFeira = document.getElementById('quinta');
const sextaFeira = document.getElementById('sexta');
const sabadoFim = document.getElementById('sabado');
const domingoFim = document.getElementById('domingo');

const mondayDiv = document.querySelector("#cardsMo");
const tuesdayDiv = document.querySelector("#cardsTu");
const wednesdayDiv = document.querySelector("#cardsWe");
const thursdayDiv = document.querySelector("#cardsTh");
const fridayDiv = document.querySelector("#cardsFr");
const saturdayDiv = document.querySelector("#cardsSa");
const sundayDiv = document.querySelector("#cardsSu");

//criando as funções dos botões
//1 - adicionar atividade
const lista = [];

secao.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputAtividade = escreverAtividade.value;
    const inputDia = selecionarDiaSemana.value;
    const inputHora = addHorario.value;
    clear();

    if (!inputAtividade) {
        alert("Digite a atividade!");
        return;
    }
//funções segunda-feira
    if (inputDia == "Segunda-feira") {
        const cardElemento = document.createElement("div");
        cardElemento.classList.add("inputAtividade");

        const horario = document.createElement("div");
        horario.classList.add("horarios");
        horario.classList.add("segunda");
        horario.innerText = inputHora;

        const caixaTexto = document.createElement("div");
        caixaTexto.classList.add("caixaTexto");
        caixaTexto.classList.add("segunda");

        const conteudo = document.createElement("div");
        conteudo.classList.add("conteudo");
        conteudo.innerText = inputAtividade;

        const btn_remove_div = document.createElement("div");
        btn_remove_div.classList.add("btn-remove");

        const btn_remove = document.createElement("button");
        btn_remove.classList.add("btn-default");
        btn_remove.classList.add("red");
        btn_remove.classList.add("remove");
        btn_remove.innerText = "Apagar";

        cardElemento.appendChild(horario);
        cardElemento.appendChild(caixaTexto);
        cardElemento.appendChild(conteudo);
        btn_remove_div.appendChild(btn_remove);
        cardElemento.appendChild(btn_remove_div);
        mondayDiv.appendChild(card_el);

        btn_remove.addEventListener("click", () => {
            mondayDiv.removeChild(card_el);
        });
        
//funções terça-feira:
        if (inputDia == "Terça-feira") {
            const cardElemento = document.createElement("div");
            cardElemento.classList.add("inputAtividade");
    
            const horario = document.createElement("div");
            horario.classList.add("horarios");
            horario.classList.add("terca");
            horario.innerText = inputHora;
    
            const caixaTexto = document.createElement("div");
            caixaTexto.classList.add("caixaTexto");
            caixaTexto.classList.add("terca");
    
            const conteudo = document.createElement("div");
            conteudo.classList.add("conteudo");
            conteudo.innerText = inputAtividade;
    
            const btn_remove_div = document.createElement("div");
            btn_remove_div.classList.add("btn-remove");
    
            const btn_remove = document.createElement("button");
            btn_remove.classList.add("btn-default");
            btn_remove.classList.add("red");
            btn_remove.classList.add("remove");
            btn_remove.innerText = "Apagar";
    
            cardElemento.appendChild(horario);
            cardElemento.appendChild(caixaTexto);
            cardElemento.appendChild(conteudo);
            btn_remove_div.appendChild(btn_remove);
            cardElemento.appendChild(btn_remove_div);
            tuesdayDiv.appendChild(card_el);
    
            btn_remove.addEventListener("click", () => {
                tuesdayDiv.removeChild(card_el);
            });

//quarta-feira:
if (inputDia == "Quarta-feira") {
    const cardElemento = document.createElement("div");
    cardElemento.classList.add("inputAtividade");

    const horario = document.createElement("div");
    horario.classList.add("horarios");
    horario.classList.add("quarta");
    horario.innerText = inputHora;

    const caixaTexto = document.createElement("div");
    caixaTexto.classList.add("caixaTexto");
    caixaTexto.classList.add("quarta");

    const conteudo = document.createElement("div");
    conteudo.classList.add("conteudo");
    conteudo.innerText = inputAtividade;

    const btn_remove_div = document.createElement("div");
    btn_remove_div.classList.add("btn-remove");

    const btn_remove = document.createElement("button");
    btn_remove.classList.add("btn-default");
    btn_remove.classList.add("red");
    btn_remove.classList.add("remove");
    btn_remove.innerText = "Apagar";

    cardElemento.appendChild(horario);
    cardElemento.appendChild(caixaTexto);
    cardElemento.appendChild(conteudo);
    btn_remove_div.appendChild(btn_remove);
    cardElemento.appendChild(btn_remove_div);
    wednesdayDiv.appendChild(card_el);

    btn_remove.addEventListener("click", () => {
        wednesdayDiv.removeChild(card_el);
    });

    if (inputDia == "Quinta-feira") {
        const cardElemento = document.createElement("div");
        cardElemento.classList.add("inputAtividade");

        const horario = document.createElement("div");
        horario.classList.add("horarios");
        horario.classList.add("quinta");
        horario.innerText = inputHora;

        const caixaTexto = document.createElement("div");
        caixaTexto.classList.add("caixaTexto");
        caixaTexto.classList.add("quinta");

        const conteudo = document.createElement("div");
        conteudo.classList.add("conteudo");
        conteudo.innerText = inputAtividade;

        const btn_remove_div = document.createElement("div");
        btn_remove_div.classList.add("btn-remove");

        const btn_remove = document.createElement("button");
        btn_remove.classList.add("btn-default");
        btn_remove.classList.add("red");
        btn_remove.classList.add("remove");
        btn_remove.innerText = "Apagar";

        cardElemento.appendChild(horario);
        cardElemento.appendChild(caixaTexto);
        cardElemento.appendChild(conteudo);
        btn_remove_div.appendChild(btn_remove);
        cardElemento.appendChild(btn_remove_div);
        thursdayDiv.appendChild(card_el);

        btn_remove.addEventListener("click", () => {
            thursdayDiv.removeChild(card_el);
        });

//sexta:
if (inputDia == "Sexta-feira") {
    const cardElemento = document.createElement("div");
    cardElemento.classList.add("inputAtividade");

    const horario = document.createElement("div");
    horario.classList.add("horarios");
    horario.classList.add("sexta");
    horario.innerText = inputHora;

    const caixaTexto = document.createElement("div");
    caixaTexto.classList.add("caixaTexto");
    caixaTexto.classList.add("sexta");

    const conteudo = document.createElement("div");
    conteudo.classList.add("conteudo");
    conteudo.innerText = inputAtividade;

    const btn_remove_div = document.createElement("div");
    btn_remove_div.classList.add("btn-remove");

    const btn_remove = document.createElement("button");
    btn_remove.classList.add("btn-default");
    btn_remove.classList.add("red");
    btn_remove.classList.add("remove");
    btn_remove.innerText = "Apagar";

    cardElemento.appendChild(horario);
    cardElemento.appendChild(caixaTexto);
    cardElemento.appendChild(conteudo);
    btn_remove_div.appendChild(btn_remove);
    cardElemento.appendChild(btn_remove_div);
    fridayDiv.appendChild(card_el);

    btn_remove.addEventListener("click", () => {
        fridayDiv.removeChild(card_el);
    });

//sabado:
if (inputDia == "Sábado") {
    const cardElemento = document.createElement("div");
    cardElemento.classList.add("inputAtividade");

    const horario = document.createElement("div");
    horario.classList.add("horarios");
    horario.classList.add("sabado");
    horario.innerText = inputHora;

    const caixaTexto = document.createElement("div");
    caixaTexto.classList.add("caixaTexto");
    caixaTexto.classList.add("sabado");

    const conteudo = document.createElement("div");
    conteudo.classList.add("conteudo");
    conteudo.innerText = inputAtividade;

    const btn_remove_div = document.createElement("div");
    btn_remove_div.classList.add("btn-remove");

    const btn_remove = document.createElement("button");
    btn_remove.classList.add("btn-default");
    btn_remove.classList.add("red");
    btn_remove.classList.add("remove");
    btn_remove.innerText = "Apagar";

    cardElemento.appendChild(horario);
    cardElemento.appendChild(caixaTexto);
    cardElemento.appendChild(conteudo);
    btn_remove_div.appendChild(btn_remove);
    cardElemento.appendChild(btn_remove_div);
    saturdayDiv.appendChild(card_el);

    btn_remove.addEventListener("click", () => {
        saturdayDiv.removeChild(card_el);
    });

//domingo:
if (inputDia == "Domingo") {
    const cardElemento = document.createElement("div");
    cardElemento.classList.add("inputAtividade");

    const horario = document.createElement("div");
    horario.classList.add("horarios");
    horario.classList.add("domingo");
    horario.innerText = inputHora;

    const caixaTexto = document.createElement("div");
    caixaTexto.classList.add("caixaTexto");
    caixaTexto.classList.add("domingo");

    const conteudo = document.createElement("div");
    conteudo.classList.add("conteudo");
    conteudo.innerText = inputAtividade;

    const btn_remove_div = document.createElement("div");
    btn_remove_div.classList.add("btn-remove");

    const btn_remove = document.createElement("button");
    btn_remove.classList.add("btn-default");
    btn_remove.classList.add("red");
    btn_remove.classList.add("remove");
    btn_remove.innerText = "Apagar";

    cardElemento.appendChild(horario);
    cardElemento.appendChild(caixaTexto);
    cardElemento.appendChild(conteudo);
    btn_remove_div.appendChild(btn_remove);
    cardElemento.appendChild(btn_remove_div);
    sundayDiv.appendChild(card_el);

    btn_remove.addEventListener("click", () => {
        sundayDiv.removeChild(card_el);
    });

    var diaSegunda = document.querySelector('#segunda');
    var diaTerca = document.querySelector('#terca');
    var diaQuarta = document.querySelector('#quarta');
    var diaQuinta = document.querySelector('#quinta');
    var diaSexta = document.querySelector('#sexta');
    var diaSabado = document.querySelector('#sabado');
    var diaDomingo = document.querySelector('#domingo');

    const setLocalSegunda = (lsSegunda) => {localStorage.setItem('lsSegunda', JSON.stringify(lsSegunda))}//Joga os dados dentro da chave no localStorage passando como uma string de objetos.
    const setLocalTerca = (lsTerca) => {localStorage.setItem('lsTerca', JSON.stringify(lsTerca))}
    const setLocalQuarta = (lsQuarta) => {localStorage.setItem('lsQuarta', JSON.stringify(lsQuarta))}
    const setLocalQuinta = (lsQuinta) => {localStorage.setItem('lsQuinta', JSON.stringify(lsQuinta))}
    const setLocalSexta = (lsSexta) => {localStorage.setItem('lsSexta', JSON.stringify(lsSexta))}
    const setLocalSabado = (lsSabado) => {localStorage.setItem('lsSabado', JSON.stringify(lsSabado))}
    const setLocalDomingo = (lsDomingo) => {localStorage.setItem('lsDomingo', JSON.stringify(lsDomingo))}

    var lsSegunda = getLocalSegunda();
    var lsTerca = getLocalTerca();
    var lsQuarta = getLocalQuarta();
    var lsQuinta = getLocalQuinta();
    var lsSexta = getLocalSexta();
    var lsSabado = getLocalSabado();
    var lsDomingo = getLocalDomingo();


//exibir atividade:
const ExibirAtividade = (inputDia) =>{
    if(inputDia == 'Segunda-Feira'){
      atividadeSegunda()
    }
    else if(inputDia == 'Terça-Feira'){
      atividadeTerca()
    }
    else if(inputDia == 'Quarta-Feira'){
      atividadeQuarta()
    }
    else if(inputDia == 'Quinta-Feira'){
      atividadeQuinta()
    }
    else if(inputDia == 'Sexta-Feira'){
      atividadeSexta()
    }
    else if(inputDia == 'Sábado'){
      atividadeSabado()
    }
    else if(inputDia == 'Domingo'){
      atividadeDomingo()
    }
  }

//inputs:
function adicionarAtividades(descricao, hora, dia){
    if(dia == 'Segunda-Feira'){
      lsSegunda.push({atividade: descricao, horaAtividade: hora, cor: '#FFA246', dia: dia})
    }else if(dia == 'Terça-Feira'){
      lsTerca.push({atividade: descricao, horaAtividade: hora, cor: '#35E185', dia: dia})
    }
    else if(dia == 'Quarta-Feira'){
      lsQuarta.push({atividade: descricao, horaAtividade: hora, cor: '#6688FF', dia: dia})
    }
    else if(dia == 'Quinta-Feira'){
      lsQuinta.push({atividade: descricao, horaAtividade: hora, cor: '#B266FF', dia: dia})
    }
    else if(dia == 'Sexta-Feira'){
      lsSexta.push({atividade: descricao, horaAtividade: hora, cor: '#66D1FF', dia: dia})
    }
    else if(dia == 'Sábado'){
      lsSabado.push({atividade: descricao, horaAtividade: hora, cor: '#FF66D4', dia: dia})
    }
    else if(dia == "Domingo") {
      lsDomingo.push({atividade: descricao, horaAtividade: hora, cor: '#FF6666', dia: dia})
    }
  }

  const achaItem = (item, banco) => {
    if(item.classList[0] == 'btn-excluir'){
      let index = parseInt(item.value)
      if(index == 0){
        banco.shift()
      }else{
        banco.splice(banco.indexOf(index), 1);
      }
    }
  }

  //função deletar atividade:
  const deletarAtividade = (e) => {
    let item = e.target
    if(segunda){
      achaItem(item, lsSegunda)
      setLocalSegunda(lsSegunda)
      atividadeSegunda()
    }
    if(terca){
      achaItem(item, lsTerca)
      setLocalTerca(lsTerca)
      atividadeTerca()
    }
    if(quarta){
      achaItem(item, lsQuarta)
      setLocalQuarta(lsQuarta)
      atividadeQuarta()
    }
    if(quinta){
      achaItem(item, lsQuinta)
      setLocalQuinta(lsQuinta)
      atividadeQuinta()
    }
    if(sexta){
      achaItem(item, lsSexta)
      setLocalSexta(lsSexta)
      atividadeSexta()
    }
    if(sabado){
      achaItem(item, lsSabado)
      setLocalSabado(lsSabado)
      atividadeSabado()
    }
    if(domingo){
      achaItem(item, lsDomingo)
      setLocalDomingo(lsDomingo)
      atividadeDomingo()
    }
  }

  //salvar localStorage:
  function salvarStorage() {
    localStorage.setItem();
 }

 //funcão excluir tudo:
 function deleteLocalStorage() {
    localStorage.clear();
  }

//ações de todos os botões (adicionar, clicar, deletar)
addAtividade.addEventListener("click", adicionarAtividades);
segundaFeira.addEventListener("click", atividadeSegunda);
tercaFeira.addEventListener("click", atividadeTerca);
quartaFeira.addEventListener("click", atividadeQuarta);
quintaFeira.addEventListener("click", atividadeQuinta);
sextaFeira.addEventListener("click", atividadeSexta);
sabadoFim.addEventListener("click", atividadeSabado);
domingoFim.addEventListener("click", atividadeDomingo);
delAtividade.addEventListener("click", deletarAtividade);
excluirLocalStorage.addEventListener("click", deleteLocalStorage);
salvarLocalStorage.addEventListener("click", salvarStorage)
