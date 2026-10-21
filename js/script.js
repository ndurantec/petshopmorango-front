//import axios from 'axios'

// 1. Função responsável por renderizar a tabela HTML
function renderizaTabelaAlunos(alunos) {
  const tbody = document.getElementById('alunos');

  if (!tbody) {
    console.error("Elemento 'alunos' não foi encontrado no HTML.");
    return;
  }

  tbody.innerHTML = ''; // Limpa a tabela antes de preencher

  if (!alunos || alunos.length === 0) {
    tbody.innerHTML = '<tr><td colspan="2">Nenhum aluno encontrado.</td></tr>';
    return;
  }

  // Preenche as linhas da tabela
  alunos.forEach(aluno => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${aluno.id}</td>
      <td>${aluno.nome}</td>
    `;
    tbody.appendChild(tr);
  });
}

// 2. Função responsável por buscar os dados usando Axios
async function listaAlunos() {
  try {
    const response = await axios.get('http://127.0.0.1:3000/alunos');
    console.log("Lista de alunos recebida:", response.data);
    
    // Passa a lista retornada pela API para carregar na tabela
    renderizaTabelaAlunos(response.data);
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    alert("Erro ao carregar a lista de alunos.");
  }
}

// 3. Executa a busca automaticamente ao carregar a página
//window.onload = listaAlunos;