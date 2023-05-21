const xmasContainer = document.querySelector('.xmas');
const decContainer = document.querySelector('.december');
const showDec = () => {
    xmasContainer.classList.add('hide');
    decContainer.classList.remove('hide');
}

const showXmas = () => {
    xmasContainer.classList.remove('hide');
    decContainer.classList.add('hide');
}
export { showXmas, showDec };