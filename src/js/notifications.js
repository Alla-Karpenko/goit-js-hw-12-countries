
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const errors = () => error({
   // title: 'Warning!',
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 2000,
    //closerHover: true,
});

export default errors() ;



