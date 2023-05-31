const frame = document.querySelector('figure');

//동적 imgDOM 생성
let imgs = '';

for (let i = 0; i < 200; i++) {
	imgs += `<img src='img/pic${i}.jpg' />`;
}

frame.innerHTML = imgs;

const imgDOM = frame.querySelectorAll('img');

//마우스무스시 포인터 좌표값 200분율로 변경
window.addEventListener('mousemove', (e) => {
	const percent = parseInt((e.clientX / window.innerWidth) * 200);

	for (const img of imgDOM) img.style.display = 'none';
	imgDOM[percent].style.display = 'block';
});

//백분율 구하는 공식
// 현재수치(마우스 포인터 위치값) / 전체수치(브라우저 넓이값) *100

//console.log('outerWid', window.outerWidth);
//console.log('innerWid', window.innerWidth);

//백분율 구하는 공식
//전체수치(브라우저 넓이 값)/ 현재수치(마우스 포인터 위치값) * 100 - 이건 백분율

////전체수치(브라우저 넓이 값)/ 현재수치(마우스 포인터 위치값) * 245 - 이건245분율
