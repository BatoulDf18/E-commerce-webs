let productsincart = localStorage.getItem('.productsoncart');
if(productsincart){
    let item =JSON.parse(productsincart);
    drawproductcarsdsUI(item)
}
function drawproductcarsdsUI (products){
    let productsUi = products.map( (item)  => {
   return `
   
   
     <div class="productitem">
       <img src="${item.imgUrl}"  class="img1" alt="img" />
       <div class="img1d"> <h2> ${item.title}</h2>
         <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
         <span>  ${item.size} </span>
     </div>
     <div class="productitemaction">
     <button class="removefromcart" onclick="removefromcart(${item.id})" >remove from cart</button>
      
     </div>
      
   </div>`
 }
 );
 
productdom.innerHTML=productsUi;
}

