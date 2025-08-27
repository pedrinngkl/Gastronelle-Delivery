let qtd = 1;

function abrirModal(produto, desc, preco, img, restaurante, entrega, avaliacao) {
  document.getElementById('modal-titulo').innerText = produto;
  document.getElementById('modal-desc').innerText = desc;
  document.getElementById('modal-preco').innerText = preco;
  document.getElementById('modal-img').src = img;
  document.getElementById('modal-restaurante').innerText = restaurante;
  document.getElementById('modal-entrega').innerText = "Entrega: " + entrega;
  document.getElementById('modal-avaliacao').innerText = "Avaliação: " + avaliacao;
  document.getElementById('qtd').innerText = 1;
  qtd = 1;
  document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

function aumentarQtd() {
  qtd++;
  document.getElementById('qtd').innerText = qtd;
}

function diminuirQtd() {
  if (qtd > 1) {
    qtd--;
    document.getElementById('qtd').innerText = qtd;
  }
}

window.onclick = function(event) {
  let modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
