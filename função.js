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

//Variaveis criadas para usar ao longo do código: 
 const adicionarAtividade = document.getElementById('#adicionar-atividade');
 const addAtividade = document.getElementById('#add-atividade');
 const toDoday = document.getElementById('.semana');
 const hourInput = document.getElementById('#entrada-hora');
 const buttonRemoveAll = document.getElementById('.btn-excluir');
 const cardsPlanner = document.getElementById('.info');
 const buttonSaveLocalStorage = document.getElementById('.salvar-storage');
 const buttonCleanLocalStorage = document.getElementById('.excluir-storage');
 const buttonMonday = document.getElementById('segunda');
 const buttonTuesday = document.getElementById('terca');
 const buttonWednesday = document.getElementById('quarta');
 const buttonThursday = document.getElementById('quinta');
 const buttonFriday = document.getElementById('sexta');
 const buttonSaturday = document.getElementById('sabado');
 const buttonSunday = document.getElementById('domingo');
 
 const schedule = [] = JSON.parse(localStorage.getItem('toDo')) || [];
 
 let selectedDay = 'segunda';
 
 let filteredArray;

 
 function saveLocalStorage() { // LOCALSTORAGE
 
    localStorage.setItem('toDo', JSON.stringify(schedule));
 
 }
 
 function filter() {
 
    filteredArray = schedule.filter((item) => item.toDoday === selectedDay);
 
 }
 
 //essa função deleta sómente o card desejado:
 function deletCard(index) {
   
    schedule.splice(index, 1);
 
    saveLocalStorage()
 
    filter()
 
    renderSchedule(filteredArray);
 
 }
 
 //função pra empurrar os dados infomados: 
 function saveTodo(toDo, toDoday, hourTodo) {
 
    schedule.push({ toDo, toDoday, hourTodo });
 
    if(selectedDay) {
 
       filter()
  
       if(filteredArray.length >= 0) renderSchedule(filteredArray);
    }
     
 }
 
 filter()
 
 renderSchedule(filteredArray);
 
 //função para retornar os dados digitados 
 function renderSchedule(schedule) {
 
    cardsPlanner.innerHTML = '';
    
    schedule.sort(function (a,b) {
       if(a.hourTodo < b.hourTodo) { 
          return -1;
       }else {
          return true;
       }
    });
  
    for (let index = 0; index < schedule.length; index++) {
 
       const item = schedule[index]
 
       const toDoCard = document.createElement('li');
       toDoCard.classList.add('cards__planner-item');
     
       const toDoHour = document.createElement('div');
       toDoHour.classList.add('cards__planner-hour');
       toDoHour.classList.add(item.toDoday);
 
       const toDoTextHour = document.createElement('h1');
       toDoTextHour.innerHTML = item.hourTodo.replace(':', 'h')+'m';
 
       toDoCard.appendChild(toDoHour);
       toDoHour.appendChild(toDoTextHour);
 
       const toDoActivity = document.createElement('div');
       toDoActivity.classList.add('cards__planner-task');
       toDoActivity.classList.add(item.toDoday + 'Before')
 
       const toDoTextActivity = document.createElement('p');
       toDoTextActivity.classList.add('cards__planner-task-text')
       toDoTextActivity.innerHTML = item.toDo;
 
       const toDoActivityRemove = document.createElement('button');
       toDoActivityRemove.classList.add('cards__planner-task-button');
       toDoActivityRemove.innerText = 'Apagar';
       toDoActivityRemove.setAttribute('onclick', `deletCard(${schedule.indexOf(toDoday)})`);
 
       toDoCard.appendChild(toDoActivity);
       toDoActivity.appendChild(toDoTextActivity);
       toDoActivity.appendChild(toDoActivityRemove);
 
       cardsPlanner.appendChild(toDoCard);
       
    }
 }
 
 adicionarAtividade.addEventListener('submit', (e) => {
 
    e.preventDefault();
 
    const inputValue = addAtividade.value;
    const toDodayValue = toDoday.value;
    const hourInputValue = hourInput.value;
    // clear();
    saveTodo(inputValue, toDodayValue, hourInputValue);
   
 })
 
 buttonRemoveAll.addEventListener('click', () => { 
    if(selectedDay) {
       schedule.splice(schedule.findIndex(e => 
          e.toDoday === selectedDay));
          saveLocalStorage()
          renderSchedule();
    }else {
       alert('Não há nenhum dia selecionado para excluir.');
    }
 })
 
 //salvar no localstorage 
 buttonSaveLocalStorage.addEventListener('click', () => {
    saveLocalStorage();
 })
 
 buttonCleanLocalStorage.addEventListener('click', () => { // CLEAR LOCALSTORAGE
    localStorage.removeItem('toDo');
    schedule.length = 0;
    renderSchedule(schedule);
 })
 
 
 //BUTTONS DAYS
 
 buttonMonday.addEventListener('click', () => {
 
    selectedDay = 'segunda';
 
    filter()
    renderSchedule(filteredArray);
 
 
 })
 
 buttonTuesday.addEventListener('click', () => {
 
    selectedDay = 'terca';
    filter()
    renderSchedule(filteredArray);
 
 })
 
 buttonWednesday.addEventListener('click', () => {
 
    selectedDay = 'quarta'
 
    filter()
    renderSchedule(filteredArray);
 
 })
 
 buttonThursday.addEventListener('click', () => {
 
    selectedDay = 'quinta'
 
    filter()
    renderSchedule(filteredArray);
    
 })
 
 buttonFriday.addEventListener('click', () => {
 
    selectedDay = 'sexta'
 
    filter()
    renderSchedule(filteredArray);
   
 })
 
 buttonSaturday.addEventListener('click', () => {
 
    selectedDay = 'sabado'
 
    filter()
    renderSchedule(filteredArray);
   
 })
 
 buttonSunday.addEventListener('click', () => {
 
    selectedDay = 'domingo'
 
    filter()
    renderSchedule(filteredArray);
  
 })
 
 // MENU ACTIVE 
 
 $(document).ready(function() {
     $('.sel-dia-semana-item').on('click', 
     function() {
         $(this).siblings().removeClass('active');
         $(this).addClass('active');
     })
 })
