document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
  var firstName = document.querySelector('#first-name').value;
  var lastName = document.querySelector('#last-name').value;
  var phone = document.querySelector('#phone').value;
  var email = document.querySelector('#email').value;
  var text = document.querySelector('#text').value;

  if (firstName.length < 2 || lastName.length < 2 || phone.length < 10 || email.length < 3 || text.length < 1){
    alert("Заполните все поля");
  } else {
    var notification = document.createElement("div");

    notification.textContent = "Вы (" + firstName + " " + lastName + ") оставили заявку:\n" 
                        + "Телефон: " + phone + "\n" 
                        + "Почта: " + email;

    notification.style.position = "fixed";
    notification.style.top = "50%";
    notification.style.left = "50%";
    notification.style.transform = "translate(-50%, -50%)";
    notification.style.backgroundColor = "lightgray";
    notification.style.borderRadius = "30%";

    notification.style.padding = "20px";
    notification.style.border = "2px solid black";

    document.body.appendChild(notification);

    setTimeout(function() {
      document.body.removeChild(notification);
    }, 3000); 

  }
});