let questoesFiltradas = [];
let paginaAtual = 1;
const questoesPorPagina = 10;

// Função para carregar o dropdown de assuntos
function carregarDropdown() {
  const dropdown = document.getElementById('assunto');
  const assuntos = questoesData.map(assuntoObj => assuntoObj.assunto);
  dropdown.innerHTML = '<option value="">Selecione um assunto</option>';
  assuntos.forEach(assunto => {
    const option = document.createElement('option');
    option.value = assunto;
    option.textContent = assunto;
    dropdown.appendChild(option);
  });
}

// Função para carregar as questões com paginação
function carregarQuestoes(assunto = '', palavraChave = '') {
  // Filtrando as questões por assunto e palavra-chave
  questoesFiltradas = [];
  questoesData.forEach(assuntoObj => {
    if (assunto === '' || assuntoObj.assunto === assunto) {
      assuntoObj.questoes.forEach(questao => {
        if (
          palavraChave === '' || 
          questao.pergunta.toLowerCase().includes(palavraChave.toLowerCase()) ||
          (questao.resolucao && questao.resolucao.toLowerCase().includes(palavraChave.toLowerCase()))
        ) {
          questoesFiltradas.push({ ...questao, assunto: assuntoObj.assunto });
        }
      });
    }
  });
  
  mostrarQuestoes();
}

// Função para mostrar as questões paginadas
function mostrarQuestoes() {
  const questoesSection = document.getElementById('questoes-section');
  const startIndex = (paginaAtual - 1) * questoesPorPagina;
  const endIndex = startIndex + questoesPorPagina;
  const questoesPagina = questoesFiltradas.slice(startIndex, endIndex);

  questoesSection.innerHTML = '';
  
  if (questoesPagina.length === 0) {
    questoesSection.innerHTML = '<p>Nenhuma questão encontrada.</p>';
    return;
  }

  questoesPagina.forEach(questao => {
    const questaoDiv = document.createElement('div');
    questaoDiv.classList.add('questao');
    questaoDiv.innerHTML = `
      <p style='font-size: 13px'><strong>Assunto:</strong> ${questao.assunto}</p>
      <p><strong>${questao.pergunta}</strong></p>
    `;

    if (questao.tipo === 'AE') {
      // Questão de múltipla escolha
      ['A', 'B', 'C', 'D', 'E'].forEach(letra => {
        if (questao[`alternativa${letra}`]) {
          const alternativa = document.createElement('label');
          alternativa.innerHTML = `
            <input type="radio" name="questao-${questao.pergunta}" value="${letra}">
            ${letra}) ${questao[`alternativa${letra}`]}
          `;
          questaoDiv.appendChild(alternativa);
        }
      });
    } else if (questao.tipo === 'VF') {
      // Questão de verdadeiro/falso
      ['V', 'F'].forEach(valor => {
        const alternativa = document.createElement('label');
        alternativa.innerHTML = `
          <input type="radio" name="questao-${questao.pergunta}" value="${valor}">
          ${valor === 'V' ? 'Verdadeiro' : 'Falso'}
        `;
        questaoDiv.appendChild(alternativa);
      });
    }

    const verificarButton = document.createElement('button');
    verificarButton.textContent = 'Responder';
    verificarButton.addEventListener('click', () => {verificarButton.disabled = true; verificarResposta(questao, questaoDiv)});
    questaoDiv.appendChild(verificarButton);

    questoesSection.appendChild(questaoDiv);
  });

  carregarPaginacao();
}

// Função para verificar a resposta e mostrar a resolução
function verificarResposta(questao, questaoDiv) {
  const radios = questaoDiv.querySelectorAll('input[type="radio"]');
  let respostaSelecionada = '';
  radios.forEach(radio => {
    if (radio.checked) {
      respostaSelecionada = radio.value;
    }
  });

  const resultado = document.createElement('p');
  if (respostaSelecionada === questao.resposta) {
    resultado.textContent = 'Você acertou!';
    resultado.style.color = 'green';
  } else {
	resposta = questao.resposta === 'V' ? "Verdadeiro" : (questao.resposta === 'F' ? "Falso" : questao.resposta);
    resultado.textContent = 'Você errou. Resposta: ' + resposta;
    resultado.style.color = 'red';
  }
  questaoDiv.appendChild(resultado);

  const resolucao = document.createElement('p');
  resolucao.textContent = `Resolução: ${questao.resolucao}`;
  questaoDiv.appendChild(resolucao);
}

// Função para carregar a paginação
function carregarPaginacao() {
  const paginationDiv = document.getElementById('pagination');
  paginationDiv.innerHTML = '';

  const totalPaginas = Math.ceil(questoesFiltradas.length / questoesPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    if (i === paginaAtual) {
      button.disabled = true;
    }
    button.addEventListener('click', () => {
      paginaAtual = i;
      mostrarQuestoes();
    });
    paginationDiv.appendChild(button);
  }
}

// Carregar o dropdown e todas as questões ao carregar a página
window.onload = function() {
  carregarDropdown();
  carregarQuestoes();

  const form = document.getElementById('filter-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const filtroAssunto = document.getElementById('assunto').value;
    const filtroPalavra = document.getElementById('keyword').value;
    carregarQuestoes(filtroAssunto, filtroPalavra);
  });
};
