import { search } from "core-js/fn/symbol";

export default function getRefs(){
    return  {
        formControl : document.querySelector('.form-control'),
        searchForm: document.querySelector('.js-search-form')
    };
}