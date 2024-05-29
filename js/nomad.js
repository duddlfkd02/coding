const modebBtn = document.getElementById('mode-btn');
const colorOptions = Array.from(document.getElementsByClassName('color-option'));
//색상값을 배열 변수로 담기
const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

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

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue; // 선택한 색상을 input에 보여지게 설정
}

function onModeClick() {
    if (isFilling) {
        isFilling = false;
        modebBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modebBtn.innerHTML = "Draw";
    }
}

function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, 600, 600);
    }
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);

colorOptions.forEach((color) => color.addEventListener('click', onColorClick));

modebBtn.addEventListener('click', onModeClick);