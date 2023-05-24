function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const numTel = document.createElement('p');
    numTel.textContent = 'Teléfono: 54 011 2007 1234';

    const adress = document.createElement('p');
    adress.textContent = 'Dirección: Mariano Acosta 153, Monte Grande, Buenos Aires';

    const adressPic = document.createElement('img');
    adressPic.src = '../src/img/map.png';
    adressPic.alt = 'Restaurante W dirección Google Maps';
    
    contact.appendChild(numTel);
    contact.appendChild(adress);
    contact.appendChild(adressPic);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;