

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
      "<div class='col-lg-3'><div class='card mt-3'>" +
      "<img src='img/" +
      menu[i].image +
      "' class='card-img-top'><div class='card-body'>" +
      "<h5>" +
      menu[i].menu_name +
      "</h5>" +
      "<p class='card-title'><i>" +
      menu[i].description +
      "</i></p>" +
      "<button id='show' class='btn btn-primary'>Description</button>" +
      "<p class='card-title'><b>Price: </b>" +
      menu[i].price +
      "</p>" +
      "<button class='btn btn-primary add_to_cart' id='" + menu[i].id + " '>Add to Cart</button></div></div></div>";

        $("#card-section").append(row);
    }

    $(document).ready(function() {
        $(".add_to_cart").click(function() {
            addToCart("http://localhost:3000/api/cart/add/" + $(this).prop("id"));
            window.location.href = "cart.html";
        });
    });   

}

getData("http://localhost:3000/api/menu/");

