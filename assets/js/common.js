////////////////////////
//    Login button    //
////////////////////////

is_login();
function is_login() 
{
    if(JSON.parse(localStorage.getItem("user"))){
        document.getElementById("login_signup_1").innerHTML = "Sign out";
        document.getElementById("login_signup_2").innerHTML = "Sign out";
    } else {
        document.getElementById("login_signup_1").innerHTML = "Log in";
        document.getElementById("login_signup_2").innerHTML = "Log in";
    }
}

function login_signup() 
{
    if(document.getElementById("login_signup_1").innerHTML == "Sign out"){
        localStorage.removeItem("user");
        document.getElementById("login_signup_1").innerHTML = "Log in";
        document.getElementById("login_signup_2").innerHTML = "Log in";
        if (window.location.href.indexOf("Admin.html")) { window.location.href = "Home.html"; }
        is_admin();
    } else {
        window.location.href = "Login.html";
    }
}

////////////////////////
//    Admin button    //
////////////////////////

is_admin();
function is_admin()
{
    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
        if (user['role'] != 'admin') {
            document.getElementById('admin_page').innerHTML = ' ';
        }
    } else {
        document.getElementById('admin_page').innerHTML = ' ';
    }
}