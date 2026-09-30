(function () {
  'use strict';
  var navigation = document.querySelector('.book-tabs');
  var tabs = Array.from(navigation.querySelectorAll('a'));
  var panels = tabs.map(function (tab) { return document.querySelector(tab.getAttribute('href')); });
  navigation.setAttribute('role', 'tablist');
  tabs.forEach(function (tab, index) {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
    tab.addEventListener('click', function (event) {
      event.preventDefault();
      select(index);
      history.replaceState(null, '', tab.getAttribute('href'));
    });
    tab.addEventListener('keydown', function (event) {
      var next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        tabs[next].focus();
        tabs[next].click();
      }
    });
  });
  function select(index) {
    tabs.forEach(function (tab, i) {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
  }
  function selectFromHash() { select(location.hash === '#recommend-book' ? 1 : 0); }
  selectFromHash();
  window.addEventListener('hashchange', selectFromHash);

  var form = document.getElementById('book-recommendation-form');
  var name = document.getElementById('recommend-name');
  var title = document.getElementById('recommend-title');
  var author = document.getElementById('recommend-author');
  var message = document.getElementById('recommend-message');
  var subject = document.getElementById('recommend-subject');
  var draft = document.getElementById('recommend-draft');
  var status = document.getElementById('recommend-status');
  function oneLine(value) { return value.replace(/\s+/g, ' ').trim(); }
  function updateDraft() {
    var sender = oneLine(name.value);
    subject.textContent = 'Book Recommendation' + (sender ? ' by ' + sender : '');
    var body = 'Book: ' + oneLine(title.value);
    if (oneLine(author.value)) body += '\r\nAuthor: ' + oneLine(author.value);
    if (message.value.trim()) body += '\r\n\r\nWhy I recommend it:\r\n' + message.value.trim();
    if (sender) body += '\r\n\r\nRecommended by: ' + sender;
    draft.href = 'mailto:prachigarella@prachigarella.com?subject=' + encodeURIComponent(subject.textContent) + '&body=' + encodeURIComponent(body);
  }
  form.hidden = false;
  form.addEventListener('input', function () {
    title.setCustomValidity('');
    updateDraft();
    draft.hidden = true;
    status.textContent = '';
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    title.setCustomValidity(oneLine(title.value) ? '' : 'Please enter a book title.');
    if (!form.reportValidity()) return;
    updateDraft();
    draft.hidden = false;
    status.textContent = 'Your email app should open with a draft. If it does not, use the email address above.';
    draft.click();
  });
  updateDraft();
}());
