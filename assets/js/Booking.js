// if user is not login
if(JSON.parse(localStorage.getItem("user"))) {
  document.getElementById("name").value = JSON.parse(localStorage.getItem("user"))["name"];
}
function booking() {
  if(!JSON.parse(localStorage.getItem("user"))){
    alert("You need to login to book a table!")
  }
}

//person buttons
function change(id){
  element = document.getElementById(id);
  if(element.classList != "button_active")
    element.classList.toggle("button_active")
  if(id != "change_2_person")
  {
    element = document.getElementById("change_2_person");
    if(element.classList == "button_active")
      element.classList.toggle("button_active")
  }
  if(id != "change_4_person")
  {
    element = document.getElementById("change_4_person");
    if(element.classList == "button_active")
      element.classList.toggle("button_active")
  }
  if(id != "change_6_person")
  {
    element = document.getElementById("change_6_person");
    if(element.classList == "button_active")
      element.classList.toggle("button_active")
  }
  if(id != "change_8_person")
  {
    element = document.getElementById("change_8_person");
    if(element.classList == "button_active")
      element.classList.toggle("button_active")
  }
  if(id != "change_10_person")
  {
    element = document.getElementById("change_10_person");
    if(element.classList == "button_active")
      element.classList.toggle("button_active")
  }
}

//Form Submit
document.getElementById('form_booking').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission
  
  fetch('php/booking/booking.php', {
      method: 'POST',
      body: new FormData(this)
  })
  .then(response => response.json())
  .then(data => {
      const reservation_info = data;
      reservation_error(reservation_info);
      //console.log(reservation_info);
  });
});

//error_registration
function reservation_error(reservation_info)
{
  reservation_created = true;
  const error = document.getElementById('error_reservation');
  error.innerHTML = '';

  if (reservation_info['empty_input'] && reservation_created) {
    error.innerHTML = reservation_info['empty_input'];
    reservation_created = false;
  }
  if (reservation_info['invalid_phon'] && reservation_created) {
    error.innerHTML = reservation_info['invalid_phon'];
    reservation_created = false;
  }
  if (reservation_info['no_table'] && reservation_created) {
    error.innerHTML = reservation_info['no_table'];
    reservation_created = false;
  }
  if (reservation_created) {
    alert(reservation_info);
  }
}

//Date change
document.getElementById('date').addEventListener("change", function(event) {
  event.preventDefault(); // Prevents the default form submission
  
  // Obțineți formularul de rezervare
  const bookingForm = document.getElementById('form_booking');
  
  // Creați un obiect FormData cu formularul de rezervare
  const formData = new FormData(bookingForm);
  
  // Adăugați datele suplimentare necesare pentru a indica acțiunea utilizatorului
  formData.append('action', 'date_change');
  
  // Trimiteți cererea către PHP
  fetch('php/booking/booking.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      const time_info = data;
      desplay_times(time_info);
      //console.log(time_info);
  });
});

function desplay_times(time_info)
{
  var options = document.querySelectorAll('.input-field option');

  options.forEach(function(option) {
    if (option.value in time_info) {
      //console.log(option.value);
      option.removeAttribute('hidden');
    } else {
      option.setAttribute('hidden', '');
    }
  });
}