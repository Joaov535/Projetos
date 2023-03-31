// Criando algoritmo de validação

function escopoGlobal() {

    // Variáveis
    let numCPF;
    let limpoCPF;
    let arrCPF;

    // Capturas
    const resultado = document.querySelector('#res-txt');
    const botao = document.querySelector('#btn-validacao');


    // Capturando clique no botão
    botao.addEventListener('click', executaFuncao);

    function executaFuncao() {
        validar();
        alert
    }

    // Função click acionado
    function validar() {

        const CPFEnviado = document.querySelector('#CPF-num').value;
       
        numCPF = CPFEnviado;
        limpoCPF = numCPF.replace(/\D+/g, '');

        arrCPF = limpoCPF.split('');
        const arrCPF_cortado = arrCPF.slice(0, 9)

        if (valido() == true) {
            resultado.innerHTML = 'CPF Válido!'
        } else {
            resultado.innerHTML = 'CPF Inválido!'
        }

        function valido() {

            // verificando se o valor é valido para um CPF
            if (typeof limpoCPF == 'undefined') return false;
            if (limpoCPF.length !== 11) return false;


            let a1 = 10;
            let b1 = 0;
            let res = 0;

            while (a1 > 2) {

                let c1 = arrCPF_cortado[b1];

                res = res + (c1 * a1);

                a1--;
                b1++;

            }

            const conta = String(11 - (res % 11));

            arrCPF_cortado.push(conta);

            let res2 = 0;
            let a2 = 11;
            let b2 = 0;


            if (conta == arrCPF_cortado[9]) {
                while (a2 > 1) {

                    let c2 = arrCPF_cortado[b2];

                    res2 = res2 + (a2 * c2);

                    a2--;
                    b2++;
                }
            }

            let conta2 = String(11 - (res2 % 11));

            if (conta2 > 9) conta2 = '0';

            if (conta2 == limpoCPF[10]) return true;
        }
    }
}
escopoGlobal();
