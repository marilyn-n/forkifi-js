export const getInput = () => document.querySelector('.search__field').value;
export const clearInput = () => {
  document.querySelector('.search__field').value = ''
};

export const clearResults = () => {
  document.querySelector('.results__list').innerHTML = '';
}

const renderRecipe = recipe => {
  const recipeResultsList = document.querySelector('.results__list');
  const markup = 
  `
  <li>
      <a class="results__link" href="#${recipe.recipe_id}">
          <figure class="results__fig">
              <img src="${recipe.image_url}" alt="Test">
          </figure>
          <div class="results__data">
              <h4 class="results__name">${recipe.title}</h4>
              <p class="results__author">${recipe.publisher}</p>
          </div>
      </a>
  </li>
  `
  recipeResultsList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
}