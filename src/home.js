import Image1 from './img/background1.jpg';

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const placeImage = document.createElement('img');
    placeImage.src = Image1;
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

function cargarHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default cargarHome;