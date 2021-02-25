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
////////////////////////////// End Global names and functions////////////////////////


/////////////////////////////// Menu ////////////////////////////////////////////////
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
/////////////////////////////// End Menu ///////////////////////////////////////////


/////////////////////////////// Carusel ////////////////////////////////////////////
let caruselBg = document.querySelector('.main-carusel');
let arrPagination = document.getElementsByClassName('paggination-self');
//MAIN func first slider actions
function sliderActionFirst(e){
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
//MAIN func second slider actions
function sliderActionSecond(e){
    let prevCountCarus = searchClassChoosen();//Prev count when delete class choosen
    let presCountCarus = 0;//Present count when add class choosen
    let containsClass = e.target.classList.contains('choosen');//Checking for choosen class
    if(prevCountCarus == undefined){
        prevCountCarus = 1;
    }//Bug with undefined on start
    delAllClassCarusel();
    if(containsClass == true){
        delClassCarusel(e);
        searchClassChoosen();
    }else if(containsClass == false){
        addClassCarusel(e);
        presCountCarus = searchClassChoosen();
    }
    changes(prevCountCarus,presCountCarus);
}
//MAIN Pag buttons
for (let l = 0; l < arrPagination.length; l++) {
    arrPagination[l].addEventListener('click',sliderActionFirst,false);
    arrPagination[l].addEventListener('click',sliderActionSecond,false);
}
//func styles adds
function styleAdds() {
    caruselBg.style.backgroundPosition = "center";
    caruselBg.style.backgroundAttachment= "fixed";
    caruselBg.style.backgroundSize = "cover";
}
//func remover effects
function removerSlider(){
    caruselBg.classList.remove('animate__slideInLeft');
    caruselBg.classList.remove('animate__slideInRight');
    caruselBg.classList.remove('animate__slideOutLeft');
    caruselBg.classList.remove('animate__slideOutRight');
}
//func check changes
function changes(Prev,Pres) {
    if (Pres < Prev){
        caruselBg.classList.add('animate__slideInRight');
        setTimeout(removerSlider,1000);
        //console.log (`${Pres} сейчас нынешнее, и переместилось вправо относительно ${Prev}`);
    }else if (Pres > Prev){
        setTimeout(removerSlider,1000);
        //console.log(`${Pres} сейчас нынешнее, и переместилось влево относительно ${Prev}`);
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
//func del all classes
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
            return count;
        }
    }
}
/////////////////////////////// End Carusel ////////////////////////////////////////