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

function booking() {
  // Codul pentru manipularea evenimentului de rezervare
  console.log("Booking function called!");
}
