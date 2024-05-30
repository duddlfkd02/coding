const saveBtn = document.getElementById('save');
const textInput = document.getElementById('text');
const fileInput = document.getElementById('file');
const modebBtn = document.getElementById('mode-btn');
const destroyBtn = document.getElementById('destroy-btn');
const eraseBtn = document.getElementById('erase-btn');
const colorOptions = Array.from(document.getElementsByClassName('color-option'));
//색상값을 배열 변수로 담기
const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value; /* input의 브러쉬 굵기*/
ctx.lineCap = 'round';
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
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function onDestroyClick() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraseClick() {

    ctx.strokeStyle = 'white';
    isFilling = false;
    modebBtn.innerText = "Fill";
}

function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

function onDoubleClick(event) {
    ctx.save(); /* 현재 상태를 모두 저장 */
    const text = textInput.value;
    if (text !== "") {
        ctx.lineWidth = 1;
        ctx.font = '68px sans-serif';
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
}

function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url
    a.download = 'myDraw.png';
    a.click();
}

canvas.addEventListener('dblclick', onDoubleClick);
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);


colorOptions.forEach((color) => color.addEventListener('click', onColorClick));

modebBtn.addEventListener('click', onModeClick);
destroyBtn.addEventListener('click', onDestroyClick);
eraseBtn.addEventListener('click', onEraseClick);
fileInput.addEventListener('change', onFileChange);
saveBtn.addEventListener('click', onSaveClick);
