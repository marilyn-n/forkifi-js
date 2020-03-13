import Search from './models/Search';
import * as searchView from './views/searchView';

/* 
 Global state of the app
 - Search object
 - Current recipe object
 - Shopping list object
 - Liked recipes   
*/

const state = {}

const form = document.querySelector('.search');

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();
  if (query) {
    // add new search object to the state object
    state.search = new Search(query);

    // UI results

    try {
      // 4) Search for recipes
      await state.search.getResults();

      // 5) Render results on UI
      searchView.renderResults(state.search.result);
      } catch (err) {
          alert('Something wrong with the search...');
      }
  }
  
}

form.addEventListener('submit', e =>  {
  e.preventDefault();
  controlSearch();
});