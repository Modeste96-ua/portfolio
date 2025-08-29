let menu = document.querySelector('#menu-icon');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    header.classList.toggle('active');

}

let themeToggler = document.querySelector('#theme-toggler');
 themeToggler.onclick = () =>{
    themeToggler.classList.toggle('bxs-sun');
    if(themeToggler.classList.contains('bxs-sun')){
        document.body.classList.add('active');

    }else{
        document.body.classList.remove('active');

    }

 }