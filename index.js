
var timerObj=document.getElementById("timer")
var startbtnObj=document.getElementById("start-btn")
var resetBtnObj=document.getElementById("reset-btn")
var isTimerRunning=false


resetBtnObj.addEventListener("click",()=>{
    console.log("reset button clicked");
    timerObj.textContent="00:00";
})

startbtnObj.addEventListener("click",()=>{
    console.log("start button clicked");
    if (isTimerRunning){
        startbtnObj.textContent="start";
        isTimerRunning=false
        clearInterval(interval)
    }
    else {
           startbtnObj.textContent="stop";
           isTimerRunning=true
           interval=setInterval(function(){
            console.log("hi");
           }, 1000)
    }
    
   
    
})


