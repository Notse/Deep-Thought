'use strict';

const expandBtn = document.querySelectorAll('.expand-btn');
const HamburgerMenu = document.querySelector('.board-title');
const Task_6 = document.querySelector('.task-6');

let Title = document.querySelector('.title');
let Cors = 'https://cors-anywhere.herokuapp.com/';


window.addEventListener('load', () => {
    fetch(`${Cors}https://dev.deepthought.education/assets/uploads/files/others/project.json`)
    .then(resp => resp.json())
    .then(data => {
        Title.textContent = data.title; //Project Title
        assetsContainer(data)
        Task_1(data.description);
        Task_4(data);
        Task_7(data);
        journeyBoard(data);

        if(screen.width < 600) {
            alert('Warning: This Page is Build for Big screens like Desktops etc. Do not View it on Mobile')
        }
    })
})

expandBtn.forEach((e,t) => {
    const desc = document.querySelectorAll('.task');
    e.addEventListener('click', ()=> {
            desc[t].classList.toggle('open-desc');
            e.classList.toggle('collapse');
    })
})

HamburgerMenu.addEventListener('click', () => {
    const board = document.querySelector('.journey-board');
    const boardContent = document.querySelector('.board-content');
    const notify = document.querySelector('.notify');
    board.classList.toggle('open-sidebar');
    boardContent.classList.toggle('board-show');
    notify.classList.toggle('close')
});

function Task_1(text) {
    let TaskContent = document.querySelector(".task-1-main-content");
    TaskContent.textContent = text;
}   

function Task_7(data){
    let iFrame = document.createElement("iframe");
    let video = document.querySelector('.yt-video');
    iFrame.src = data.tasks[0].assets[8].display_asset_video;
    iFrame.width = "100%";
    iFrame.height = "300px";
    iFrame.className = "ma-1"
    video.appendChild(iFrame);
}

function assetsContainer(data) {
    let TaskTitle = document.querySelectorAll('.task-title');
    let TextDesc = document.querySelectorAll('.text-description');
    let assetsTitle = document.querySelector('.assets-title');
    // Project Title
    assetsTitle.textContent = data.tasks[0].task_title;
    // Task Heading
    TaskTitle.forEach((e,i) => {
        e.textContent = data.tasks[0].assets[i].asset_title;
    }) 
    // Task Collapsible Desc
    TextDesc.forEach((e) => {
        e.textContent = data.tasks[0].assets[0].asset_description;
    })
}

function Task_4(data) {
    let Image = document.querySelector('.task-4-image');
    let FrameTag = document.createElement("iframe");
    // variables
    FrameTag.src = data.tasks[0].assets[3].display_asset_docs;
    FrameTag.width = "100%";
    FrameTag.height = "500px";
    Image.appendChild(FrameTag);
}

function journeyBoard(data) {
    let ListHeading = document.querySelector(".list-heading");
    let ListItems = document.querySelectorAll(".list-subcontent-items");    
    // variables
    ListHeading.textContent = data.tasks[0].task_title;
    ListItems.forEach((e, i) =>{
        e.textContent = data.tasks[0].assets[i].asset_title;
    })
    
}