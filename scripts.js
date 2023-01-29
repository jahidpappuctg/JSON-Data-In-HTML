
const productdiv = document.getElementById("all-products");
const cartProductsDiv = document.getElementById("cart-products");
let products;
let cartItem;


fetch("products.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++){
            productdiv.innerHTML += `
            
            <div class="col-lg-4">
                <div class="single-product">
                    <img src="${data[i].image}" alt="">
                    <h5>${data[i].price}</h5>
                    <h3>${data[i].name}</h3>
                    <p>${data[i].text}</p>
                    <button onClick = "addtoCart()">add to cart</button>
                </div>
            </div>
                
            `;
        }
    })

    .catch(function (error){
        console.log(error);
    });