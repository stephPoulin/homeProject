document.addEventListener('DOMContentLoaded', (e) => {
    const body = document.getElementById('body');

    // Bg
    const mainBg = document.getElementById('mainBg');
    mainBg.offsetWidth = body.offsetWidth;
    mainBg.offsetHeight = body.offsetHeight;
    console.log(mainBg);
});