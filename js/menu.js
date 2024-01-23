

async function addToCart(data){
    let my_obj = await fetch(data);
    let my_text = await my_obj.text();
    let menu = JSON.parse(my_text);
}
async function getData(data) {
    let my_obj = await fetch(data);
    let my_text = await my_obj.text();
    let menu = JSON.parse(my_text);
    
   
    for (let i = 0; i < menu.length; i++) {
        let row = 
            "<div class='col-md-3 mb-5' id='card_min'><div class='card mt-3 h-100'>" + "<img src='img/" +
            menu[i].image + 
            "' class='card-img-top'><div class='card-body'>" + 
            "<h5 class='fw-bold'>" + 
            menu[i].menu_name + "</h5>" + "<hr/>" +
            "<p class='card-title'></p>" + 
            "<p class='card-title position-absolute bottom-0 end-0 me-5'><b>Price: ₱</b>" + menu[i].price + "</p>" 
            + "<button class='btn btn-primary add_to_cart mb-1 ms-3 position-absolute bottom-0 start-0' id='" + menu[i].id + " '>Add to Cart</button></div></div></div>";

        $("#card-section").append(row);
    }


    $(document).ready(function() {
        $(".add_to_cart").click(function() {
            addToCart("https://mini-project-2-express.onrender.com/api/cart/add" + $(this).prop("id"));
            window.location.href = "cart.html";
        });
    });   

}

getData("https://mini-project-2-express.onrender.com/api/menu");

