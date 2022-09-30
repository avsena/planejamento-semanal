{
    //alert("Olá");

    //função-data (DIA/MÊS/ANO)
    var horaData = new Date();
    var dia = horaData.getDate();
    var mes = horaData.getMonth();
    var ano = horaData.getFullYear();

    meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    //função-hora (HH:MM)
    var horas = horaData.getHours();
    var minutos = horaData.getMinutes();

    document.write(horas + ":" + minutos + "<br/>");//preciso aprender a conectar no id do HTML

    document.getElementById("data").innerHTML =//estou querendo conectar a data na class do html. A data some*/
    (document.write(dia + " de " + meses[mes] + " de " + ano));
}
