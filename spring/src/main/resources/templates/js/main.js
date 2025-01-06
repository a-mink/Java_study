/*
1. 레시피 항목에 마우스 커서를 놓았을 때, 테두리가 빨간색으로 표시되도록 하는
함수 및 이벤트 처리 작성

2. 레시피 항목을 클릭시 상세 내용 팝업을 표시 
- 팝업창을 표시하는 위치는 화면의 정중앙, 사이즈는 임의로 조정
- 팝업 내용은 선택 항목에 관계없이 고정 페이지를 표시

2-1. 선택항목에 맞는 팝업 내용 표시

3. 레시피 항목을 클릭시 상세 내용 페이지를 표시
*/

// 1번
const recipeGrid = document.getElementsByClassName("recipe-grid");
const recipeCards = Array.from(document.getElementsByClassName("recipe-card")); // 배열형태로 바꿔야 뒤에서 forEach를 사용할 수 있다.

recipeCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.borderColor = 'red';
        card.style.borderWidth = '5px';
    });

    card.addEventListener('mouseout', () => {
        card.style.borderColor = '#ddd';
        card.style.borderWidth = '1px';
    });
});

const main = ${recipesJson};

// 3번

recipeCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const recipe = main[index];
        const id = recipe.id
        const name = recipe.name;
        const detail = recipe.detail;
        const img = recipe.img;
       
        // 창 이동하기
        // window.location.href = `detail_page.html?id=${id}&name=${encodeURIComponent(name)}&detail=${encodeURIComponent(detail)}&img=${encodeURIComponent(img)}`;
        

        /* 새창 띄우기 */
        const detailUrl = `detail_page.html?id=${recipe.id}&name=${encodeURIComponent(recipe.name)}&detail=${encodeURIComponent(recipe.detail)}&img=${encodeURIComponent(recipe.img)}`;
        window.open(detailUrl, '_blank', 'width=1000, height=700');
    });
});


// 레시피 조회/등록 기능
const searchBtn = document.getElementById('recipe-search');
const recipeNumberInput = document.getElementById('recipe-number');
const recipeGrid = document.querySelector('.recipe-grid');

// 레시피 필터링 및 표시 함수
function filterRecipes() {
    const recipeNumber = parseInt(recipeNumberInput.value, 10);

    // 유효한 레시피 번호가 입력되었을 경우
    if (recipeNumber && recipeNumber >= 1 && recipeNumber <= main.length) {
        const selectedRecipe = main.filter(recipe => recipe.id === recipeNumber);

        // 레시피 그리드 비우기
        recipeGrid.innerHTML = '';

        // 해당 레시피만 그리드에 추가
        selectedRecipe.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.style.backgroundImage = `url(${recipe.img})`;

            const recipeType = document.createElement('a');
            recipeType.classList.add('type-recipe');
            recipeType.textContent = recipe.type;

            const recipeName = document.createElement('a');
            recipeName.classList.add('name-recipe');
            recipeName.textContent = recipe.name;

            recipeCard.appendChild(recipeType);
            recipeCard.appendChild(recipeName);
            recipeGrid.appendChild(recipeCard);

            recipeCard.addEventListener('click', () => {
                // 레시피 클릭 시 상세 보기
                const detailUrl = `detail_page.html?id=${recipe.id}&name=${encodeURIComponent(recipe.name)}&detail=${encodeURIComponent(recipe.detail)}&img=${encodeURIComponent(recipe.img)}`;
                window.open(detailUrl, '_blank', 'width=1000, height=700');
            });
        });
    } else {
        alert('유효한 레시피 번호를 입력해주세요.');
    }
}

// 버튼 클릭 시 필터링 실행
searchBtn.addEventListener('click', filterRecipes);

// 레시피 등록 버튼 클릭 시 등록 페이지로 이동
const addRecipe = document.getElementById('add-recipe');
addRecipe.addEventListener('click', () => {
    // 레시피 등록 페이지로 이동
    window.location.href = 'add_recipe_page.html';  // 실제 등록 페이지 URL로 수정
});
