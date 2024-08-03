// those three line menu

function rotate1() {
  var element = document.querySelector(".r1");
  element.classList.toggle("r11");
}
function rotate2() {
  var element = document.querySelector(".r2");
  element.classList.toggle("r22");
}
function rotate3() {
  var element = document.querySelector(".r3");
  element.classList.toggle("r33");
}
let MenuBar = 0;
function display() {
  var element = document.querySelector(".MenuBar");
  element.classList.toggle("HideMenuBar");

  var element = document.querySelector(".ThreeLinesThese");
  element.classList.toggle("ChangeMenuButton");

  MenuBar = MenuBar + 1;

  if (MenuBar % 2 == 0) {
    setTimeout(() => {
      document.querySelector(".MenuBar").style = `
        display:none;
        `;
    }, 120);
  } else {
    document.querySelector(".MenuBar").style = `
        display:block;
        `;
  }
}

// those three line menu end

// nav mover

let home = document.querySelector(".Home");
let insta = document.querySelector(".Insta");
let youtube = document.querySelector(".Youtube");
let telegram = document.querySelector(".Telegram");
let contact = document.querySelector(".Contact");

let homescreen = document.querySelector(".HomeScreen");
let instascreen = document.querySelector(".InstaScreen");
let youtubescreen = document.querySelector(".YoutubeScreen");
let telegramscreen = document.querySelector(".TelegramScreen");
let contactscreen = document.querySelector(".ContactScreen");

let pupil = document.querySelector(".Pupil");
let closeeye = document.querySelector(".Eye2");

home.classList.add("IncreaseFont");
// homescreen.classList.add("Unhide");
instascreen.classList.add("Unhide");

function DecreaseFont() {
  home.classList.remove("IncreaseFont");
  insta.classList.remove("IncreaseFont");
  youtube.classList.remove("IncreaseFont");
  telegram.classList.remove("IncreaseFont");
  contact.classList.remove("IncreaseFont");
}

function HideScreens() {
  homescreen.classList.remove("Unhide");
  instascreen.classList.remove("Unhide");
  youtubescreen.classList.remove("Unhide");
  telegramscreen.classList.remove("Unhide");
  contactscreen.classList.remove("Unhide");
}

function Home() {
  DecreaseFont();
  HideScreens();
  home.classList.add("IncreaseFont");
  homescreen.classList.add("Unhide");
}

function Insta() {
  DecreaseFont();
  HideScreens();
  insta.classList.add("IncreaseFont");
  instascreen.classList.add("Unhide");
}

function Youtube() {
  DecreaseFont();
  HideScreens();
  youtube.classList.add("IncreaseFont");
  youtubescreen.classList.add("Unhide");
}

function Telegram() {
  DecreaseFont();
  HideScreens();
  telegram.classList.add("IncreaseFont");
  telegramscreen.classList.add("Unhide");
}
function Contact() {
  DecreaseFont();
  HideScreens();
  contact.classList.add("IncreaseFont");
  contactscreen.classList.add("Unhide");
}

// nav mover end

// close eye

setInterval(() => {
  setTimeout(() => {
    closeeye.classList.add("CloseEye");
  }, 1000);

  setTimeout(() => {
    closeeye.classList.remove("CloseEye");
  }, 1250);
}, 5000);

// close eye end

// Sample data for demonstration
const products = [
  {
    id: 1,
    name: "Weather Graph API",
    price: "weather api get weather by the enering city name",
    image: "product1.jpg",
    visitlive: "WeatherAPIGraph",
    downloadLinks:
      "https://drive.google.com/file/d/1jWaRx7qxoBwbZRkTkAMUbUwtU2EpI6FY/view?usp=sharing",
  },
  {
    id: 2,
    name: "Bounce Ball Game",
    price: "Amazing bounceing ball game",
    image: "product2.jpg",
    visitlive: "BounceBall",
    downloadLinks: "a",
  },
  {
    id: 3,
    name: "IOS Phone Calculator",
    price: "Mobile view Phone Calculator",
    image: "product3.jpg",
    visitlive: "IPhoneCalculator",
    downloadLinks: "b",
  },
  {
    id: 4,
    name: "English Dictionary API",
    price: "Dictionary api get meaning by the enering word name",
    image: "product1.jpg",
    visitlive: "Dictionary",
    downloadLinks: "a",
  },
  {
    id: 5,
    name: "SnakeAndLader Game",
    price: "Known snake and lader game ",
    image: "product2.jpg",
    visitlive: "SnakeAndLader",
    downloadLinks: "a",
  },
  {
    id: 6,
    name: "Tic-Tac-Toe Game",
    price: "Tic-Tac-Toe Game has o and x",
    image: "product3.jpg",
    visitlive: "Tic-Tac-Toe",
    downloadLinks: "a",
  },
  {
    id: 7,
    name: "Shoping Cart",
    price: "shoping cart which is used to sell clocks ",
    image: "product2.jpg",
    visitlive: "ClocksCart1",
    downloadLinks: "a",
  },
  {
    id: 8,
    name: "IOS Phone Calculator",
    price: 20,
    image: "product3.jpg",
    visitlive: "Calender",
    downloadLinks: "a",
  },
];

