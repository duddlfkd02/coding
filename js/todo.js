let input = prompt('무엇을 하고싶으신가요?');
const todos = ['쓰레기 버리기', '마곡역 가기'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('********************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('********************')
    } else if (input === 'new') {
        const newTodo = prompt('새로 할 일은 무엇인가요?');
        todos.push(newTodo);
        console.log(`${newTodo} 목록이 추가되었습니다.`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('삭제할 목록의 번호는 무엇인가요?'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]}가 삭제되었습니다.`);
        }
        console.log('목록을 찾지 못했습니다.');
    }
    input = prompt('무엇을 하고싶으신가요?');
}

console.log('앱 종료하기');