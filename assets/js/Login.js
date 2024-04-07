
document.getElementById('form_signup').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    fetch('php/signup/signup.inc.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
        const variabila_js = data;
        localStorage.setItem("signup_info", JSON.stringify(variabila_js));
        is_error();
    });
});

function is_error(){
    const signup_info = JSON.parse(localStorage.getItem("signup_info"));
    acount_created = true;
    document.getElementById("error_1").innerHTML = "";
    document.getElementById("error_2").innerHTML = "";
    document.getElementById("error_3").innerHTML = "";
    if (signup_info["empty_input"]) {
        document.getElementById("error_1").innerHTML = signup_info["empty_input"];
        acount_created = false;
    }
    if (signup_info["invalid_email"]) {
        document.getElementById("error_2").innerHTML = signup_info["invalid_email"];
        acount_created = false;
    }
    if (signup_info["username_taken"]) {
        document.getElementById("error_3").innerHTML = signup_info["username_taken"];
        acount_created = false;
    }
    if (acount_created) {
        alert("The account was created");
    }
    location.reload();
}