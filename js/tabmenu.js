// let tabs = document.querySelectorAll("[data-tab-target]");
// let content = document.querySelectorAll("[data-tab-content]");

// tabs.forEach((tab) => {
//     tab.addEventListener('click', function () {
//         let target = document.querySelector(tab.dataset.tabTarget);
//         content.forEach((tabc_all) => {
//             tabc_all.classList.remove('active');
//         });

//         target.classList.add('active');
//     })
// })

let tabItem = document.querySelectorAll('.tab'); //tab 모두 변수에 담음
let tabContent = document.querySelectorAll('.list'); //콘텐츠 내용 모두 변수에 담음


//탭 3개를 순회, 클릭하면 함수 실행 
tabItem.forEach((item, index) => {
    item.addEventListener('click', function () {
        // e.defaultPrevented(); (*li안에 a태그를 넣었다면 이벤트 제거 추가하기)

        tabContent.forEach((content) => { //콘텐츠 내용도 한번씩 순회하면서 active 클래스 추가 (콘텐츠 display block)
            content.classList.remove('active');
        });

        tabItem[index].classList.add('active');
        tabContent[index].classList.add('active');
    })
})