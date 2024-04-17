if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'));
    if (user['role'] != 'admin') {
        window.location.href = "Home.html";
    }
} else {
    window.location.href = "Home.html";
}

function admin_title(id)
{
    let cls = id.slice(0, -1);
    //eleiminare atribute active
    for (let i = 1; i < 5; i++) 
    {
        document.getElementById(cls+i).removeAttribute('class');
        document.getElementById(cls+i+'_table').setAttribute('hidden', true);
        catehories_title('categories_title_0');
    }
    //Activare item selectat
    document.getElementById(id).setAttribute('class', 'active');
    document.getElementById(id + '_table').removeAttribute('hidden');
}

function catehories_title(id)
{
    let cls = id.slice(0, -1);
    //eleiminare atribute active
    for (let i = 1; i < 10; i++) 
    {
        document.getElementById(cls+i).removeAttribute('class');
        document.getElementById(cls+i+'_table').setAttribute('hidden', true);
    }
    //Activare item selectat
    if (id != 'categories_title_0') {
        document.getElementById(id).setAttribute('class', 'active');
        document.getElementById(id + '_table').removeAttribute('hidden');
    }
}