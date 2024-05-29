const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = lineWidth.value;
let isPainting = false;
function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath(); //선을 그리는게 끝나면 다시 시작 (선 두께 바꿔도 이전꺼에 영향 안 줌)
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(event) {
    isPainting = true;
}

function cancelPainting(event) {
    isPainting = false;
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}


canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

lineWidth.addEventListener('change', onLineWidthChange);



///**********************************/

//1. 집 그리기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

///**********************************/

//2. 사람 만들기 원!!
// ctx.fillRect(200 - 35, 200 - 30, 15, 100);
// ctx.fillRect(350 - 35, 200 - 30, 15, 100);
// ctx.fillRect(250 - 35, 200 - 30, 70, 200);

// ctx.arc(250, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = 'white';
// ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.fill();

///**********************************/

//3. 마우스 따라서 선 생성 (색 랜덤으로 바뀜)
// function onClick(event) {
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// const colors = [
//     '#C3FF93',
//     '#FFDB5C',
//     '#FFAF61',
//     '#FF70AB',
//     '#CAF4FF',
//     '#5AB2FF'
// ];

// canvas.addEventListener('mousemove', onClick);