const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navList');
    const navLinks =document.querySelectorAll('.navList li');
    

    burger.addEventListener('click', () =>{
        nav.classList.toggle('navActive');
        /////animacion de los links
        navLinks.forEach((link,principal)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${principal / 7 + 0.5}s`;
            }            
        });
        ///animacion del burger
        burger.classList.toggle('toggle');
    });
}
navSlide();

