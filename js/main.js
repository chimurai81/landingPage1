let ubicacionPrincipal = window.pageYOffset
AOS.init();
window.addEventListener('scroll', () =>{
    let despazamientoAct = window.pageYOffset;
    if(ubicacionPrincipal >=despazamientoAct){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = despazamientoAct;
})

//menu
let enlacesheader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
AOS.init();
document.querySelectorAll(".hamburguer")[0].addEventListener('click', function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo=true;
    }
    enlacesheader.classList.toggle("menudos");
})



