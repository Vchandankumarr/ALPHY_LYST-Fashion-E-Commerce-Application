console.log("cart page")




let a=1;

let totalproduct=document.getElementById("totalproduct")
let totalprice=document.getElementById("Price")
let totaldiscount=document.getElementById("totalDiscount")
let totalbill=document.getElementById("TotalPric")
let totalDeliverycharges=document.getElementById("totalDeliverycharges")
// let totlprice;
// totalproduct.innerHTML=products.length
async function cart()
{
  try {
    let res=await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/carts")
    let data=await res.json()
    console.log(data)
    totalproduct.innerHTML=data.length
    append(data)
  

    // 
    const producttotal = data.reduce(
      (accumulator, el) => (+accumulator) + (+el.price),0
      // initialValue
    );
    // console.log(sumWithInitial)
    // 
totalprice.innerHTML="₹"+producttotal
// expected output: 10
totaldisc(producttotal)
  } 
  catch (error) {
    
  }
}
cart()
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
    totalDeliverycharges.innerHTML="₹"+0
  }
  else{
    totaldiscount.innerHTML=0+"%"
    totalDeliverycharges.innerHTML="₹"+500
     let totl= procuctdisc+500
     totalbill.innerHTML="₹"+totl
  }
}


function append(data) {

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
    price.innerHTML="₹"+element.price
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
          Decrement(totalnumber,productprice,element.price)
        } )

        let incrementspan=document.createElement("button")
        incrementspan.setAttribute("class", "increment")
        incrementspan.innerHTML="+"
       
        incrementspan.addEventListener("click", ()=>
        {
          Increment(totalnumber,productprice,element.price)
        })
        
       

        

// 
    let name=document.createElement("h4")
    name.innerHTML=element.Product_name

    let color=document.createElement("p")
    color.innerHTML="white"

    
    
    let addtowishlist=document.createElement("button")
    addtowishlist.setAttribute("class","button")
    addtowishlist.innerHTML="add to wishlis";
    addtowishlist.addEventListener("click",()=>{
      Addtowishlist(element.id)
    })

    let removeproduct=document.createElement("button")
    removeproduct.setAttribute("class","remove")
    removeproduct.innerHTML="remove";
   
    removeproduct.addEventListener("click",()=>{
      deleteProduct(element.id)
    })

    let description=document.createElement("p")
    description.innerHTML=element.description

    
    let placeOrder=document.createElement("button")
    placeOrder.innerHTML="place order"
    placeOrder.setAttribute("class","placeorder")
    placeOrder.onclick=()=>{
      payment()
    }

    incrementbtn.append(decrementspan,totalnumber,incrementspan)

    lcontainer.append(image,incrementbtn)

    Rcontainer.append(name,color,price,addtowishlist,description,removeproduct,description,placeOrder)
    pcontainer.append(lcontainer,Rcontainer)
    container.append(pcontainer)
    });
    

}

function Decrement(dec,productprice,price)
{
  console.log("-")
  if(a>1)
  {
    a--;
    // totalnumber.innerHTML=a
    dec.innerHTML=a
    productprice.innerHTML="₹"+price*a
    
    console.log(typeof a)


  }
}

function Increment(inc,productprice,price)
{
  console.log(price)
    console.log("+")
    a++
    let b=1
    inc.innerHTML=a
    productprice.innerHTML="₹"+price*a;
    

}

function payment()
{
  window.open("./paymentPage.html", "_self")
}

async function Addtowishlist(id)
{
  console.log("whistlist")
  console.log(id)
  try {
    let res=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/wishlists/${id}`)
    let data=await res.json()
    console.log(data)
    addproducttowishlist(data)
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



 async function deleteProduct(id){
  console.log("remove")
  console.log(id)
  try {
    let res=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/carts/${id}`,{
      method: 'DELETE'
    })
    console.log(res)
    let data=await res.json()
    console.log(data)
    cart()
  } catch (error) {
    
  }
}



