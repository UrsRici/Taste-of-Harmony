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

if(JSON.parse(localStorage.getItem("user"))) {
  document.getElementById("name").value = JSON.parse(localStorage.getItem("user"))["name"];
}
function booking() {
  if(!JSON.parse(localStorage.getItem("user"))){
    alert("You need to login to book a table!")
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
      const login_info = data;
      console.log(login_info);
  });
});