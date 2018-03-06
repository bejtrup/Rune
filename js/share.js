'use strict';
    function sleep(delay) {
      return new Promise(resolve => {
        setTimeout(resolve, delay);
      });
    }
    function logText(message, isError) {
      if (isError)
        console.error(message);
      else
        console.log(message);
      const p = document.createElement('p');
      if (isError)
        p.setAttribute('class', 'error');
      document.querySelector('#output').appendChild(p);
      p.appendChild(document.createTextNode(message));
    }
    function logError(message) {
      logText(message, true);
    }
    function checkboxChanged(e) {
      const checkbox = e.target;
      const textfield = document.querySelector('#' + checkbox.id.split('_')[0]);
      textfield.disabled = !checkbox.checked;
      if (!checkbox.checked)
        textfield.value = '';
    }
    async function testWebShare() {
      if (navigator.share === undefined) {
        logError('Error: Unsupported feature: navigator.share');
        return;
      }
      const title_input = document.querySelector('#title');
      const text_input = document.querySelector('#text');
      const url_input = document.querySelector('#url');
      const title = title_input.disabled ? undefined : title_input.value;
      const text = text_input.disabled ? undefined : text_input.value;
      const url = url_input.disabled ? undefined : url_input.value;
      try {
        await navigator.share({title, text, url});
      } catch (error) {
        logError('Error sharing: ' + error);
        return;
      }
      logText('Successfully sent share');
    }
    async function testWebShareDelay() {
      await sleep(2000);
      testWebShare();
    }
    function onLoad() {
      // Checkboxes disable and delete textfields.
      document.querySelector('#title_checkbox').addEventListener('click',
          checkboxChanged);
      document.querySelector('#text_checkbox').addEventListener('click',
          checkboxChanged);
      document.querySelector('#url_checkbox').addEventListener('click',
          checkboxChanged);
      document.querySelector('#share').addEventListener('click', testWebShare);
      document.querySelector('#share-no-gesture').addEventListener('click',
          testWebShareDelay);
      if (navigator.share === undefined) {
        logError('Error: You need to use a browser that supports this draft ' +
                 'proposal.');
      }
    }
    window.addEventListener('load', onLoad);
