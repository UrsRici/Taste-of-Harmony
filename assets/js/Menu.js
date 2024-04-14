function active_item(){
    element = document.getElementById('#modal');
    element.classList.toggle("active")
    element = document.getElementById('#modal_overlay');
    element.classList.toggle("active")
}

get_categories();
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
        const categories = data;
        display_categories(categories);
    });
};

function display_categories(categories)
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

get_products();
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
        const products = data;
        display_products(products);
    });
};

function display_products(products)
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
    display(categories_list);
}

const products_li = `
    <li style="position: relative;" id="product_id_0">
        <div class="menu-card hover:card">
            <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                <img src="" id="product_img_0" width="100" height="100" loading="lazy" alt="Greek Salad" class="img-cover">
            </figure>
            <div>
                <div class="title-wrapper">
                    <h3 class="title-3">
                        <a id="product_title_0" class="card-title">Title</a>
                    </h3>
                    <span id="product_price_0" class="span title-2">Price$</span>
                </div>
                <p id="product_description_0" class="card-text label-1">
                    Description
                </p>
            </div>
        </div>
    </li>
`;


function display(cat)
{
    console.log(cat);
    let header = "assets/images/menu/";
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
        for(let j = 0; j<cat[0].length; j++)
        {
            element.innerHTML += products_li;
            
            //Selectia campurilor noi adaucage
            const list =  document.getElementById('product_id_0');
            const img = document.getElementById('product_img_0');
            const title = document.getElementById('product_title_0');
            const price = document.getElementById('product_price_0');
            const description = document.getElementById('product_description_0');

            //Inserarea imagini, titlului, pretului si al descrieri
            img.setAttribute('src', header.concat(cat[i][j]['image']))
            title.innerHTML = cat[i][j]['name'];
            price.innerHTML = cat[i][j]['price'].concat(' $');
            description.innerHTML = cat[i][j]['description']

            //Redenumirea id-urilor
            list.setAttribute('id', product_id.concat(i*cat.length + j+1));
            img.setAttribute('id', product_img.concat(i*cat.length + j+1));
            title.setAttribute('id', product_title.concat(i*cat.length + j+1));
            price.setAttribute('id', product_price.concat(i*cat.length + j+1));
            description.setAttribute('id', product_description.concat(i*cat.length + j+1));




            
        }
    }
}
