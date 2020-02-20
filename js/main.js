'use strict';

(function () {

  var CLASS_FOR_DISPLAY_FORM = 'visually-hidden';

  var searchFormDisplayButton = document.querySelector('.search-form-display');
  var searchForm = document.querySelector('.search-form-container');
  searchForm.classList.add(CLASS_FOR_DISPLAY_FORM);

  var searchFormDisplayButtonClickHandler = function () {
    if (searchForm.getAttribute('class') === 'search-form-container ' + CLASS_FOR_DISPLAY_FORM) {
      searchForm.classList.remove(CLASS_FOR_DISPLAY_FORM);
    } else {
      searchForm.classList.add(CLASS_FOR_DISPLAY_FORM);
    }
  };

  searchFormDisplayButton.addEventListener('click', searchFormDisplayButtonClickHandler);

})();
