function clickMobile(){
    let btnMobile = document.querySelector('.menuMobile');
    let menuShow = document.querySelector('.menu nav ul');

    btnMobile.addEventListener("click", () => {
        if(menuShow.style.display == 'flex'){
            menuShow.style.display = 'none'
        } else{
            menuShow.style.display = 'flex'
        }
    });
}