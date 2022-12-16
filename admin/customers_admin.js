// let button = document.querySelector("#customers_button");
// button.addEventListener("click",getdata());

(async function getdata(){
    try {
        let res = await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/users",{
           method: "GET",
           headers: {
            "Content-Type": "application/json",
           }
        })
        if(res.ok){
            let out = await res.json();
             //console.log(out);
             display(out);
        }
    } catch (error) {
      alert(error);
    }
})();

function display(data){
    //console.log(data);
    let tableTbodyContainer = document.querySelector("#right-side tbody");
    tableTbodyContainer.innerHTML = "";

    let new_formed_data = data.map((elem)=>{
        return `
        <tr>
            <td>${elem.firstName+" "+elem.lastName}</td>
            <td>${elem.emailId}</td>
            <td>${elem.password}</td>
            <td>${elem.contectNo}</td>
            <td class="remove">Remove</td>
         </tr>
         `
    });
    tableTbodyContainer.innerHTML = new_formed_data.join(" ");
}