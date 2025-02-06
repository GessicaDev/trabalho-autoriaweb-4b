function ordenarTabela(coluna) {
    const tabela = document.querySelector('#tabela_alunos');
    const tbody = document.querySelector('tbody');
    const linhas = Array.from(tbody.rows);

    const cabecalhos = tabela.querySelectorAll('th');
    cabecalhos.forEach(cabecalho => {
        cabecalho.classList.remove('destaque');
    });

    const cabecalhoClicado = cabecalhos[coluna];
    cabecalhoClicado.classList.add('destaque');

    const ordenado = linhas.sort((a, b) => {
        const cellA = a.cells[coluna].textContent.trim().toLowerCase();
        const cellB = b.cells[coluna].textContent.trim().toLowerCase();

        if(cellA < cellB)
            return -1;
        else if(cellA > cellB)
            return 1;
        
        return 0;
    });

    ordenado.forEach(linha => tbody.appendChild(linha));
}