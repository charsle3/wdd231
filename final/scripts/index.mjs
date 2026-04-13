if (!localStorage.getItem('visited')){
    disclaimer.showModal();
    localStorage.setItem('visited', true);
};

import GetDate from './date.mjs';
import Navigation from './navigation.mjs';
import DisclaimerModal from './disclaimer.mjs';

GetDate();
Navigation();
DisclaimerModal();