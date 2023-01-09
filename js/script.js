let navbar = document.querySelector('.header .flex .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

}
window.onscroll = () =>{
    navbar.classList.remove('active');

}

document.querySelectorAll('input[type="number"]').forEach(inputNubmer =>{
    inputNubmer.oninput = () =>{
        if(inputNubmer.ariaValueMax.length > inputNubmer.maxLength) inputNubmer.value = inputNubmer.value.slice(0, inputNubmer.maxLength);

    };
});
AOS.init({
    duration: 400,
    delay: 200,
});