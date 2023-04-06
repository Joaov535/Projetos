//Knight or Wizard
//Monster or Haunt

class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

//human
class Knight extends Character {
    constructor(name) {
        super(name); //chama o contrutor (Character)
        this.life = 100; //newLife
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}
class Wizard extends Character {
    constructor(name) {
        super(name); //chama o contrutor (Character)
        this.life = 100; //newLife
        this.attack = 13;
        this.defense = 2;
        this.maxLife = this.life;
    }
}

//freak
class Monster extends Character {
    constructor() {
        super('Monstro');
        this.life = 80; //newLife
        this.attack = 12;
        this.defense = 8;
        this.maxLife = this.life;
    }
}
class Haunt extends Character {
    constructor() {
        super('Assombração')
        this.life = 150; //newLife
        this.attack = 7;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, figther1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = figther1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    start() {
        this.update();
        this.fighter1El.querySelector('.attackButon').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButon').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1pct}%`;
        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2pct}%`;
    }

    doAttack(attacking, attacked) {
        // console.log(`${attacking.name} está atacando ${attacked.name}`);
        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('Já morreu!');
            return;
        }

        let attackFactor = (Math.random() * 2);
        let defenseFactor = (Math.random() * 2);

        let actualAttack = (attacking.attack * attackFactor).toFixed();
        let actualDefense = attacked.defense * defenseFactor.toFixed();

        if (actualAttack > actualDefense) {
            attacked.life = attacked.life - actualAttack; //newLife
            this.log.addMessage(`${attacking.name} deu ${actualAttack} de dano em ${attacked.name}`)
        } else {
            this.log.addMessage('Conseguiu defender...')
        }
        this.update();
    }

}

class Log {
    list = [];

    constructor(listEl) {         // listEl = argumento passado no new Log()
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';
        
        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}
