import debounce from 'lodash.debounce';
import axios from 'axios';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import template from '../templates/countryTable.hbs';


const input = document.querySelector( `.search` );
const ul = document.querySelector( `.countries` );

input.addEventListener( `input`, debounce( getCounties, 1000 ) );

function getCounties (e) {
    const searchQuery = e.target.value;
    const baseUrl = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    axios.get( baseUrl )
        .then( response => {
            const data = response.data;
            ul.innerHTML = ``;
            if( data.length === 1 ) {
                const markup = data.reduce( ( acc, el ) => `${acc}` + `${template( el )}`, `` );
                ul.insertAdjacentHTML( `beforeend`, markup );
            } else if( data.length > 1 && data.length <= 10 ) {
                const markup = data.reduce( ( acc, el ) => `${acc}` + `<li class="countries-list">${el.name}</li>`, `` );
                ul.insertAdjacentHTML( `beforeend`, markup );
            } else if( data.length > 10 ) {
                error( {
                  text: 'Too many matches found. Please enter a more specific query!',
                  delay: 2000,
                } );
            }
        } )
        .catch( err => {
            ul.innerHTML = ``;

            error( {
              text: 'Enter correct request',
              delay: 2000,
            });
        } )
};