const ex = require("express");
const fs = require("fs");
const mi = require("./js/menu_items");
const ci = require("./js/cart_items");
const cors = require("cors");

const app = ex();
app.use(ex.json());
app.use(cors());
const m = mi.menu;
const c = ci.cart;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/menu", (req, res) => {
  res.send(m);
});

app.put("/api/menu/:id", (req, res) => {
  let menu = false;
  for (let i = 0; i < m.length; i++) {
    if (m[i].id == Number(req.params.id)) {
      menu = m[i];
      break;
    }
  }

  if (menu) {
    if (req.body.image) {
      menu.image = req.body.image;
    }
    if (req.body.menu_name) {
      menu.menu_name = req.body.menu_name;
    }
    if (req.body.description) {
      menu.description = req.body.description;
    }
    if (req.body.price) {
      menu.price = req.body.price;
    }
    console.log(menu);
    res.send(menu);
  } else {
    let err = "Menu not found!";
    res.status(404);
    console.log(err);
    res.send(err);
  }
});

app.get("/api/cart", (req, res) => {
  res.send(c);
});

app.get("/api/cart/add/:id", (req, res) => {
  let menu_item = false;
  for (let i = 0; i < m.length; i++) {
    if (m[i].id == Number(req.params.id)) {
      menu_item = m[i];
      break;
    }
  }
  c.push(menu_item);
  res.send(menu_item);
  if (menu_item) {
    console.log(menu_item);
  }
});

// Main website
// app.get("/index", (req, res) => {
//   console.log("Someone accessed the main page");
//   fs.readFile("index.html", function (err, data) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     res.end();
//   });
// });

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
