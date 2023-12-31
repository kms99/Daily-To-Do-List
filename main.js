/**
 * 프로젝트 명 : Daily Schedule 
 * 프로젝트 설명 : 하루 시간표를 등록하고 등록된 스케줄에 맞게 알림창을 띄어 관리해주는 웹 프로젝트 
 * 사용 기술 : HTML, CSS, 바닐라 자바스크립트
 * 기능 : 
 * 1. 등록한 스케줄을 확인할 수 있다. (리스트, 시각자료)
 * 2. 사용자는 현재 시간을 확인 할 수 있다.
 * 3. 스케줄을 등록했을때 입력한 시작시간과 끝나는 시간마다 알림창을 띄어준다.
 * 4. 사용자는 스톱워치 기능을 구현할 수 있다.
 * 5. 스톱워치를 종료하면 실제로 본인이 한 활동을 나열하여 확인 할 수 있다.
 */

/* 모드 체인지 이벤트 */
// let startTimer={};
let mode='dark';
document.getElementById('changeModeBtn').addEventListener('click',function(){
    if(mode==='dark'){
        document.querySelector('body').classList.replace('d-mode-body','w-mode-body');
        document.getElementById('topArea').classList.replace('d-mode-top','w-mode-top');
        document.getElementById('changeModeBtn').classList.replace('d-mode-change-button','w-mode-change-button');
        document.getElementById('mainContainer').classList.replace('d-mode-main','w-mode-main');
        document.getElementById('nav-underBar').classList.replace('d-mode-nav-underBar','w-mode-nav-underBar')
        document.querySelectorAll('.list-item').forEach(item=>{
            item.classList.replace('d-mode-list-item','w-mode-list-item');
        })
        mode = 'white';

    }else if (mode==='white'){
        document.querySelector('body').classList.replace('w-mode-body','d-mode-body');
        document.getElementById('topArea').classList.replace('w-mode-top','d-mode-top');
        document.getElementById('changeModeBtn').classList.replace('w-mode-change-button','d-mode-change-button');
        document.getElementById('mainContainer').classList.replace('w-mode-main','d-mode-main');
        document.getElementById('nav-underBar').classList.replace('w-mode-nav-underBar','d-mode-nav-underBar')
        document.querySelectorAll('.list-item').forEach(item=>{
            item.classList.replace('w-mode-list-item','d-mode-list-item');
        })
        mode = 'dark';
    }
});

/* 네비게이션 underBar event */
document.querySelectorAll('#navigation button').forEach((button)=>{
    button.addEventListener('click',function(){
        const underBar =  document.getElementById('nav-underBar');

        underBar.style.left = `${button.offsetLeft}px`;
        underBar.style.top = `${button.offsetTop+button.offsetHeight}px`;
        underBar.style.width = `${button.offsetWidth}px`;
    })
})

/* list input area open */
document.getElementById('add-area-open').addEventListener('click',function(){
    const inputArea= document.getElementById('add-input');
    if (!inputArea.style.maxWidth || inputArea.style.maxWidth==='0px'){
        inputArea.style.maxWidth = '100vw';
        document.getElementById('add-area-open').innerHTML=`<i class="fa-solid fa-x"></i></i>
        닫기`;
    }else{
        inputArea.style.maxWidth='0px';
        document.getElementById('add-area-open').innerHTML=`<i class="fa-solid fa-plus"></i>
        추가하기`;
    }  
})


/* add items */
let userList = [];
function addItem (){
    const inputText = document.getElementById('user-input').value;
    userList.push(inputText);
    let listHtml =''; 
    userList.forEach((item,index)=>{
        listHtml += 
            `<div class="d-mode-list-item row list-item">
                <div class="col-md-1">${index+1}</div>
                <div class="col-md-6" id="item-title">${item}</div>
                <div class="col-md-4 stopWatch" id="stopWatch">
                <i class="fa-regular fa-clock stopWatchBtn" id="stopWatchBtn"></i>
                <div>00:00:00</div>
                <i class="fa-solid fa-play" id="playBtn"></i>
                <i class="fa-solid fa-pause" id="pauseBtn"></i>
                </div>
                <i class="fa-regular fa-square-check col-md-1"></i>
            </div>
            `
    })
    document.getElementById('list-area').innerHTML=listHtml;
}

document.getElementById('user-input').addEventListener('keypress',function(e){
    if(e.key=='Enter'){
        addItem();
    }
})

document.getElementById('add-btn').addEventListener('click',function(){
    addItem();
})













// let listItem = document.querySelectorAll('.list-item');

// listItem.forEach((item)=>{
//     let stopWatchControl = item.querySelector('.stopWatch');
//     let itemTitle = item.querySelector('#item-title');
//     stopWatchControl.querySelector('#playBtn').addEventListener('click',function(){
//         console.log(`${itemTitle.innerHTML}시작`);
//         let timerInfo= stopWatch(itemTitle.innerHTML);
//         console(timerInfo);
//     })
// })

// listItem.forEach((item)=>{
//     let stopWatchControl = item.querySelector('.stopWatch');
//     let itemTitle = item.querySelector('#item-title');
//     stopWatchControl.querySelector('#pauseBtn').addEventListener('click',function(){
//         console.log(`${itemTitle.innerHTML}끝`);
//         clearInterval(startTimer[itemTitle.innerHTML])
//     })
// })

/* 스톱워치 기능 */
// function stopWatch (title) {
//     // console.log(startTimer);

//     let hour = 0;
//     let second = 0;
//     let minute = 0;
//     let time = 0;
//     // let time = startTimer[title][1]||0;

//     let timer= setInterval(function(){
//         time++;
//         second = time%60;
//         minute = Math.floor(time/60);
//         hour = Math.floor(minute/60);
//         minute = minute%60; 

//         startTimer[title] = [timer, time];

//         console.log(title, hour, minute, second);
//     },1000);


//     startTimer[title] = [timer, time];
//     console.log(startTimer);
// }