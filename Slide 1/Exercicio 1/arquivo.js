function mostrarDataHora() {
    var dataHora = new Date();
    var data = dataHora.toLocaleDateString();
    var hora = dataHora.toLocaleTimeString();

    document.getElementById("dataHora").innerHTML = "Data: " + data + "<br>Hora: " + hora;
}
