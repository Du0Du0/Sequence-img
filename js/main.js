const target = 'figure';
const num = 200;

//figure에 안쪽에 동적으로 200개 이미지 돔생성해서 리턴하는 함수 호출
//동적으로 돔을 생성하자마자 리턴해주는 요소를 바로 변수에 담음
const imgDOM = createImgs(target, num);

//마우스무스시 포인터 좌표값 200분율로 변경
window.addEventListener('mousemove', (e) => matchMove(imgDOM, num, e));

//동적 이미지 생성 함수
function createImgs(target, num) {
	const frame = document.querySelector(target);
	let imgs = '';
	for (let i = 0; i < num; i++) {
		imgs += `<img src='img/pic${i}.jpg' />`;
	}
	frame.innerHTML = imgs;
	//돔을 생성하자마자 바로 활용할 수 있도록 생성된 요소를 내보내주기까지하는 코드
	return frame.querySelectorAll('img');
}

//마우스 포인터 위치와 이미지 순서 매칭 함수
function matchMove(arrEl, num, e) {
	const percent = parseInt((e.clientX / window.innerWidth) * num);

	for (const img of arrEl) img.style.display = 'none';
	arrEl[percent].style.display = 'block';
}
