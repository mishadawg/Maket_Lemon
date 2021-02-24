// Global names and functions
let body = document.getElementById('bodyField');
//func close the list menu
body.addEventListener('click',
    function(e){
        if(e.target.id != 'dropDownMenuLink'){
            for (let i = 0; i < dropdownMenu.length; i++){
                dropdownMenu[i].style.display = 'none';
                turnDropMenu = false;
            }
        }
    },
false);

// Menu
let turnDropMenu = false;
let dropdownMenu = document.getElementsByClassName('dropdown-menu');
let buttonMenu = document.getElementById('dropDownMenuLink');

function openMenu(){
    if(turnDropMenu == false){
        for (let i = 0; i < dropdownMenu.length; i++){
            dropdownMenu[i].style.display = 'block';
            turnDropMenu = true;
        }
    }else if (turnDropMenu == true){
        for (let i = 0; i < dropdownMenu.length; i++){
            dropdownMenu[i].style.display = 'none';
            turnDropMenu = false;
        }
    }
}

buttonMenu.addEventListener("click",openMenu,false);

// Carusel
let caruselBg = document.querySelector('.main-carusel');
let arrPagination = document.getElementsByClassName('paggination-self');

function removerSlider(){
    return caruselBg.classList.remove('animate__slideInLeft');
}
function slider(e){
    let idOfBtn = e.target.getAttribute("id");
    if(idOfBtn == "pag-1"){
        caruselBg.classList.add('animate__slideInLeft');
        setTimeout(removerSlider,1000);
        caruselBg.style.background = "url(images/bg/bg-1.jpg)";
        caruselBg.style.backgroundPosition = "center";
        caruselBg.style.backgroundSize = "100%"; 
    }else if(idOfBtn == "pag-2"){
        caruselBg.classList.add('animate__slideInLeft')
        setTimeout(removerSlider,1000);
        caruselBg.style.backgroundImage= "url(images/bg/bg-2.jpg)";
        caruselBg.style.backgroundPosition = "center";
        caruselBg.style.backgroundSize = "100%";
        
    }else if(idOfBtn == "pag-3"){
        caruselBg.classList.add('animate__slideInLeft')
        setTimeout(removerSlider,1000);
        caruselBg.style.background = "url(images/bg/bg-3.jpg)";
        caruselBg.style.backgroundPosition = "center";
        caruselBg.style.backgroundSize = "100%";
        
    }else if(idOfBtn == "pag-4"){
        caruselBg.classList.add('animate__slideInLeft')
        setTimeout(removerSlider,1000);
        caruselBg.style.background = "url(images/bg/bg-4.jpg)";
        caruselBg.style.backgroundPosition = "center";
        caruselBg.style.backgroundSize = "100%";
    }
}

for (let l = 0; l < arrPagination.length; l++) {
    arrPagination[l].addEventListener('click',slider,false);
}

//TODO need to intergrate this cycle in to slider function to ifelse check
//something need to change when class choosen place in classlist
for (let k = 0; k < arrPagination.length; k++) {
    let containsClass = arrPagination[k].classList.contains('choosen');
    if(containsClass == true){
        arrPagination[k].classList.remove('choosen');
    }else{
        arrPagination[k].classList.remove('choosen');
    }
}