const input = document.getElementById('input');
const par = document.getElementById('paragraph');
let idTimeout;

const textInPar = () => {
    clearTimeout(idTimeout);
    idTimeout = setTimeout(() => {
        par.textContent = input.value;
    }, 300);
}

input.addEventListener('input', textInPar);