'use strict';

(function () {

  var ClassForManipulation = {
    HIDDEN: 'visually-hidden',
    SEARCH_FORM_OPEN: 'search-form-container-open',
    MESSAGE_ERROR: 'message-error',
    MESSAGE_ERROR_TEXT: 'message-error-text',
    MINUS: 'operation-minus',
    PLUS: 'operation-plus'
  };

  var KeyCode = {
    ENTER: 13,
    ESC: 27
  };

  var searchFormDisplayButton = document.querySelector('.search-form-display');
  var searchForm = document.querySelector('.search-form-container');
  var inputDateArrival = searchForm.querySelector('#date-arrival');
  var inputDateDeparture = searchForm.querySelector('#date-departure');
  var inputAdults = searchForm.querySelector('#adults');
  var minusAdults = searchForm.querySelector('#adults-minus');
  var plusAdults = searchForm.querySelector('#adults-plus');
  var inputChildren = searchForm.querySelector('#children');
  var minusChildren = searchForm.querySelector('#children-minus');
  var plusChildren = searchForm.querySelector('#children-plus');

  var openSearchForm = function () {
    searchForm.classList.remove(ClassForManipulation.HIDDEN);
    searchForm.classList.add(ClassForManipulation.SEARCH_FORM_OPEN);
  };
  var closeSearchForm = function () {
    searchForm.classList.add(ClassForManipulation.HIDDEN);
    searchForm.classList.remove(ClassForManipulation.SEARCH_FORM_OPEN);
  };

  var searchFormDisplayButtonClickHandler = function () {
    if (searchForm.classList.contains(ClassForManipulation.HIDDEN)) {
      openSearchForm();
    } else {
      closeSearchForm();
    }
  };

  var documentKeyDownHandler = function (evt) {
    if (evt.keyCode === KeyCode.ESC) {
      closeSearchForm();
    }
  };

  searchFormDisplayButton.addEventListener('click', searchFormDisplayButtonClickHandler);
  document.addEventListener('keydown', documentKeyDownHandler);

  minusAdults.addEventListener('click', function (evt) {
    if (evt.target.classList.contains(ClassForManipulation.MINUS) && inputAdults.value > 1) {
      --inputAdults.value;
    }
  });

  plusAdults.addEventListener('click', function (evt) {
    if (evt.target.classList.contains(ClassForManipulation.PLUS)) {
      ++inputAdults.value;
    }
  });

  minusChildren.addEventListener('click', function (evt) {
    if (evt.target.classList.contains(ClassForManipulation.MINUS) && inputChildren.value > 0) {
      --inputChildren.value;
    }
  });

  plusChildren.addEventListener('click', function (evt) {
    if (evt.target.classList.contains(ClassForManipulation.PLUS)) {
      ++inputChildren.value;
    }
  });
})();
