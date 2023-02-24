fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        const app = document.getElementById('app');
        app.classList.add('grid')

        const arrayLista = json;

        for (let i = 0; i < arrayLista.length; i++) {
            const itemLista = arrayLista[i];

            const elementHtml = document.createElement('div');
            elementHtml.classList.add('contenedor-img')

            const elemetText = document.createElement('p');
            elemetText.classList.add('contenedor-text')

            elemetText.addEventListener('mouseover', function () {
                elemetText.classList.add('animate__animated', 'animate__bounce')
            })

            elemetText.addEventListener('mouseout', function () {
                elemetText.classList.remove('animate__animated', 'animate__bounce')
            })

            elemetText.innerHTML = itemLista.title;

            const elementImg = document.createElement('img');
            elementImg.classList.add('img')
            elementImg.src = itemLista.url;
            elementImg.alt = itemLista.title;
            elementImg.title = itemLista.title;

            elementHtml.appendChild(elementImg);
            elementHtml.appendChild(elemetText);

            app.appendChild(elementHtml);
        }

    })