function meuEscopo() {
    // Selecionando os itens    
    const txtInput = document.querySelector('.input-novo-item');
    const btnAddItem = document.querySelector('.btn-add-item');
    const txtUl = document.querySelector('.itens');

    // Função limpa input
    const limpaInput = () => {
        txtInput.value = '';
        txtInput.focus();
    };

    // Função que cria li
    const criaLi = () => {
        const li = document.createElement('li');
        return li
    }

    // Função que cria um botão apagar
    const btnRemove = (li) => {

        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Excluir';
        botaoApagar.setAttribute('class', 'apagar')
        botaoApagar.setAttribute('title', 'Apagar item da lista')
        li.appendChild(botaoApagar);
    };

    // Função que adiciona itens digitados
    const addItem = (texto) => {
        const li = criaLi();
        txtUl.appendChild(li);
        li.innerText = texto;
        limpaInput();
        btnRemove(li)
        salvarLista();
    };

    // Evento click no botão "Adicionar"
    btnAddItem.addEventListener('click', () => {
        if (!txtInput.value) return;
        addItem(txtInput.value);
    });

    // Evento pressionar no enter
    txtInput.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            if (!txtInput.value) return;
            addItem(txtInput.value);
        };
    });

    // Evento click botão apagar
    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
            salvarLista();
        };
     });

    // Função para salvar os itens adicionados na lista
    const salvarLista = () => {
        const liLista = txtUl.querySelectorAll('li');
        const listaDeItens = [];

        for (let lista of liLista) {
            let itensTexto = lista.innerText;
            itensTexto = itensTexto.replace('Excluir', ' ').trim() // trim() remove o espaço em branco no final
            listaDeItens.push(itensTexto);
        }
        // Transformando em JSON e salvando no navegador
        const listaJSON = JSON.stringify(listaDeItens);
        localStorage.setItem('lista', listaJSON)
        console.log(listaJSON);
    };

    // Função que recarrega os itens salvos no localStorage
    const carregaItensSalvos = () => {
        const lista = localStorage.getItem('lista');
        const listaDeItens = JSON.parse(lista);

        for (let itens of listaDeItens) {
            addItem(itens);
        };
    };
    carregaItensSalvos();
}
meuEscopo();
