async function getCartData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let cart = JSON.parse(my_text);

  let row = "<table class='table'><tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total Price</th></tr>";
  
    for (let i = 0; i < cart.length; i++) {
      row += "<tr><td>" + cart[i].menu_name + "</td><td>" + cart[i].price + "</td><td>" + cart[i].quantity + "</td><td>" + (cart[i].price * cart[i].quantity) + "</td></tr>";
    }
    
    row += "</table>";
    $("#cart-items").append(row);
  }

getCartData("http://localhost:3000/api/cart/");
