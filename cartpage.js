console.log("cart page")




let a=1;

let totalproduct=document.getElementById("totalproduct")
let totalprice=document.getElementById("Price")
let totaldiscount=document.getElementById("totalDiscount")
let totalbill=document.getElementById("TotalPric")
let totalDeliverycharges=document.getElementById("totalDeliverycharges")
let afterdisc=document.getElementById("after_disc")
// afterdisc.innerHTML=5522
// let totlprice;
// totalproduct.innerHTML=products.length

// let cart_items_ls=JSON.parse(localStorage.getItem("My_cart"))
 let ttlprc=0;
async function cart(ttlprc)
{
  try {
    let res=await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/carts")
    let data=await res.json()
    console.log(data)
    totalproduct.innerHTML=data.length
    
  

    // 
    const producttotal = data.reduce(
      (accumulator, el) => (+accumulator) + (+el.price),0
      // initialValue
    );
    // console.log(sumWithInitial)
    // 
  
   
    console.log(ttlprc)
totalprice.innerHTML="₹"+producttotal
// expected output: 10
totaldisc(producttotal)
append(data,producttotal)
  } 
  catch (error) {
    
  }
}
cart(ttlprc)
console.log(ttlprc)
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,0
  // initialValue
);

console.log(sumWithInitial);
// expected output: 10





function totaldisc(procuctdisc)
{
  if(procuctdisc>2000)
  {
    totaldiscount.innerHTML=20+"%";
      let totlprice= procuctdisc-((20/100)*procuctdisc)
    totalbill.innerHTML="₹"+totlprice
    totalDeliverycharges.innerHTML="₹"+0;
    afterdisc.innerHTML=`You will save ₹${Math.floor(procuctdisc-totlprice)} on this order`
  }
  else{
    totaldiscount.innerHTML=0+"%"
    totalDeliverycharges.innerHTML="₹"+500
     let totl= procuctdisc+500
     totalbill.innerHTML="₹"+totl
  }
}


function append(data,producttotal) {
console.log(producttotal)
    let container = document.getElementById("productcontainer");
    container.innerHTML = null;

    data.forEach(element => {
        let pcontainer=document.createElement("div")
        pcontainer.setAttribute("class","pcontainer")
    let lcontainer=document.createElement("div")
    
    let Rcontainer=document.createElement("div")

    let image=document.createElement("img")
    image.setAttribute("class","image")
    image.src=element.image

    let price=document.createElement("p")
    price.setAttribute("class","price")

    price.innerHTML="Price: "+"₹"+element.price
    let productprice=price

//  adding increment and decrement 


        let incrementbtn=document.createElement("div")
        incrementbtn.setAttribute("class", "wrapper")
        

        

        let totalnumber=document.createElement("span")
        totalnumber.setAttribute("class", "totalnumber")
        totalnumber.innerHTML=a

        let decrementspan=document.createElement("button")
        decrementspan.setAttribute("class", "decrement")
        decrementspan.innerHTML="-";
        
        decrementspan.addEventListener("click",()=>{
          Decrement(totalnumber,productprice,element.price,producttotal)
        } )

        let incrementspan=document.createElement("button")
        incrementspan.setAttribute("class", "increment")
        incrementspan.innerHTML="+"
       
        incrementspan.addEventListener("click", ()=>
        {
          Increment(totalnumber,productprice,element.price,producttotal)
        })
        
       

        

// 
    let name=document.createElement("h4")
    name.setAttribute("class", "name")
    name.innerHTML=element.Product_name


          let delivery=document.createElement("p")
          delivery.setAttribute("class","delivery")
          delivery.innerHTML=`Delivery in ${Math.floor(Math.random() * 10)} days.`


    let brands=document.createElement("p")
    brands.setAttribute("class","brands")
    brands.innerHTML=`Brand : ${element.brands}`

    
    
    let addtowishlist=document.createElement("button")
    addtowishlist.setAttribute("class","button")
    addtowishlist.innerHTML="Add to Wishlist";
    addtowishlist.addEventListener("click",()=>{
      Addtowishlist(element.id,element.Product_name)
    })

    let removeproduct=document.createElement("button")
    removeproduct.setAttribute("class","remove")
    removeproduct.innerHTML="Remove";
   
    removeproduct.addEventListener("click",()=>{
      deleteProduct(element.id,element.Product_name)
    })

    let description=document.createElement("p")
    description.innerHTML=element.description

    
    let placeOrder=document.createElement("button")
    placeOrder.innerHTML="PLACE ORDER"
    placeOrder.setAttribute("class","placeorder")
    placeOrder.onclick=()=>{
      payment(element)
    }

    incrementbtn.append(decrementspan,totalnumber,incrementspan)

    lcontainer.append(image,incrementbtn)

    Rcontainer.append(name,delivery,brands,price,addtowishlist,description,removeproduct,description,placeOrder)
    pcontainer.append(lcontainer,Rcontainer)
    container.append(pcontainer)
    });
    

}

function Decrement(dec,productprice,price,ttlprc)
{
  console.log("-")
  if(a>1)
  {
   
   
    dec.innerHTML=a
    productprice.innerHTML="₹"+price*a
    console.log(ttlprc)
    let d=ttlprc+(price*(a-2))
    console.log(d)

    totalprice.innerHTML='₹'+d
    totalbill.innerHTML='₹'+d
    // console.log(typeof a)
   
    a--;
  }
}

function Increment(inc,productprice,price,ttlprc)
{
  // console.log(price)
    // console.log("+")
    
    // let b=1
    inc.innerHTML=a
    productprice.innerHTML="₹"+price*a;
let t=ttlprc+(price*a)
console.log(t)
    totalprice.innerHTML="₹"+t
    totalbill.innerHTML='₹'+t
    a++
    

}

function payment(element)
{
console.log(element)

 localStorage.setItem("buy-list",JSON.stringify(element))

  window.location.href="./payment.html"
}

async function Addtowishlist(id,name)
{
  console.log("whistlist")
  console.log(id)
  try {
    let res=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/carts/${id}`)
    let data=await res.json()
    console.log(data)
    addproducttowishlist(data)
    alert(`${name} added to wishlist!`)
  } catch (error) {
    
  }

}
async function addproducttowishlist(data){
  try {
    let res= await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/wishlists`,{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });
    // console.log(res.ok)
    if(res.ok)
    {
      let result=await res.json()
      console.log(result)
    }
  } catch (error) {
    
  }
}



 async function deleteProduct(id,name){
  console.log("remove")
  console.log(id)
  try {
    let res=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/carts/${id}`,{
      method: 'DELETE'
    })
    console.log(res)
    let data=await res.json()
    console.log(data)
    alert(`${name} removed form cart!`)
    cart()
  } catch (error) {
    
  }
}

let accounticon = document.querySelector("#accounticon");
accounticon.innerHTML = localStorage.getItem("sign_username");



