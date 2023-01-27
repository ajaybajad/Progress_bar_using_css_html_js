let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value")


let progressStartValue = 0,
    progressEndValue = 100,
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#87ceeb ${progressStartValue * 3.6}deg, #ededed 0deg)`;

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    
},speed);

