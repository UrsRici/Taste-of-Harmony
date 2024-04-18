get_data();
let users = [];
let products = [];
let reservations = [];

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

function get_data(){    
    const formData = new FormData();
    fetch('php/admin/admin.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const info = data;
        users = info['users'];
        products = info['products'];
        reservations = info['reservations'];
        display_users();
        display_products();
        display_reservations();
    });
};

///////////////////////////
/// display tabel users ///
///////////////////////////

let delete_button = `<td id="delete_button" class="delete_button">Delete</td>`;
let edit_button = `<td id="edit_button" class="edite_button">Edit</td>`;
function display_users()
{
    console.log(users);
    document.getElementById('tbody').innerHTML = ' ';
    const row_html = `<tr id="user_row_"></tr>`;
    const row_item_html = `<th id="user_row_item_"></th>`;
    const tbody = document.getElementById('tbody');
    for (let i = 0; i < users.length; i++) 
    {
        tbody.innerHTML += row_html;
        row = document.getElementById('user_row_');   
        row.setAttribute('id', 'user_row_'.concat(i+1));  
        for (var key in users[i])
        {
            row.innerHTML += row_item_html;
            item = document.getElementById('user_row_item_');
            item.innerHTML = users[i][key];
            item.setAttribute('id', 'user_row_item_'.concat(key));
        }
        row.innerHTML += edit_button + delete_button;
        b_edit = document.getElementById('edit_button');
        b_delete = document.getElementById('delete_button');
        b_edit.setAttribute('onclick', 'edite_user('.concat(i).concat(')'));
        b_delete.setAttribute('onclick', 'delete_user('.concat(i).concat(')'));
        b_edit.setAttribute('id', 'edit_'.concat(i));
        b_delete.removeAttribute('id');
    }
}

//Function sort by id
var sort_table_id_dir = true;
function sort_table_id() 
{
    if (sort_table_id_dir){
        users.sort(function(a, b) {
            return a.id - b.id;
        });
        document.getElementById('id_button').innerHTML = 'Id▲';
        document.getElementById('name_button').innerHTML = 'Name';
        sort_table_id_dir = false
    } else {
        users.sort(function(a, b) {
            return b.id - a.id;
        });
        document.getElementById('id_button').innerHTML = 'Id▼';
        document.getElementById('name_button').innerHTML = 'Name';
        sort_table_id_dir = true
    }
    display_users();
}

//Functon sort by name
var sort_table_name_dir = true;
function sort_table_name() 
{
    if (sort_table_name_dir){
        users.sort(function(a, b) {
            // Comparație între nume în ordine alfabetică
            var nameA = a.name.toUpperCase(); // Convertirea la majuscule pentru a asigura o sortare corectă
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) { return -1; }
            if (nameA > nameB) { return 1; }
            return 0; // În caz de egalitate
        });
        document.getElementById('name_button').innerHTML = 'Name▲';
        document.getElementById('id_button').innerHTML = 'Id';
        sort_table_name_dir = false
    } else {
        users.sort(function(a, b) {
            // Comparație între nume în ordine alfabetică
            var nameA = a.name.toUpperCase(); // Convertirea la majuscule pentru a asigura o sortare corectă
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) { return 1; }
            if (nameA > nameB) { return -1; }
            return 0; // În caz de egalitate
        });
        document.getElementById('name_button').innerHTML = 'Name▼';
        document.getElementById('id_button').innerHTML = 'Id';
        sort_table_name_dir = true
    }
    display_users();
}

function display_addUser_button()
{
    document.getElementById('admin_add_user').toggleAttribute('hidden');
    document.getElementById('add_button').classList.toggle("active");

    //unset edite buttons
    for (let i = 0; i < users.length; i++)
    {   
        document.getElementById('admin_edit_user').setAttribute('hidden', true);
        document.getElementById('edit_'.concat(i)).classList.remove('active');
    }
}

//Edit user function
function edite_user(nr)
{
    for (let i = 0; i < users.length; i++)
    {   
        if (i != nr) {
            document.getElementById('edit_'.concat(i)).classList.remove('active');
        }
    }
    document.getElementById('edit_'.concat(nr)).classList.toggle('active');
    for (let i = 0; i < users.length; i++)
    {   
        if (document.getElementById('edit_'.concat(i)).classList.contains('active')) {
            document.getElementById('admin_edit_user').removeAttribute('hidden');
            break;
        } else {
            document.getElementById('admin_edit_user').setAttribute('hidden', true);
        }
    }

    //unset add user button
    document.getElementById('admin_add_user').setAttribute('hidden', true);
    document.getElementById('add_button').classList.remove("active");

    //set value in form
    document.getElementById('edit_user_id').innerHTML = users[nr]['id'];
    document.getElementById('username').value = users[nr]['name'];
    document.getElementById('email').value = users[nr]['email'];
    document.getElementById('role').value = users[nr]['role'];
}

//Delete user function
function delete_user(nr)
{
    console.log(nr)
    const formData = new FormData();
    formData.append('id', users[nr]['id']);
    formData.append('info', 'delete_user')

    fetch('php/admin/admin.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const deleteUser_info = data;
        alert(deleteUser_info);
        get_data();
    });
}

// Function edit user
document.getElementById('edit_user').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const formData = new FormData(this);
    formData.append('info', 'edit_user');
    id = document.getElementById('edit_user_id').innerHTML
    formData.append('id', id);

    fetch('php/admin/admin.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const editUser_info = data;
        alert(editUser_info);
        get_data();
    });
});

// Function add user
document.getElementById('add_user').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const formData = new FormData(this);
    formData.append('info', 'add_user');

    fetch('php/admin/admin.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const addUser_info = data;
        alert(addUser_info);
        get_data();
    });
});

//////////////////////////////
/// display tabel products ///
//////////////////////////////

function display_products()
{
    console.log(products);
}

//////////////////////////////////
/// display tabel reservations ///
//////////////////////////////////

function display_reservations()
{
    console.log(reservations);
}