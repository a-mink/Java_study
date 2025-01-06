// script.js

// URL에서 쿼리 파라미터 추출
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const name = urlParams.get('name');
const detail = urlParams.get('detail');
const img = urlParams.get('img');

// DOM 요소 참조
const recipeNameElement = document.getElementById('recipe-name');
const recipeDetailElement = document.getElementById('recipe-detail');
const recipeImgElement = document.getElementById('recipe-img');
const deleteButton = document.getElementById('delete-button');

// 레시피 정보를 페이지에 표시
recipeNameElement.textContent = name;
recipeDetailElement.textContent = detail;
recipeImgElement.src = img;
recipeImgElement.alt = `${name} 이미지`; // 이미지가 로딩되지 않을 때 표시되는 내용. + 시각 장애인들에게 표시되는 내용

// 삭제 버튼 클릭 이벤트
deleteButton.addEventListener('click', () => {
    const confirmation = confirm(`${name} 레시피를 삭제하시겠습니까?`);
    if (confirmation) {
        // 삭제 로직 (예: 서버 연동)
        alert(`${name} 레시피가 삭제되었습니다.`);

        window.close();

        // 삭제 후 메인 페이지로 이동(팝업일때는 윗줄 주석처리하고 메인페이지로 이동만 실행)
        window.location.href = 'main.html';
    }
});
