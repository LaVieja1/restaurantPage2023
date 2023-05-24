function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            'Milanesa Napolitana',
            'Milanesa de peceto, Tomate, Jamón, Oregano, Queso, Papas fritas'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Empanada',
            'Jamon y queso, Humita, Carne Suave, Pollo, Verdura'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Asado',
            'A la parrila, chinchulin, vacio, chorizo, cerdo'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Pizza',
            'Muzzarella, Napolitana, Huevo, Tomate, Peperoni'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Fideos',
            'Spaghetti, Tirabuzones y Moño, con distintas salsas para elegir'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Pollo',
            'A la parilla, horno o plancha'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Sopa',
            'Con verduras a elección, con cabello de angel o sopa de letras'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Sushi',
            'Sabor a elección'
        )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    const foodImg = document.createElement('img');
    foodImg.src = `img/menu/${name}.jpg`;
    //foodImg.src = `../src/img/menu/${name}.jpg`;
    foodImg.alt = `${name}`;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;