let cartItems = [];

// Function to render cart items
// Function to render cart items

function renderCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = ""; // Clear previous content
  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    const cartItemInfoDiv = document.createElement("div");
    cartItemInfoDiv.classList.add("cart-item-info");
    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    const itemPrice = document.createElement("p");
    itemPrice.textContent = `${item.price}`;
    const itemQuantity = document.createElement("p");
    itemQuantity.textContent = `Html : ${item.quantity}`;
    cartItemInfoDiv.appendChild(itemName);
    cartItemInfoDiv.appendChild(itemQuantity);
    cartItemInfoDiv.appendChild(itemPrice);

    const cartItemActionsDiv = document.createElement("div");
    cartItemActionsDiv.classList.add("cart-item-actions");

    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download";

    downloadButton.addEventListener("click", function () {
      DownloadMethod(item.downloadLinks);
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "See Code";

    removeButton.addEventListener("click", function () {
      // removeFromCart(item.id);
    });

    const vistButton = document.createElement("button");
    vistButton.textContent = "View Live";
    vistButton.addEventListener("click", function () {
      VistCart(item.visitlive);
    });

    cartItemActionsDiv.appendChild(downloadButton);
    cartItemActionsDiv.appendChild(removeButton);
    cartItemActionsDiv.appendChild(vistButton);

    cartItemDiv.appendChild(cartItemInfoDiv);
    cartItemDiv.appendChild(cartItemActionsDiv);

    cartItemsDiv.appendChild(cartItemDiv);

    totalPrice += item.price * item.quantity;
  }

  // document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cartItems.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({
      id: productId,
      name: product.name,
      price: product.price,
      quantity: "5, Css : 3 ,Javascript : ES6",
      image: product.image,
      visitlive: product.visitlive,
      downloadLinks: product.downloadLinks,
    });
  }

  renderCart();
}

// Function to remove item from cart
// function removeFromCart(productId) {
//   cartItems = cartItems.filter((item) => item.id !== productId);
//   renderCart();
// }

function VistCart(productId) {
  let link = "https://maheshnadendla.github.io/" + productId;

  window.location.href = link;

  console.log(productId);
}

function DownloadMethod(downloadlinks) {
  window.location.href = downloadlinks;
  console.log(downloadlinks);
}

// Function to proceed to checkout (dummy function)
function checkout() {
  alert("Order Placed");
}

// Initial rendering of cart
renderCart();

function ShopingCart() {
  document.querySelector(".container").innerHTML = `

    `;
}

// Example: Adding initial items to the cart
addToCart(1);
addToCart(2);
addToCart(3);
addToCart(4);
addToCart(5);
addToCart(6);
addToCart(7);

// pupil movement

document.addEventListener("mousemove", (e) => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  let centerX = width / 2;
  let centerY = height / 2;
  let offsetX = e.clientX - centerX;
  let offsetY = e.clientY - centerY;
  let percentX = offsetX / centerX;
  let percentY = offsetY / centerY;
  let maxPupilMovement = 22;
  let pupilX = percentX * maxPupilMovement;
  let pupilY = percentY * maxPupilMovement;

  pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;

  // console.log("x : " + pupilX, "y : " + pupilY);

  let shapeRange = maxPupilMovement - 7;

  if (pupilX > shapeRange && pupilY > shapeRange) {
    pupil.classList.add("BBR");
  } else if (pupilX < shapeRange * -1 && pupilY > shapeRange) {
    pupil.classList.add("BBL");
  } else if (pupilX > shapeRange && pupilY < shapeRange * -1) {
    pupil.classList.add("BTR");
  } else if (pupilX < shapeRange * -1 && pupilY < shapeRange * -1) {
    pupil.classList.add("BTL");
  } else {
    ResizePupil();
  }
});

// pupil movement end

// pupil contract

function ResizePupil() {
  pupil.classList.remove("BTR");
  pupil.classList.remove("BTL");
  pupil.classList.remove("BBR");
  pupil.classList.remove("BBL");
}

// pupil contract end
