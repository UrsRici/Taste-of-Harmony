function login(){
    const loginEmail = document.getElementById("login_email").value;
    const loginPassword = document.getElementById("login_password").value;
    
    console.log(loginEmail, loginPassword)

}

function signin(){
    alert("signin")
}

const user = {
    "username":"Rici",
    "password":"1234",
    "email":"ursrici.ru@gmail.com"
}

fetch("../../php/index.php", {
    "method": "POST",
    "headers": {
        "Content-Type": "aplicatie/json; charset-utf-8"
    },
    "body": JSON.stringify(user)
}).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
})