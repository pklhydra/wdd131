const menuBtn = document.querySelector('#menu-btn');
const menuLinks = document.querySelector('#menu-links');

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('aberto');

    if (menuLinks.classList.contains('aberto')) {
        menuBtn.textContent = 'X';
        menuBtn.setAttribute('aria-label', 'Fechar Menu');
    } else {
        menuBtn.textContent = '☰';
        menuBtn.setAttribute('aria-label', 'Abrir Menu');
    }
});

const anoAtual = document.querySelector('#ano-atual');
if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}

const ultimaModificacao = document.querySelector('#ultima-mod');
if (ultimaModificacao) {
    ultimaModificacao.textContent = 'Última modificação: ' + document.lastModified;
}

const temples = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-8-7",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-5-21",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-6-7",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-5-2",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-1-10",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-2",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];


const cutoffDate = new Date('1950-01-01');
const largeArea = 50000;

function toggleActive(element) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

function setFilter(seletor, filterFunction){
    const element = document.querySelector(seletor)

    element.addEventListener('click', () => {
        toggleActive(element);
        createTempleCard(temples.filter(filterFunction));
    });
};

setFilter('#all', () => temples);
setFilter('#old', temple => new Date(temple.consagracao) <= cutoffDate);
setFilter('#new', temple => new Date(temple.consagracao) >= cutoffDate);
setFilter('#large', temple => temple.area > largeArea);
setFilter('#small', temple => temple.area <= largeArea);



createTempleCard(temples);

function createTempleCard(templos) {
    document.querySelector('.res-grid').innerHTML = '';

    templos.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.nomeDoTemplo;
        location.innerHTML = `<span class="label">Localização:</span> ${temple.localizacao}`;
        dedication.innerHTML = `<span class="label">Dedicado:</span> ${temple.consagracao}`;
        area.innerHTML = `<span class="label">Tamanho:</span> ${temple.area} pés²`;
        img.setAttribute("src", temple.urlDaImagem);
        img.setAttribute("alt", `Templo ${temple.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}
