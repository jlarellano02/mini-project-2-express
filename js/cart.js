async function getCartData(data) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  async function fetchCartData() {
    let my_obj = await fetch(data);
    let my_text = await my_obj.text();
    cart = JSON.parse(my_text);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  await fetchCartData();

  // Function to update the cart table
  function updateCartTable() {
    let table = "<table class='table table-responsive table-bordered border-dark table-hover text-center '><thead><tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total Price</th><th>Action</th></tr></thead><tbody>";
    let totalCartPrice = 0;

    for (let i = 0; i < cart.length; i++) {
      let totalPrice = cart[i].price * cart[i].quantity;
      totalCartPrice += totalPrice;

      table += `<tr>
        <td>${cart[i].menu_name}</td>
        <td>${cart[i].price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</td>
        <td class=" pt-1 ">
          <button class="btn m-0 px-2 decrease_quantity" data-id="${cart[i].id}">-</button>
          <span class="quantity">${cart[i].quantity}</span>
          <button class="btn m-0 px-2 increase_quantity" data-id="${cart[i].id}">+</button>
        </td>
        <td>${totalPrice.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</td>
        <td><button class="btn btn-danger remove_item m-0 p-1 px-3 fs-6" data-id="${cart[i].id}">Remove</button></td>
        
      </tr>`;
    }

    table += `</tbody><tfoot><tr><td colspan="2"></td><td>Total:</td><td>${totalCartPrice.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</td><td><button class="btn btn-primary  m-0 p-1 fs-6" >Check Out</button></td></tr></tfoot></table>`;
    $("#cart-items").html(table);

    bindEventHandlers();
  }

  function bindEventHandlers() {
    $(".increase_quantity").click(function () {
      let itemId = $(this).data("id");
      let item = cart.find(item => item.id === itemId);
      item.quantity++;
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartTable();
    });

    $(".decrease_quantity").click(function () {
      let itemId = $(this).data("id");
      let item = cart.find(item => item.id === itemId);
      item.quantity = Math.max(1, item.quantity - 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartTable();
    });

    $(".remove_item").click(function () {
      let itemId = $(this).data("id");
      if (confirm("Are you sure you want to remove this item from the cart?")) {
        cart = cart.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartTable();
      }
    });
  }

  // Initial table setup
  updateCartTable();
}

getCartData("https://mini-project-2-express.onrender.com/api/cart");
