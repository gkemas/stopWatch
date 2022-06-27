const display =document.querySelector(".displaytime");
const btnplay= document.querySelector(".play");
const btnstop= document.querySelector(".stop");


let minute =0;
let second=0;
let msecond=0;
let isWatch = true;

const WatchTimer = ()=>{
    msecond++;
    if(msecond == 100){
        second++;
        msecond = 0;
    }
    second++;
    if(second == 60){
        minute++;
        second =0;
    }

    minute = String(minute).length < 2 ? "0" + minute : minute;
    second = String(second).length < 2 ? "0" + second : second;
    msecond = String(msecond).length < 2 ? "0" + msecond : msecond;
    display.innerHTML=`${minute}:${second}:${msecond}`;
}
const playTime = () =>{

  timer =  setInterval(WatchTimer,10);
}
const stopTime =() => {
    clearInterval(timer);
};
btnplay.addEventListener("click",()=>{
    isWatch = !isWatch
   console.log(WatchTimer)
    if(isWatch == false){
      console.log(playTime())
        playTime(); 
      
      btnplay.innerHTML=`<i class="fa-solid fa-circle-stop"></i> STOP`;
    }else{
        stopTime();
     btnplay.innerHTML=`<i class="fa-solid fa-circle-play"></i> PLAY`
    }
})

// btnstop.addEventListener("click",()=>{
//     stopTime();