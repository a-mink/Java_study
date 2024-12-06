/*
1. 레시피 항목에 마우스 커서를 놓았을 때, 테두리가 빨간색으로 표시되도록 하는
함수 및 이벤트 처리 작성

2. 레시피 항목을 클릭시 상세 내용 팝업을 표시 
- 팝업창을 표시하는 위치는 화면의 정중앙, 사이즈는 임의로 조정
- 팝업 내용은 선택 항목에 관계없이 고정 페이지를 표시

2-1. 선택항목에 맞는 팝업 내용 표시

3. 레시피 항목을 클릭시 상세 내용 페이지를 표시

(주말에 시간 가능할 시, 개인 프로젝트) 4. 로그인 버튼을 누를 시 로그인 페이지로 이동
+ 로그인에 성공하면 화면창으로 돌아온 후 로그아웃버튼으로 활성화
*/

// 1번
const recipeGrid = document.getElementsByClassName("recipe-grid");
const recipeCards = Array.from(document.getElementsByClassName("recipe-card")); // 배열형태로 바꿔야 뒤에서 forEach를 사용할 수 있다.

recipeCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.borderColor = 'red';
        card.style.borderWidth = '3px';
    });

    card.addEventListener('mouseout', () => {
        card.style.borderColor = '#ddd';
        card.style.borderWidth = '1px';
    });
});

// 2번
const popup = document.getElementById('recipe-popup');
const closePopup = document.getElementById('close-popup');

/*
// 모든 카드 클릭해도 동일한 팝업창 뜨게하는 코드
recipeCards.forEach((card) => {
    card.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });
});

closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});
*/

// 2-1번
/* 
// card 데이터 저장
const recipes = [
    { id : 1, name : '방울토마토해물탕', type : '토마토 레시피', detail : '1. 방울토마토 해물탕 2. 방울토마토 해물탕'},
    { id : 2, name : '토마토된장찌개', type : '토마토 레시피', detail : '1. 토마토된장찌개 2. 토마토 된장찌개'},
    { id : 3, name : '토마토영양부추무침', type : '토마토 레시피', detail : '1. 토마토영양부추무침 2. 토마토영양부추무침'},
    { id : 4, name : '우엉무침(말랭이)', type : '우엉 레시피', detail : '1.우엉무침(말랭이) 2. 우엉무침(말랭이)'},
    { id : 5, name : '우엉꿀조림', type : '우엉 레시피', detail : '1. 우엉꿀조림 2. 우엉꿀조림'},
    { id : 6, name : '우엉국', type : '우엉 레시피', detail : '1. 우엉국 2. 우엉국'}
];

// 레시피마다 다른 팝업창 뜨게하고 닫는 코드
recipeCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const recipe = recipes[index];
        popup.classList.remove('hidden');
        popup.querySelector('h2').textContent = recipe.name;
        popup.querySelector('p').textContent = recipe.detail;
    });
});
*/

/*
// 팝업 닫는 코드
closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});
*/

// 3번
const recipes = [
    { id : 1, name : '방울토마토해물탕', type : '토마토 레시피', detail : '1. 방울토마토 해물탕 2. 방울토마토 해물탕', img : './img/thum_img_1.jpg'},
    { id : 2, name : '토마토된장찌개', type : '토마토 레시피', detail : '1. 토마토된장찌개 2. 토마토 된장찌개', img : './img/thum_img_2.jpg'},
    { id : 3, name : '토마토영양부추무침', type : '토마토 레시피', detail : '1. 토마토영양부추무침 2. 토마토영양부추무침', img : './img/thum_img_3.jpg'},
    { id : 4, name : '우엉무침(말랭이)', type : '우엉 레시피', detail : '1. 우엉무침(말랭이) 2. 우엉무침(말랭이)', img : './img/thum_img_4.jpg'},
    { id : 5, name : '우엉꿀조림', type : '우엉 레시피', detail : '1. 우엉꿀조림 2. 우엉꿀조림', img : './img/thum_img_5.jpg'},
    { id : 6, name : '우엉국', type : '우엉 레시피', detail : '1. 우엉국 2. 우엉국', img : './img/thum_img_6.jpg'}
];

recipeCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const recipe = recipes[index];
        const id = recipe.id
        const name = recipe.name;
        const detail = recipe.detail;
        const img = recipe.img;
       
        /* 창 이동하기
        window.location.href = `detail_page.html?id=${id}&name=${encodeURIComponent(name)}&detail=${encodeURIComponent(detail)}&img=${encodeURIComponent(img)}`;
        */

        /* 새창 띄우기 */
        const detailUrl = `detail_page.html?id=${id}&name=${encodeURIComponent(name)}&detail=${encodeURIComponent(detail)}&img=${encodeURIComponent(img)}`;
        window.open(detailUrl, '_blank', 'width=600, height=800');
    });
});
