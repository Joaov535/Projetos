// https://jsonplaceholder.typicode.com/posts

async function readPosts() {
    const postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0) {
        postArea.innerHTML = ''

        for(let i in json) {
            const postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr></div>`;
            postArea.innerHTML += postHtml;
        }
    } else {
        postArea.innerHTML = 'Nenhum post carregado';
    }

    async function addNewPost(title, body) {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 4321
            })
        });

        document.querySelector('#titleField').value = '';
        document.querySelector('#bodyField').value = '';

        readPosts();
    }

    document.querySelector('#insertBnt').addEventListener('click', () => {
        const title = document.querySelector('#titleField').value;
        const body = document.querySelector('#bodyField').value;

        if(title && body) {
            addNewPost(title, body);
        } else {
            alert('Preencha todos os campos');
        }
    })
}

readPosts();