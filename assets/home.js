const mode = document.querySelector('#icon');
const login = document.querySelector('.login');

mode.addEventListener('click', () =>{

    if(mode.classList.contains("fa-moon")){
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");

        login.classList.add('dark');
        return
    }

    mode.classList.remove("fa-sun");
    mode.classList.add("fa-moon");
    login.classList.remove('dark');
});