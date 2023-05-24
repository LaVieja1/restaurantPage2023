function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const placeImage = document.createElement('img');
    placeImage.src = './304d1c559c32606da7f6.jpg'
    //placeImage.src = '../src/img/background1.jpg'
    placeImage.alt = 'Restaurante W';

    home.appendChild(createParagraph('El restaurante mas reconocido del país'));
    home.appendChild(createParagraph('Cocinando con prestigio desde 2002'));
    home.appendChild(placeImage);
    home.appendChild(createParagraph('Realiza la orden online o visitanos!'));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;