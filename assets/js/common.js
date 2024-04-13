////////////////////////
//    Login button    //
////////////////////////

is_login();
function is_login() {
    if(JSON.parse(localStorage.getItem("user"))){
        document.getElementById("login_signup_1").innerHTML = "Sign out";
        document.getElementById("login_signup_2").innerHTML = "Sign out";
    } else {
        document.getElementById("login_signup_1").innerHTML = "Log in";
        document.getElementById("login_signup_2").innerHTML = "Log in";
    }
}

function login_signup() {
    if(document.getElementById("login_signup_1").innerHTML == "Sign out"){
        localStorage.removeItem("user");
        document.getElementById("login_signup_1").innerHTML = "Log in";
        document.getElementById("login_signup_2").innerHTML = "Log in";
    } else {
        window.location.href = "Login.html";
    }
}