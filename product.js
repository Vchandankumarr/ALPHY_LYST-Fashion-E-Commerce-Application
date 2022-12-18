let url="https://639aeab431877e43d67b3d7d.mockapi.io/products"
async function production(){
    try {
        let response=await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/products");
        if(response.ok){
        let ans=await response.json();
        productsNumber(ans.length)
        display(ans)
       
        }
    } catch (error) {
        console.log(error);
    }
}
function productsNumber(number){
    document.querySelector("#products").innerText=`${number} products are available`



}

production()
function display(data){
  let result=  data.map((item)=>{
        return`
        <div id="cards">
            <img src=${item.image} alt="">
            <div id="cardsFlex">
                <div id="childOne">
                     <h2>${item.brands}</h2>
                     <p>${item.Product_name}</p>
                     <h2>₹ ${item.price}</h2>
                     <div id="sub_child">
                            <i class="fa-sharp fa-solid fa-link iconchain"></i>
                              <p>${item.description}</p>
                      </div>
                      <button id="add" data-id=${item.id}>Add TO Cart</button>
                </div>
                <div id="childTwo">
                <button id="wishlist"> 
                       <i  data-id=${item.id}  class="fa-regular fa-heart fa-2x"></i>
                       </button>
                </div>
            </div>
         </div>
 `
    });
    document.querySelector("#productsCard").innerHTML=result.join(" ")
    let btn=document.querySelectorAll("#add");
    for(let addCardBtn of btn){
        addCardBtn.addEventListener("click",function(e){
            alert("Added On cart Page")
            card_data(e.target.dataset.id);
    })
    };
    let wishlist=document.querySelectorAll("#wishlist");
    for(let wishlistAdd of wishlist){
        let count=0;
        let flag = false;
        wishlistAdd.addEventListener("click",function(event){
           if(flag == false){
            // flag = true
            // console.log(flag)
            alert("Added On wishlist")
    let id=event.target.dataset.id;
    wishlist_data(event.target.dataset.id)
    let div=event.path[1];
    console.log(event.target);
   
   
    div.innerHTML=
    `<i id="redcolor" data-id=${id} class="fa-solid fa-heart fa-2x"></i>
    `
    flag = true

           }else{
            flag = false
            console.log(flag)
              let id=event.target.dataset.id;
    // wishlist_data(event.target.dataset.id)
    let div=event.path[1];
    console.log(event.target);
    console.log(flag , "ritesh")
    alert("Removed from Wishlist")
   
    div.innerHTML=
    `  <i data-id=${id}  class="fa-regular fa-heart fa-2x"></i>
    `
           }
           
    
        })
    }
    // count++;
    // console.log(count);
    // let id=event.target.dataset.id;
    // wishlist_data(event.target.dataset.id)
    // let div=event.path[1];
    // console.log(event.target);
    // div.innerHTML="";
    // div.innerHTML=
    // `<i id="redcolor" data-id=${id} class="fa-solid fa-heart fa-2x"></i>
    // `



    let colorWishlist=document.querySelectorAll("#redcolor");
    console.log(colorWishlist);
    // for(let heartBtn of colorWishlist){
    //     heartBtn.addEventListener("click",function(event){
    //         console.log(event);
    //     })
    // }
   
}

async function card_data(id){
    try {
        let response=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/products/${id}`);
        if(response.ok){
            let result=await response.json();
            console.log(result);
            addCardPageData(result);
        }
    } catch (error) {
        console.log(error);
    }
};

async function addCardPageData(data){
    try {
        let response=await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/carts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(response.ok){
           let result=await response;
        }
    } catch (error) {
        console.log(error);
    }
}
async function wishlist_data(id){
    try {
        let response=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/products/${id}`);
        if(response.ok){
            let result=await response.json();
            wishlistPageData(result)
            return
        }
    } catch (error) {
        console.log(error);
    }
};
async function wishlistPageData(data){
    try {
        let response=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/wishlists`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        if(response.ok){
            let result=await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};
function sorting(){
   let value=document.querySelector("#sort").value;
   if(value=="rec"){
    production()
   }
   if(value=="desc"){
    console.log("obj");
    sortHightoLow()
   }
   if(value=="asc"){
    sortLowtoHigh()
   }
}

async function sortLowtoHigh(){
try {
        let response=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/products?sortBy=price&order=asc`);
        let res=await response.json();
        display(res)
        console.log(res);
    } catch (error) {
        
    }

}
async  function sortHightoLow(){
    try {
        let response=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/products?sortBy=price&order=desc`);
        let res=await response.json();
        display(res)
        // console.log(res);
    } catch (error) {
        
    }
}
let filterTag=document.querySelectorAll(".Dofilter");
for(let filterBtn of filterTag){
    filterBtn.addEventListener("click",function(e){
        filterData(e.target.innerText);
        let text= document.querySelector("#noFilter")
       text.innerText=e.target.innerText;
       text.style.color="#8735ea"
    })
}
async function filterData(value){
    try {
        let response=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/products?filter=${value}`);
        if(response.ok){
            let res=await response.json();
            display(res)
        }
    } catch (error) {
    }
}

let Clear=document.querySelector("#clear")
Clear.addEventListener("click",()=>{
    let text= document.querySelector("#noFilter");
    text.innerText="No filters Applied";
    text.style.color="rgb(79, 76, 76)"
    ClearAllFilter()
})
async function ClearAllFilter(){
    try {
        let response=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/products`);
        if(response.ok){
            let res=await response.json();
            display(res)
        }
    } catch (error) {
    }
};

function  search(){
let val =document.querySelector("#searchFunction").value;
displaySearch(val)
}

async function displaySearch(val){
    try {
        let response=await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/products/?filter=${val}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(response.ok){
            let result =await response.json();
           display(result);

        }
    } catch (error) {
        
    }
} 
let accounticon = document.querySelector("#accounticon");
accounticon.innerHTML = localStorage.getItem("sign_username");