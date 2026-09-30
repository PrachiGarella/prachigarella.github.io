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
  var status = document.getElementById('recommend-status');
  var button = form.querySelector('button[type="submit"]');
  var sending = false;
  // Set the public form endpoint after creating the inbox in Formspree.
  var endpoint = form.dataset.endpoint;
  var configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);
  form.hidden = false;
  button.disabled = !configured;
  if (!configured) status.textContent = 'Recommendations are temporarily unavailable. Please check back soon.';
  function oneLine(value) { return value.replace(/\s+/g, ' ').trim(); }
  function updateSubject() {
    var sender = oneLine(name.value);
    form.elements.subject.value = 'Book Recommendation' + (sender ? ' by ' + sender : '');
  }
  form.addEventListener('input', function () {
    title.setCustomValidity('');
    updateSubject();
    if (!sending && configured) status.textContent = '';
  });
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (sending || !configured) return;
    title.setCustomValidity(oneLine(title.value) ? '' : 'Please enter a book title.');
    if (!form.reportValidity() || form.elements._gotcha.value) return;
    updateSubject();
    var payload = {
      book: oneLine(title.value),
      author: oneLine(author.value),
      message: message.value.trim(),
      name: oneLine(name.value),
      subject: form.elements.subject.value,
      _gotcha: ''
    };
    sending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    var inputs = Array.from(form.querySelectorAll('input:not([type="hidden"]), textarea'));
    inputs.forEach(function (input) { input.readOnly = true; });
    status.textContent = 'Sending your recommendation…';
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 20000);
    try {
      var response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      var result = await response.json();
      if (response.ok && result.ok === true) {
        form.reset();
        updateSubject();
        status.textContent = 'Thank you! Your recommendation has been submitted.';
      } else {
        status.textContent = 'Your recommendation could not be submitted. Please try again; your text is still here.';
      }
    } catch (error) {
      status.textContent = 'We could not confirm your submission. Your text is still here; please try again shortly.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
      inputs.forEach(function (input) { input.readOnly = false; });
    }
  });
  updateSubject();
}());
