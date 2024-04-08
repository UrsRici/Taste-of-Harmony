////////////////////////
//    Login button    //
////////////////////////

is_login();
function is_login() {
    if(JSON.parse(localStorage.getItem("user"))){
        document.getElementById("login_signup_1").innerHTML = "Signout";
        document.getElementById("login_signup_2").innerHTML = "Signout";
    } else {
        document.getElementById("login_signup_1").innerHTML = "Login";
        document.getElementById("login_signup_2").innerHTML = "Login";
    }
}

function login_signup() {
    if(document.getElementById("login_signup_1").innerHTML == "Signout"){
        localStorage.removeItem("user");
        document.getElementById("login_signup_1").innerHTML = "Login";
        document.getElementById("login_signup_2").innerHTML = "Login";
    } else {
        window.location.href = "Login.html";
    }
}