var menu1 = document.getElementById('itens')
function mudouTamanho (){
    if(window.innerWidth >= 768){
        menu1.style.display = 'block'
    } else{
        menu1.style.display = 'none'
    }

}

function clickMenu (){

    if (menu1.style.display == 'block'){
        menu1.style.display = 'none'
    } else{
        menu1.style.display = 'block'  
    }
}

document.addEventListener('DOMContentLoaded', function() {
var scrollLinks = document.getElementsByClassName('scroll-link');

for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    
    var target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
        target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
        
        target.classList.add('scroll-to-section');
        setTimeout(function() {
        target.classList.remove('scroll-to-section');
        }, 1000);
    }
    });
}
});