function filteritems(category){
let cards=document.querySelectorAll(".card")
let buttons=document.querySelectorAll("#filter_btns>button")
// console.log(buttons)
cards.forEach((card)=>{
    if(category == "all"){
     card.style.display="flex"
    }else{
        if(card.classList.contains(category)){
            card.style.display ="flex"
        }
        else{
            card.style.display = "none"
        }
    }
})
// buttons.forEach((btn)=>{
//     btn.classList.remove("active")
// })

// event.target.classList.add("active")
}
// add to cart functionality
let cart=[];
let cards=document.querySelectorAll(".card")
cards.forEach((card)=>{
 let name=card.querySelector(".card_one>.card_info>h2").innertext
 let price=Number(card.querySelector(".card_one>.card_info>p").innerText.replace("₹",'').replace("/-",""))
 let quantity=card.querySelector(".card_two>.card_quantity>.quantity")
 console.log(name)
//  console.log(price)
//  console.log(quantity)

let plusbtn=card.querySelector(".plus")
plusbtn.addEventListener("click",()=>{
  quantity.innerText=Number(quantity.innerText)+1
})
let minusbtn=card.querySelector(".minus")
minusbtn.addEventListener("click",()=>{
  let current=Number(quantity.innerText)
  if(current>0){
    quantity.innerText=current-1
  }

})
let addbtn = card.querySelector(".addto_cart>button")
addbtn.addEventListener("click",()=>{
  let qty=Number(quantity.innerText)
  if(qty>0){
    let existingItem=cart.find(item=>item.name==name)
    if(existingItem){
      existingItem.qty+=qty
    }
    else{
      cart.push({name,qty,price})
    }
    updateCart()
  }
  else{
    alert("pleaseadd oneitem")
  }
})

function updateCart(){
    let totalQty=0;
    let totalPrice=0;
    cart.forEach((item)=>{
        totalQty+=item.qty
         totalPrice+=item.price*item.qty

    })
    let cart_qty=document.getElementById("cart_quantity")
    let cart_price=document.getElementById("cart_price")
    cart_qty.innerText=totalQty
    cart_price.innerText=`₹${totalPrice.toFixed(2)}`

    let sidebar_items=document.querySelector("#sidebar_items")
//  console.log("sidebar_items")
sidebar_items.innerHTML=""
cart.forEach((item)=>{
   sidebar_items.innerHTML+=`
   <div class = 'items_info'>
  <h1 >product:${item.name}</h1>
  
  <p>quantity:${item.qty}</p>
  <h2>price:${item.price}</h2>
 
  </div>
   <hr>`
    })
}
 })

// sidebar functionality
let icon1=document.getElementById("icon1")
let sidebar=document.getElementById("sidebar")
icon1.addEventListener("click",()=>{
     sidebar.style.right="0px";
})
let close_sidebar=document.getElementById("close_sidebar")
close_sidebar.addEventListener("click",()=>{
    sidebar.style.right="-350px";

})

// font size
// delete cart in sidebar
// buynow in button
// thankful for palcing

