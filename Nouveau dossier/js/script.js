let user_info = document.querySelector('#user-info');
let userdom = document.querySelector('#user');
let links = document.querySelector('#links');
let username = localStorage.getItem("username");
let logout =document.querySelector('#logout')
if (username){
    links.remove();
    user_info.style.display="flex";
    userdom.innerHTML = username;
}
logout.addEventListener('click',function(){
    localStorage.clear();
    setTimeout(() => {
        window.location ="../Nouveau dossier/login.html";
    }, 1500);
})
/* define the product/*/
let productdom =document.querySelector('.products');
let cardsproductsdom=document.querySelector('.cartproducts');
let cardsproductdom=document.querySelector('.cartproducts div');
let badgedom =document.querySelector('.badge');
let shoopingcart= document.querySelector('.shoopingcart');
let products =[
    { 
    id:1,
    title:"Blazer zara" ,
    size:"large",
    imgUrl:"../image/2753032711_15_10_1.jpg",
     },
     { 
        id:2,
        title:"Blazer zara" ,
        size:"large",
        imgUrl:"../image/2761250800_6_1_1.jpg",
         },
         { 
            id:3,
            title:"pantalon zara" ,
            size:"large",
            imgUrl:"../image/4387630712_6_1_1.jpg",
             },
             { 
                id:4,
                title:"mantau zara",
                size:"large",
                imgUrl:"../image/8372304704_15_10_1.jpg",
                 },
                 { 
                    id:5,
                    title:"mantau zara" ,
                    size:"large",
                    imgUrl:"../image/8822298802_15_11_1.jpg",
                     },
                     { 
                        id:6,
                        title:"Chemise zara",
                        size:"large",
                        imgUrl:"../image/download (1).jpg",
                         },
                                                            ];
function drawproductsUI (){
    let productsUi = products.map( (item)  => {
   return `
   
   
     <div class="productitem">
       <img src="${item.imgUrl}"  class="img1" alt="img" />
       <div class="img1d"> <h2> ${item.title}</h2>
         <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
         <span>  ${item.size} </span>
     </div>
     <div class="productitemaction">
     <button class="addcart" onclick="addedtocart(${item.id})" >Add To Card </button>
       <i class="fa-solid fa-heart"></i>
     </div>
      
   </div>`
 }
 );
 
productdom.innerHTML=productsUi;
}  drawproductsUI();
shoopingcart.addEventListener('click',opencartmenu);
  
   let addedproducts=[];
   
  function addedtocart(id){
    if (localStorage.getItem("username")){
        let chosenitem = products.find((item) =>item.id===id)
        cardsproductdom.innerHTML += `<p> ${chosenitem.title} </p>`;
        addedproducts=[...addedproducts,chosenitem];
        localStorage.setItem('productsoncart',JSON.stringify(addedproducts));
        let cartproductsitems = document.querySelectorAll(".cartproducts div p");
        
        console.log(cartproductsitems);
        badgedom.style.display ="block";
        badgedom.innerHTML= cartproductsitems.length;
     }else{
        window.location="../Nouveau dossier/login.html";
     }


}
    
  function opencartmenu(){
    if(cardsproductdom.innerHTML!=""  ){if
  (cardsproductsdom.style.display=="block"){
    cardsproductsdom.style.display="none";
  }else{cardsproductsdom.style.display="block";

  }
  }
  }
 