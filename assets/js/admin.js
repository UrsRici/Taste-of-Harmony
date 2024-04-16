if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'));
    if (user['role'] != 'admin') {
        window.location.href = "Home.html";
    }
} else {
    window.location.href = "Home.html";
}