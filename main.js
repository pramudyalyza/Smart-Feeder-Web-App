var iduser = document.querySelector('.productid');
var wifibtn = document.querySelector('.btn');
var logoutbtn = document.querySelector('.btnlogout');

iduser.addEventListener('keyup', () =>{
    var text = iduser.value;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    checkIfSixChar(text)? a = 1 : a = 0;
    checkIfThereIsW(text)? b = 1 : b = 0;
    checkIfThereIsF(text)? c = 1 : c = 0;
    checkIfThereAreDigit(text)? d = 1 : d = 0;
    if(a === 1 && b === 1 && c === 1 && d === 1){
        wifibtn.classList.add('active');
    }else{
        wifibtn.classList.remove('active');
    }
})

function checkIfSixChar(text){
    return text.length == 6;
}

function checkIfThereAreDigit(text){
    return /[0-9]/.test(text);
}

function checkIfThereIsW(text){
    return /[W]/.test(text);
}

function checkIfThereIsF(text){
    return /[F]/.test(text);
}

wifibtn.addEventListener('click', () =>{
    var img = document.createElement('img');
    img.src = "images/Arrow.png";
    img.classList.add('arrow');
    var imgparent = document.getElementById('wifi');
    imgparent.appendChild(img);
})

logoutbtn.addEventListener('click', () =>{
    iduser.value = ''; 
})
