const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.querySelector('.snow-container').appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 9000);
}
export default createSnowflake;