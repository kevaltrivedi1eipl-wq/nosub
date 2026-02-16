function getproducts() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://json-server-production-1b86.up.railway.app/products",
    true,
  );

  xhr.onload = function () {
    if (xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);
       renderdata(data)
      console.log(data);
    } else {
      console.log("eror", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.log("Network Eror");
  };

  xhr.send();

 
}
getproducts()

function addproducts() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "POST",
    "https://json-server-production-1b86.up.railway.app/productsposts",
    true,
  );

  xhr.setRequestHeader("content-type", "application/json");

  const product = {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    price: 109.95,
    qty: 0,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  };

  xhr.onload = function () {
    if (xhr.status == 201) {
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log(xhr.status);
    }
  };

  xhr.send(JSON.stringify(product));
}




function updateproducts() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "PUT",
    "https://json-server-production-1b86.up.railway.app/productsposts/1",
    true,
  );

  xhr.setRequestHeader("Content-Type", "application/json");
  const updatedata = {
    category: "Wommen's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 2,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    price: 109.95,
    qty: 10,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  };

  xhr.onload = function () {
    if (xhr.response == 200) {
      console.log(JSON.parse(xhr.responseText));
      return;
    } else {
      console.log("There Myght be sometyhing missing");
      console.log(xhr.response);
    }
  };

  xhr.send(JSON.stringify(updatedata));
}

function deletdata() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "DELETE",
    "https://json-server-production-1b86.up.railway.app/productsposts/",
    true,
  );


  xhr.onload = function(){
    if(this.response == 200){
        console.log("Deleted");
    }
    
  }

  xhr.send();
}




function renderdata(products){
const container = document.getElementById("productlist");


container.innerHTML = "";

products.forEach(product => {
  const div = document.createElement("div");
  image = JSON.stringify(product.image)
  div.innerHTML += `
  <h3>${product.title}</h3>
<p>Price:${product.price}</p>
<button id="addtocart" onclick="addtoCart(${product.qty,product.title,product.description,product.id,image})">Add to Cart</button>
<hr>
  



  `

  container.appendChild(div)
  
});
}



function addtocart(productID){
const xhr = new XMLHttpRequest();


 xhr.open(
    "POST",
    "https://json-server-production-1b86.up.railway.app/productsposts",
    true,
  );


  xhr.setRequestHeader("COntent-type,application/json");


  const data = {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 3,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    price: 109.95,
    qty: 0,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  }


  xhr.send(JSON.stringify(data))
}



function showcart(){
  const xhr = new XMLHttpRequest();


  xhr.open("GET","https://json-server-production-1b86.up.railway.app/productsposts",true);


  xhr.onload = function(){
    if(xhr.status == 200){
    const data = JSON.parse(xhr.responseText)
    rendercart(data)}
    else{
        console.log(xhr.responseText)
    }
  }

  xhr.send()
}

showcart()

function rendercart(datas){

const container = document.getElementById("cartlist");

datas.forEach(data => {

const div = document.createElement("div")

    div.innerHTML += `
    <h3>${data.title}</h3>
  <p>Price:${data.price}</p>
  
   <hr>
    `

    container.appendChild(div);
  
});
}


function addtoCart(qty,title,description,id,image){
const xhr =new XMLHttpRequest();



xhr.open("POST","https://json-server-production-1b86.up.railway.app/productsposts",true)


xhr.setRequestHeader("Content-Type","Application/Json")


const data = {
id:id,
title:String(title),
description:String(description),
qty:qty,
image:image
}



xhr.onload = function(){
if(xhr.status == 200 || xhr.status == 201){
console.log(xhr.status)
}
}

xhr.send(JSON.stringify(data))

}