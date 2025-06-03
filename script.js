let tentativas = 0;

function resposta(opcao) {
  if (opcao === 'sim') {
    alert("OOOOTREM BÃO! Me chama no zapzap para marcarmos de se encontrar minha flo 💃🕺");
    window.location.href = "https://wa.me/12996424566?text=Eaii%20lindão%20quando%20vamos%20nos%20encontrar??%20estou%20tremendamente%20apaixonada%20por%20você!";
  } else if (opcao === 'nao') {
    tentativas++;
    if (tentativas === 1) {
      alert("UAIII! Faz isso comigo não, sô!");
    } else if (tentativas === 2) {
      alert("Oxii muié oque há???");
    } else if (tentativas === 3) {
      alert("Que isso cumpadi, deixa de graça!🤨");
    } else if (tentativas >= 4) {
      alert("hmmm 2R$ ou um Sim misterioso?");
      const btnNao = document.getElementById('btn-nao');
      btnNao.style.display = 'none';
    }
  }
}
