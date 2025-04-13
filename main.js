let audio = new Audio('assets/audio/ballin.mp3');
let audio2= new Audio('assets/audio/mouseclick.mp3');
let yoink= new Audio('assets/audio/yoink.mp3');
let count = 0;

/*
width of video = 640
height of video = 360

if aspect ration of screen > aspect ratio of video:
    video.width = 100vw;
else if aspect ratio of screen < aspect ration of vide:
    video.height = 100vh;
*/

let h1 = window.innerHeight; // this doesnt listen for active resize events
let w1 = window.innerWidth;

let apS1 = w1/h1;
let apV1 = 640/360;

if (apS1 >= apV1) 
{
    document.querySelector('.bgvideo').style.width="100vw";
    document.querySelector('.bgvideo').style.height="auto";
} 
else if (apV1 > apS1)
{
    document.querySelector('.bgvideo').style.height="102vh";
    document.querySelector('.bgvideo').style.width="auto";
}

window.addEventListener('resize', function()
{
    let h1 = window.innerHeight; // this doesnt listen for active resize events
    let w1 = window.innerWidth;

    let apS1 = w1/h1;
    let apV1 = 640/360;

    if (apS1 >= apV1) 
    {
        document.querySelector('.bgvideo').style.width="100vw";
        document.querySelector('.bgvideo').style.height="auto";
    } 
    else if (apV1 > apS1)
    {
        document.querySelector('.bgvideo').style.height="102vh";
        document.querySelector('.bgvideo').style.width="auto";
    }
})



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

document.querySelector('#me').addEventListener('click',function(e){
    count++;
    let audio = new Audio('assets/audio/i\ do\ not\ consent.mp3');
    if (count % 5 == 0){
        audio.play();
    }
})