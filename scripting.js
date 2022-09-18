var count = 0;
var Second = 0;
var minute = 0;
var timer = false;

var start = document.getElementById('start');
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var milliScreen = document.getElementById('milli');
var SecondsScreen = document.getElementById('seconds');
var minuteScreen = document.getElementById('minute');

start.addEventListener('click',startTimer);

stop.addEventListener('click',function(){
    timer = false;
    
});
reset.addEventListener('click',function(){
    timer = false;
    milliScreen.innerText = '00';
    SecondsScreen.innerText = '00';
    minuteScreen.innerText = '00';
    count = 0;
    Second = 0;
    minute = 0;
});

function startTimer(){
    timer = true;
    setTimeout(function(){
        if(timer == true){
            count += 1;
            if(count <= 9){
                milliScreen.innerText = '0'+count;
            }else{
                milliScreen.innerText = count;
            }            
            if(count == 100){
                Second += 1;
                if(Second <= 9){                    
                    SecondsScreen.innerHTML = '0' + Second;
                }else{                      
                    SecondsScreen.innerHTML = Second;
                }                
                count = 0;
                milliScreen.innerHTML = '00'; 
            }
            if(Second == 60){
                minute += 1;
                if(minute <= 9){
                    minuteScreen.innerText = '0' + minute;
                }else{
                    minuteScreen.innerText = minute;
                }
                count = 0;
                Second = 0;
                milliScreen.innerText = '00';
                SecondsScreen.innerText = '00';
            }
            startTimer();
        }
    },10);
}