var todo = document.querySelector('#todo'),
      form = document.querySelector('form'),
      field = document.querySelector('#newitem');
    
form.addEventListener('submit', function(e) {
    var text = field.value;
    if (text !== '') {
      todo.innerHTML += '<li>' + text + '</li>';
      field.value = '';
      field.focus();
    }
    e.preventDefault();
  }, false);

todo.addEventListener('click', function(e) {
    var target = e.target;
    if (target.tagName === 'LI') {
      if (target.classList.contains('done')) {
        target.parentNode.removeChild(target);
      } else {  
        target.classList.add('done');
      }
    };
    e.preventDefault();
  }, false);