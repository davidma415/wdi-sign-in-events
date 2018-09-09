document.addEventListener("DOMContentLoaded", function() {
  var signButton = document.querySelector('.signin');
  var modal = document.querySelector('.modal');

  signButton.addEventListener('click', function() {
    modal.style.display = 'block';
  })

  var close = document.querySelector('.close');

  close.addEventListener('click', function() {
    modal.style.display = 'none';
  })

  var submit = document.querySelector('.submit');
  var userField = document.getElementById('user');
  var passField = document.getElementById('pass');
  submit.addEventListener('click', function() {
    userField.classList.add('error');
    passField.classList.add('error');
  })

  userField.addEventListener('click', function() {
    userField.classList.remove('error');
  })

  passField.addEventListener('click', function() {
    passField.classList.remove('error');
  })

  modal.addEventListener('click', function() {
    modal.style.display = 'none';
  })
})
