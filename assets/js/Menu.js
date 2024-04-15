
get_categories();
get_products();
let products = [];
let categories = [];
const dropdownContent = `<li><a onclick="clear_search()" id="dropdown_0" name="dropdown"></a></li>`;
const products_li = `
<li id="product_id_0">
    <div class="menu-card hover:card">
        <figure class="card-banner img-holder" style="width: 100; height: 100;">
            <img id="product_img_0" width="100" height="100" loading="lazy" alt="Greek Salad" class="img-cover">
        </figure>
        <div style="width: 100%;">
            <div class="title-wrapper">
                <h3 class="title-3">
                    <a id="product_title_0" class="card-title">Title</a>
                </h3>
                <span style="position: inherit; right: 0;" id="product_price_0" class="span title-2">Price$</span>
            </div>
            <p id="product_description_0" class="card-text label-1">
                Description
            </p>
        </div>
    </div>
</li>
`;

function active_item(id){
    if (id) {
        //initializare
        let header = 'assets/images/menu/';
        title = document.getElementById('modal_title');
        description = document.getElementById('modal_description');
        price = document.getElementById('modal_price');
        img = document.getElementById('modal_img');
       
        //setarea atributelor in modal
        title.innerHTML = products[id-1]['name'];
        description.innerHTML = products[id-1]['description'];
        price.innerHTML = products[id-1]['price'].concat('$');
        img.setAttribute('src', header.concat(products[id-1]['image']))
    }

    //Activeaza modalul
    element = document.getElementById('#modal');
    element.classList.toggle("active")
    element = document.getElementById('#modal_overlay');
    element.classList.toggle("active")

    clear_search();
}

function get_categories(){    
    const formData = new FormData();
    formData.append('info', 'categories');
    // Trimiteți cererea către PHP
    fetch('php/menu/menu_categories.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        categories = data;
        display_categories();
    });
};

//Afiseaza categoriile in html
function display_categories()
{   
    let header = "assets/images/menu/";
    let img_id = "img_categories_";
    let title_name = "title_categories_";
    let selection_id = "categories_";
    for (i = 0; i < categories.length; i++)
    {
        categories[i][['image']] = header.concat(categories[i][['image']]);
        document.getElementById(img_id.concat(i+1)).setAttribute('src', categories[i][['image']]);
        document.getElementsByName(title_name.concat(i+1))[0].innerHTML = categories[i]['name'];
        document.getElementsByName(title_name.concat(i+1))[1].innerHTML = categories[i]['name'];
    }
}

function get_products(){    
    const formData = new FormData();
    formData.append('info', 'products');
    // Trimiteți cererea către PHP
    fetch('php/menu/menu_products.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        products = data;
        products_order();
    });
};

//Ordoneaza produsele
function products_order()
{
    const categories_list = [];
    for (let i = 0; i < 9; i++) {
        categories_list.push([]);
    }
    for (let i = 0; i < products.length; i++)
    {
        const category_id = products[i]['category_id'] - 1;
        categories_list[category_id].push(products[i]);
    }
    display_products(categories_list);
}


function display_products(cat)
{
    let header = "assets/images/menu/icons/";
    let ul_id = "categories_list_add_";
    let product_id = "product_id_";
    let product_img = "product_img_";
    let product_title = "product_title_";
    let product_price = "product_price_";
    let product_description = "product_description_";

    for(let i = 0; i < cat.length; i++)
    {
        let id = ul_id.concat(i+1);
        const element = document.getElementById(id);
        for(let j = 0; j < cat[0].length; j++)
        {
            element.innerHTML += products_li;
            let modal_action = 'active_item('.concat(i*cat[0].length + j+1).concat(')')
            //Selectia campurilor noi adaucage
            const list =  document.getElementById('product_id_0');
            const img = document.getElementById('product_img_0');
            const title = document.getElementById('product_title_0');
            const price = document.getElementById('product_price_0');
            const description = document.getElementById('product_description_0');

            //Inserarea imagini, titlului, pretului si al descrieri
            img.setAttribute('src', header.concat(cat[i][j]['image']))
            img.setAttribute('onclick', modal_action);
            title.innerHTML = cat[i][j]['name'];
            title.setAttribute('onclick', modal_action);
            price.innerHTML = cat[i][j]['price'].concat('$');
            description.innerHTML = cat[i][j]['description']

            //Redenumirea id-urilor
            list.setAttribute('id', product_id.concat(i*cat[0].length + j+1));
            img.setAttribute('id', product_img.concat(i*cat[0].length + j+1));
            title.setAttribute('id', product_title.concat(i*cat[0].length + j+1));
            price.setAttribute('id', product_price.concat(i*cat[0].length + j+1));
            description.setAttribute('id', product_description.concat(i*cat[0].length + j+1));
            
            //Inserarea titlurilor in search
            const dropdown = document.getElementById('dropdown');
            dropdown.innerHTML += dropdownContent;
            dr= document.getElementById('dropdown_0');
            dr.innerHTML = cat[i][j]['name'];
            dr.removeAttribute('id');
            dr.setAttribute('onclick', modal_action);
        }
    }
}


//Functia care se apleaza cand se scimba valoarea din search bar
document.getElementById('search').addEventListener('input', function(event) {
    var input = event.target;
    search(input);
    display_dropdown(input.value.toUpperCase());
});

function search(input)
{
    let filter = input.value.toUpperCase();
    let div = document.getElementById('dropdown');
    let li = div.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) 
    {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    //console.log(input.value.toUpperCase());
}

// Functia care afiseaza elementele din search
function display_dropdown(value)
{
    if (value) {
        document.getElementById('dropdown').removeAttribute('hidden');
    } else {
        document.getElementById('dropdown').setAttribute('hidden', true);
    }
}

// Functia care ascunde elementele din search
function clear_search () { document.getElementById('dropdown').setAttribute('hidden', true); }

// Functie la input cand dai "Enter" apasa pe butonul de search
document.getElementById('search').addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById('search_button_icon').click();
    }
});

// Functia butonul de search
function select_first_product() 
{

    clear_search();
}