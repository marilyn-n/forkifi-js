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
    //2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearResults();
    searchView.clearInput();
    searchView.renderLoader(document.querySelector('.results'));

    try {
      // 4) Search for recipes
      await state.search.getResults();

      // 5) Render results on UI
      searchView.clearLoader();
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