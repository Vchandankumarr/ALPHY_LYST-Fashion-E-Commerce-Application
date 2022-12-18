console.log("wish")
// https://639aeab431877e43d67b3d7d.mockapi.io/wishlists


let wishlistcontainer=document.getElementById("container")
let total_product=document.getElementById("total_product")




async function wishlist()
{
    try {
        let res= await fetch('https://639aeab431877e43d67b3d7d.mockapi.io/wishlists')
        // console.log(res.ok)
        if(res.ok)
        {
            let data=await res.json()
            console.log(data)
            total_product.innerHTML=`Total Products:${data.length}`
            renderwishlist(data)
        }

    } catch (error) {
        
    }
}
wishlist()


// //  {
//     Product_name:"Tasman Slippers-Brown",
// brands:"UGG",
// description:"Tessuti UK",
// id:"1",
// image:"https://cdna.lystit.com/200/250/tr/photos/tessuti/d9eb3519/ugg-Brown-Tasman-Slippers.jpeg",
// price:199,
// }
// // 

function renderwishlist(data)
{
    wishlistcontainer.innerHTML=null

    data.forEach(element => {
        let card=document.createElement("div");
        card.setAttribute("class","card")

        let prdct_name=document.createElement("h4")
        prdct_name.setAttribute("class","product_name")
        prdct_name.innerHTML=element.Product_name;


        let brand=document.createElement("p")
        brand.setAttribute("class","product_brand")
        brand.innerHTML=element.brands

        let description=document.createElement("p")
        description.setAttribute("class","product_description")
            description.innerHTML=element.description


        let image=document.createElement("img")
        image.setAttribute("class","product_image")
        image.src=element.image

        let price=document.createElement("p")
        price.setAttribute("class","product_price")
            price.innerHTML=`₹${element.price}`

            let buttondiv=document.createElement("div")
            buttondiv.setAttribute("class","buttondiv")


          let add_cart=document.createElement("button")
          add_cart.setAttribute("class","add_cart")
          add_cart.innerHTML="Add to Cart"

          add_cart.addEventListener("click",()=>{
            Addtocart(element.id,element.Product_name)
          })

          let remove=document.createElement("button")
          remove.setAttribute("class","remove")
            remove.innerHTML="Remove";

            remove.addEventListener("click",()=>{
                deleteProduct(element.id,element.Product_name)
              })


          buttondiv.append(add_cart,remove)

            card.append(image,prdct_name,brand,description,price,buttondiv)
            wishlistcontainer.append(card)
    });
}



async function deleteProduct(id,name){
    console.log("remove")
    console.log(id)
    try {
      let res=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/wishlists/${id}`,{
        method: 'DELETE'
      })
      console.log(res)
      let data=await res.json()
      console.log(data)
      alert(`${name} removed form cart!`)
      wishlist()
      
    } catch (error) {
      
    }
  }



  async function Addtocart(id,name)
{
  console.log("cart")
  console.log(id)
  try {
    let res=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/wishlists/${id}`)
    let data=await res.json()
    console.log(data)
    alert(`${name} removed form cart!`)
    addproducttowishlist(data)
  } catch (error) {
    
  }

}
async function addproducttowishlist(data){
  try {
    let res= await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/carts`,{
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
