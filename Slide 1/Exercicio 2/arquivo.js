function getHoraAtual() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();
    return `${hora}:${minutos}:${segundos}`;
  }
  
  function mostrarHora() {
    const horaAtual = getHoraAtual();
    document.getElementById('horaAtual').textContent = horaAtual;
  }
  
  document.getElementById('meuLink').addEventListener('mouseover', mostrarHora);
  
  document.getElementById('meuLink').addEventListener('click', function() {
    alert('Você clicou no link!');
  });
  