console.log("cart page")


products=[
    {
        createdAt: "2022-12-12T19:52:17.826Z",
        productName: "Bespoke Concrete Shirt",
        avatar: "https://loremflickr.com/640/480/fashion",
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        price: "795.00",
        id: "20"
      },
      {
        createdAt: "2022-12-12T19:52:17.826Z",
        productName: "Bespoke Concrete Shirt",
        avatar: "https://loremflickr.com/640/480/fashion",
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        price: "795.00",
        id: "20"
      },
      {
        createdAt: "2022-12-12T19:52:17.826Z",
        productName: "Bespoke Concrete Shirt",
        avatar: "https://loremflickr.com/640/480/fashion",
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        price: "795.00",
        id: "20"
      },
      {
        createdAt: "2022-12-12T19:52:17.826Z",
        productName: "Bespoke Concrete Shirt",
        avatar: "https://loremflickr.com/640/480/fashion",
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        price: "795.00",
        id: "20"
      },
      {
        createdAt: "2022-12-12T19:52:17.826Z",
        productName: "Bespoke Concrete Shirt",
        avatar: "https://loremflickr.com/640/480/fashion",
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        price: "795.00",
        id: "20"
      }
]
console.log(products.length)
// totalproduct.innerHTML=products.length
append(products)
// 

// {
//     createdAt: "2022-12-12T19:52:17.826Z",
//     productName: "Bespoke Concrete Shirt",
//     avatar: "https://loremflickr.com/640/480/fashion",
//     description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
//     price: "795.00",
//     id: "20"
//   },


let totalproduct=document.getElementById("totalproduct")
let totalprice=document.getElementById("Price")
let totaldiscount=document.getElementById("totalDiscount")
let totalbill=document.getElementById("TotalPric")
let totalDeliverycharges=document.getElementById("totalDeliverycharges")
// let totlprice;
totalproduct.innerHTML=products.length
async function cart()
{
  try {
    let res=await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/carts")
    let data=await res.json()
    console.log(data)
    totalproduct.innerHTML=data.length
    append (data)
  } catch (error) {
    
  }
}
cart()
// cart().then(data=>console.log(data))

// to calculate total ammount
// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const producttotal = products.reduce(
  (accumulator, el) => accumulator + (+el.price),
  initialValue
);

console.log(typeof producttotal);
totalprice.innerHTML="₹"+producttotal
// expected output: 10
totaldisc(producttotal)

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
    totaldiscount.innerHTML=0
    totalDeliverycharges.innerHTML="₹"+500
     let totl= procuctdisc+500
     totalbill.innerHTML=totl
  }
}


function append (data) {

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

    let name=document.createElement("h4")
    name.innerHTML=element.Product_name

    let color=document.createElement("p")
    color.innerHTML="white"

    let price=document.createElement("p")
    price.innerHTML="₹"+element.price
    
    let addtowishlist=document.createElement("button")
    addtowishlist.setAttribute("class","button")
    addtowishlist.innerHTML="add to wishlis";
    addtowishlist.addEventListener("click",Addtowishlist)

    let removeproduct=document.createElement("button")
    removeproduct.setAttribute("class","remove")
    removeproduct.innerHTML="remove";
   
    removeproduct.addEventListener("click",RemoveProduct)

    let description=document.createElement("p")
    description.innerHTML=element.description

    
    let placeOrder=document.createElement("button")
    placeOrder.innerHTML="place order"
    placeOrder.setAttribute("class","placeorder")
    placeOrder.onclick=()=>{
      payment()
    }

    lcontainer.append(image)

    Rcontainer.append(name,color,price,addtowishlist,description,removeproduct,description,placeOrder)
    pcontainer.append(lcontainer,Rcontainer)
    container.append(pcontainer)
    });
    

}


function payment()
{
  window.open("./paymentPage.html", "_self")
}

function Addtowishlist()
{
  console.log("whistlist")
}

async function RemoveProduct()
{
  console.log("remove product")
  let res=await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/carts",{
    method:'DELETE',
    headers: {
      "Content-Type" : "application/json",
  },
  body: JSON.stringify(obj),
  })
}