const ultimamod = document.querySelector('#last-modification');
const year = document.querySelector('#year');
if (ultimamod) {
    ultimamod.textContent = 'Ultima Modificaçao' + document.lastModified;
};
if (year) {
    year.textContent = '©' + new Date().getFullYear();
};

const temperatura = 10;
const velocidadeVento = 5;

const calcularSensacaoTermica = (temp, vento) => (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1);

let sensacaoTermica = "N/A";

if (temperatura <=10 && velocidadeVento > 4.8) {
    sensacaoTermica = `${calcularSensacaoTermica(temperatura, velocidadeVento)} °C`;
}

document.getElementById("wind-chill").textContent = sensacaoTermica