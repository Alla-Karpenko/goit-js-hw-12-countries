
 import { alert, defaultModules } from 'pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from 'pnotify/mobile/dist/PNotifyMobile.js';
 
  defaultModules.set(PNotifyMobile, {});
 
  alert({
    text: 'Too many matches found.'
});



