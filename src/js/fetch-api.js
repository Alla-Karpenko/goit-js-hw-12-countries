import API from './fetchCountries';
import pnotify from './notifications';
import debounce from 'lodash.debounce';
import { render } from 'node-sass';
import getRefs from './get-refs';
import countryCard from '../templates/country-card.hbs';
import fetchCountries from './fetchCountries';

const refs = getRefs();

refs.formControl.addEventListener('input', debounce(onSearch), 500);

function onSearch (e) {
  e.preventDefault();
   
  const form = e.currenttarget;
  const searchQuery = form.query.value;
  
   
  fetchCountries(searchQuery)
  .then(renderCountries)
  .catch(error => console.log(error))
  .finally(() => form.reset());
}

function  renderCountries(name) {
    const markup = countryCard(name);
    refs.formControl.innerHTML = markup;
    console.log(countryCard) 
}
 
  //   const respons = API.fetchCountries(searchQuery)
  //   .then(BASE_URL )
  //   .catch(noti);
 


// function renderCountries (name) {
//   const markup = 
// }


// fetch(`https://restcountries.eu/rest/v2/name`)
// .then(response => {
//     return response.json()  
// })
// .then(name => {
//   console.log(name);
//   const markup = countryCard(name);
//   refs.formControl.innerHTML = markup;
// })




