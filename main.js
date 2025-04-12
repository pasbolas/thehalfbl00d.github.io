let audio = new Audio('assets/audio/ballin.mp3');
let audio2= new Audio('assets/audio/mouseclick.mp3');

document.querySelector('#ballin').addEventListener('click',function()
{
    audio2.play();
    audio.play();
    while(audio.paused && audio2.paused);

    
})