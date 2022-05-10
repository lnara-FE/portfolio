var moreBtn = document.querySelector('#more-id');
var closeBtn = document.querySelector('#close-id');
var popup = document.querySelector('#popup-id');
var popBg = document.querySelector('#pop-bg-id');

moreBtn.addEventListener('click',function(e){
    e.preventDefault();
    popup.classList.add('show');
    popBg.classList.add('show');
})

closeBtn.addEventListener('click',function(e){
    e.preventDefault();
    popup.classList.remove('show');
    popBg.classList.remove('show');
})



