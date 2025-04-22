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
        document.querySelector('.bgvideo').style.height="110vh";
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
        document.querySelector('.bgvideo').style.height="110vh";
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
    async function vibrate(){
        navigator.vibrate([200, 300, 200]);
    }
    yoink.play();
    vibrate(); 
})

document.querySelector('#me').addEventListener('click',function(e){
    count++;
    
    navigator.vibrate([100]);
    if (count % 5 == 0)
        {
        let audio = new Audio('assets/audio/i\ do\ not\ consent.mp3');
        audio.play();
    }
})

document.querySelector('a').addEventListener('click', () => {
    navigator.vibrate(200);
})

var audio1 = new Audio('assets/Yeahoo Sound Effect.mp3');

const rotateBtn = document.querySelectorAll('#dj');
rotateBtn.forEach(rotateBtn => {
    rotateBtn.addEventListener('click', function(){
    rotateBtn.classList.add("rotate");
    console.log("dannas clicked");
    audio1.play();
    setTimeout(() => rotateBtn.classList.remove('rotate'), 2000);
    })
})

function spawnWildMichael()
{
    const container = document.querySelector("#michael");
    
    const chance = (Math.random());
    
    const data =    `
                        <h1>A wild michael just appeared</h1>
                        <img src="assets/michaeljackson.gif" width="40%">
                        <hr>
                    `
    if (chance > 0.5){
        container.innerHTML+= data;
    }
}

spawnWildMichael();

if (/Android/i.test(navigator.userAgent)){
    document.querySelector('.device').innerHTML = `
    <h1>
    Thanks for using Android <3
    </h1>
    `
} else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
    document.querySelector('.device').innerHTML = `
    <h1>
    Poopy Iphone, Get Android!
    </h1>
    `
}