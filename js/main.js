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
