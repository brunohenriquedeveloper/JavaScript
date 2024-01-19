function carregar() {
var msg = document.querySelector('.msg');
var foto = document.querySelector('.foto');
var img = foto.querySelector('img');
var data = new Date();
var hora = data.getHours();
msg.innerHTML= `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
 img.src = 'imagens/pexels-daria-obymaha-1684151.jpg'
} else if (hora >= 12 && hora < 18) {
 img.src = 'imagens/pexels-george-desipris-858241.jpg'
 document.body.style.background = 'orange'
} else {
    img.src = 'imagens/pexels-enrico-perini-705425.jpg'
    document.body.style.background = 'darkgray'
}

document.addEventListener("DOMContentLoaded", function() {
    carregar()
})
}


