let audio = new Audio('assets/audio/ballin.mp3');
let audio2= new Audio('assets/audio/mouseclick.mp3');
let yoink= new Audio('assets/audio/yoink.mp3');
let count = 0;

document.querySelector('#ballin').addEventListener('click',function()
{
    audio2.play();
    audio.play();
    while(audio.paused && audio2.paused);   
})
document.querySelector('#skrilllogo').addEventListener('click',function()
{
    yoink.play(); 
})

document.querySelector('#me').addEventListener('click',function(){
    count++;
    let audio = new Audio('assets/audio/i\ do\ not\ consent.mp3');
    if (count % 5 == 0){
        audio.play();
    }
})