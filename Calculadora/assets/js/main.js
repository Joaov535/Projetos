const criaCalculadora = () => {
    return {          // A função irá retornar um objeto

        // Atributos
        display: document.querySelector('.display'),

        // Metodos
        inicia() {
            this.cliqueBotoes();  // this = calculadora = objeto retornado pela função
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (evento) => {
                if (evento.keyCode === 13) {
                    this.calcular();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {                                               // O método slice() retorna uma cópia de
            this.display.value = this.display.value.slice(0, -1); // parte de um array a partir de um subarray  
        },                                                        // criado entre as posições início e fim (0,-1)

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        calcular() {
            let conta = this.display.value;

            try {                           // eval() executa qualquer código
                conta = eval(conta);         // escrito no display  !PERIGOSO    

                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida!');
                return;
            }
        },

        //                                                      
        cliqueBotoes() {                                        // Com arrow function o this
            document.addEventListener('click', (evento) => {    // continua sendo calculadora
                // elemento recebe o alvo do evento click       // se fosse declarado com function
                const elemento = evento.target;                 // this seria o document
                // Se o elemento contem a classe '      '
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }
                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (elemento.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (elemento.classList.contains('btn-eq')) {
                    this.calcular()
                }

                this.display.focus();
            });
        },
    };
}

const calculadora = criaCalculadora(); // this é a calculadora
calculadora.inicia();


// IMPORTANTE:
// Quem chama o metodo será o this.