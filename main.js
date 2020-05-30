//Существует много способов выбрать DOM узел; здесь мы получаем форму и электронную почту
//поле ввода, а также элемент span, в который мы поместим сообщение об ошибке.
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');
// As per the HTML5 Specification
// var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener("input", function (event) {
 // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
  // является ли корректным поле электронной почты.
  if (email.validity.valid) {
    // В случае появления сообщения об ошибке, если поле
    // является корректным, мы удаляем сообщение об ошибке.
    error.innerHTML = ""; // Сбросить содержимое сообщения
    email.classList.remove('invalid'); // Сбросить визуальное состояние сообщения
    email.style.marginBottom = "10px";
  }
}, false);
form.addEventListener("submit", function (event) {
  // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
   // валидность поля электронной почты.
  if (!email.validity.valid) {
    
    // Если поле невалидно, отображается пользовательское
    // сообщение об ошибке.
    error.innerHTML = "Please provide a valid email address";
    error.style.marginBottom = "10px";
    email.style.marginBottom = "0px";
    email.classList.add('invalid'); 
    // И мы предотвращаем отправку формы путем отмены события
    event.preventDefault();
  }
}, false);