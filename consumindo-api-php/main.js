let btn = document.querySelector("#botao");


btn.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost/teste/query.php?action=get-content');
        const dados = await response.json();

        let tbody = document.querySelector("tbody");

        tbody.innerHTML = '';

        dados.forEach(el => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${el.nome}</td>
                <td>${el.email}</td>
                <td>${el.telefone}</td>
            `;

            tbody.appendChild(row);
        });

        let tab = document.querySelector("#tabela");
        tab.removeAttribute('hidden');

    } catch (erro) {
        console.log(erro);
    }
});