let log = new Log(document.querySelector('.log'));

let char = new Knight('Camillot');
let freak = new Monster();

let stage = new Stage(
    char,
    freak,
    document.querySelector('#char'),
    document.querySelector('#freak'),
    log
);

stage.start();