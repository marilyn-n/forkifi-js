export const getInput = () => document.querySelector('.search__field').value;
export const clearInput = () => {
  document.querySelector('.search__field').value = ''
};

export const clearResults = () => {
  document.querySelector('.results__list').innerHTML = '';
}

export const renderLoader = parent => {
  const loader = `
  <div class="loader">
    <svg>
      <use href="img/icons.svg#loader"><use>
    <svg>
  <div/>
  `
  parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) loader.parentElement.removeChild(loader);

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

const createButton = (page, type) => `
<button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
  <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>  
  <svg class="search__icon">
      <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
  </svg>
</button>`

const renderButton = (page, numResults, resPerPage) => {
  const searchResPages = document.querySelector('.results__pages');
  const pages = Math.ceil(numResults / resPerPage);
  let button;
 if (page === 1 && page > pages) {
    button = createButton(page, 'next')
 } else if (page < pages) {
   button = `
   ${createButton(page, 'next')}
   ${createButton(page, 'prev')}
   `
 } else if (page === pages && pages > 1) {
  button = createButton(page, 'prev')
 }
 searchResPages.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (recipes, page = 1, resPage = 10) => {
  // render results of current page
  const start = (page - 1) * resPage;
  const end = page * resPage;
  recipes.slice(start, end).forEach(renderRecipe);
  // render pagination buttons 
    renderButton(page, recipes.length, resPage);
}