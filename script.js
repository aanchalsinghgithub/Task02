const product = [
  {
    id: 0,

    image:
      "https://cococart.in/cdn/shop/files/Venchi_Top_Brands_1024x1024.png?v=1685376957",

    title: "Venchi",

    price: 20,
  },

  {
    id: 1,

    image:
      "https://cococart.in/cdn/shop/files/200x300_Lindt-25_1024x1024.png?v=1674136837",

    title: "Lindt",

    price: 10,
  },

  {
    id: 2,

    image:
      "https://cococart.in/cdn/shop/files/200x300-16_1024x1024.png?v=1668427486",

    title: "Whittakers",

    price: 10,
  },

  {
    id: 3,

    image:
      "https://cococart.in/cdn/shop/files/200x300-14_1024x1024.png?v=1668427453",

    title: "Hershey's",

    price: 15,
  },
  {
    id: 0,

    image:
      "https://cococart.in/cdn/shop/files/Venchi_Top_Brands_1024x1024.png?v=1685376957",

    title: "Venchi",

    price: 20,
  },

  {
    id: 1,

    image:
      "https://cococart.in/cdn/shop/files/200x300_Lindt-25_1024x1024.png?v=1674136837",

    title: "Lindt",

    price: 10,
  },

  {
    id: 2,

    image:
      "https://cococart.in/cdn/shop/files/200x300-16_1024x1024.png?v=1668427486",

    title: "Whittakers",

    price: 10,
  },

  {
    id: 3,

    image:
      "https://cococart.in/cdn/shop/files/200x300-14_1024x1024.png?v=1668427453",

    title: "Hershey's",

    price: 15,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;

    return (
      `<div class='box'>

<div class='img-box'>

<img class='images' src=${image}></img>

</div>

<div class='bottom'>
<p>${title}</p>

<h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to Cart</button>" +
      `</div>
</div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  if (cart.length === 8) {
    alert("No more items will add");
    return;
  }
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

var toggle = document.querySelector(".mobileicon");
var sidebar = document.querySelector(".sidebar");
var root = document.getElementById("root");

toggle.addEventListener("click", function () {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    root.style.display = "block";
  } else {
    sidebar.classList.add("hidden");
    root.style.display = "none";
  }
});

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;

        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>

<div class='row-img'>

<img class='rowimg' src=${image}>

</div> 

<p style='font-size:12px;'>${title}</p>

<h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
