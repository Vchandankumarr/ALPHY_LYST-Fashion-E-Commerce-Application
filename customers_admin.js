// let button = document.querySelector("#customers_button");
// button.addEventListener("click",getdata());
window.addEventListener("load", () => {
    getdata();
});

async function getdata(){
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
      //alert(error);
    }
};

function display(data){
   // console.log(data);
    let tableTbodyContainer = document.querySelector("#right-side tbody");
    tableTbodyContainer.innerHTML = "";

    let new_formed_data = data.map((elem)=>{
        return `
        <tr>
            <td>${elem.firsName+" "+elem.lastName}</td>
            <td>${elem.emailId}</td>
            <td>${elem.password}</td>
            <td>${elem.contectNo}</td>
            <td class="remove" data-id=${elem.id}>Remove</td>
         </tr>
         `
    });
    tableTbodyContainer.innerHTML = new_formed_data.join(" ");

    // for removeing userer.....
    let remove_button = document.querySelectorAll(".remove");
   // console.log(remove_button);
    for(let btn of remove_button){
        btn.addEventListener("click",(event)=>{
            let data_id = event.target.dataset.id;
           // console.log(data_id);
           remove(data_id);
        })
    }
}

async function remove(id){
    try {
        let remove_data = await fetch(`https://639aeab431877e43d67b3d7d.mockapi.io/users/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type": "application/json",
            },
        });
        if(remove_data.ok){
            getdata();
        }
    } catch (error) {
        alert(error);
    }
}