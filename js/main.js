const target = 'figure';
const num = 200;
const mask = document.querySelector('aside');
const convertedSpeed = convertSpeed(mask);

//figure에 안쪽에 동적으로 200개 이미지 돔생성해서 리턴하는 함수 호출
//동적으로 돔을 생성하자마자 리턴해주는 요소를 바로 변수에 담음
const imgDOM = createImgs(target, num);

let count = 0;

imgDOM.forEach((img) => {
	img.onload = () => {
		count++;
		if (count === 200) {
			console.log('이미지 소스 로딩 완료');
			mask.classList.add('off');

			setTimeout(() => {
				mask.remove();
			}, convertedSpeed);
		}
	};
	img.onerror = () => {
		console.log('이미지 출력 중 에러');
	};
});

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

//돔이 생성되었다고 로딩이 완료된건 아님 (틀만 완성됨)

//마우스 포인터 위치와 이미지 순서 매칭 함수
function matchMove(arrEl, num, e) {
	const percent = parseInt((e.clientX / window.innerWidth) * num);

	for (const img of arrEl) img.style.display = 'none';
	arrEl[percent].style.display = 'block';
}

function convertSpeed(el) {
	return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
}
