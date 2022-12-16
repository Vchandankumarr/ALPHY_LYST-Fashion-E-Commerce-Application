// let products_button = document.querySelector("#products_button");
// products_button.addEventListener("click",fetchdata());

(async function fetchdata(){
    try {
        let res = await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/products",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
               }
            })
            if(res.ok){
                let out = await res.json();
                 display(out);
            }
        } catch (error) {
          alert(error);
        }
})();

// console.log(main);
function display(data){
    let main = document.querySelector("#parent-product-div");
    main.innerHTML = "";
    let total = data.length;
    document.querySelector(".total").innerHTML = `Total Products: ${total}`
   main.innerHTML= data.map((elem)=>{
        return `
        <div class="child-product-div">
                    <div>
                    <img src=${elem.image}>
                    </div>
                    <div>
                    <div>
                        <p><b>Product:</b> ${elem.Product_name}</p>
                        <p><b>Brands:</b> ${elem.brands}</p>
                        <p><b>Price:</b> ${elem.price}</p>
                        <p><b>Description:</b> ${elem.description}</p>
                        <p><b>Id:</b> ${elem.id}</p>
                        <p><b>Item:</b> ${elem.type}</p>
                      </div>
                    <div class="deleteButton">
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
                  </div>
              </div>
        `
    }).join(" ");
}
