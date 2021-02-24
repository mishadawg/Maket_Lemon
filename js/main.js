////////////////////////////// Global names and functions////////////////////////////
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

/////////////////////////////// Menu ////////////////////////////
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

/////////////////////////////// Carusel //////////////////////////
let caruselBg = document.querySelector('.main-carusel');
let arrPagination = document.getElementsByClassName('paggination-self');
function styleAdds() {
    caruselBg.style.backgroundPosition = "center";
    caruselBg.style.backgroundAttachment= "fixed";
    caruselBg.style.backgroundSize = "cover";
}
function removerSlider(){
    return caruselBg.classList.remove('animate__slideInLeft');
}
function slider(e){
    let idOfBtn = e.target.getAttribute("id");
    if(idOfBtn == "pag-1"){
        caruselBg.classList.add('animate__slideInLeft');
        setTimeout(removerSlider,1000);
        caruselBg.style.background = "url(images/bg/bg-1.jpg)";
        styleAdds();
    }else if(idOfBtn == "pag-2"){
        caruselBg.classList.add('animate__slideInLeft')
        setTimeout(removerSlider,1000);
        caruselBg.style.backgroundImage= "url(images/bg/bg-2.jpg)";
        styleAdds();
    }else if(idOfBtn == "pag-3"){
        caruselBg.classList.add('animate__slideInLeft')
        setTimeout(removerSlider,1000);
        caruselBg.style.background = "url(images/bg/bg-3.jpg)";
        styleAdds();
    }else if(idOfBtn == "pag-4"){
        caruselBg.classList.add('animate__slideInLeft')
        setTimeout(removerSlider,1000);
        caruselBg.style.background = "url(images/bg/bg-4.jpg)";
        styleAdds();
    }
}
//Pag buttons
for (let l = 0; l < arrPagination.length; l++) {
    arrPagination[l].addEventListener('click',slider,false);
    arrPagination[l].addEventListener('click',test,false);
}

//TODO need to intergrate this cycle in to slider function to ifelse check
//something need to change when class choosen place in classlist
//upd suddenly,animate have slide OUT ANIMATION...This change all mining...
//24.02 need to understand what i can do with id of choosen????
function test(e){
    let containsClass = e.target.classList.contains('choosen');
    delAllClassCarusel();
    //searchClassChoosen();
    if(containsClass == true){
        delClassCarusel(e);
        searchClassChoosen();
    }else if(containsClass == false){
        addClassCarusel(e);
        searchClassChoosen();
    }
}
//func add class
function addClassCarusel(e) {
    for (let k = 0; k < arrPagination.length; k++) {
        e.target.classList.add('choosen');
    }
}
//func del class
function delClassCarusel(e) {
    for (let k = 0; k < arrPagination.length; k++) {
        e.target.classList.remove('choosen');
    }
}
//func del all class
function delAllClassCarusel() {
    for (let k = 0; k < arrPagination.length; k++) {
        arrPagination[k].classList.remove('choosen');
    }
}
//func search class
function searchClassChoosen() {
    let count = 1;
    for (let k = 0; k < arrPagination.length; k++) {
        let containsClass = arrPagination[k].classList.contains('choosen');
        if(containsClass == false){
            count++;
        }else{
            return console.log(count);
        }
    }
}

// for (let k = 0; k < arrPagination.length; k++) {
//     //let containsClass = arrPagination[k].classList.contains('choosen');
//     if(containsClass == true){
//         arrPagination[k].classList.remove('choosen');
//     }else{
//         arrPagination[k].classList.remove('choosen');
//     }
// }