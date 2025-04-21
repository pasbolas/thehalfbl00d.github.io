const rotateBtn = document.querySelectorAll('#dj');
rotateBtn.forEach(rotateBtn => {
    rotateBtn.addEventListener('click', function(){
    rotateBtn.classList.add("rotate");
    console.log("dannas clicked");
    setTimeout(() => rotateBtn.classList.remove('rotate'), 2000);
    })
})

