
let signin_button = document.querySelector("#signin_page form");

//console.log(signin_button);

signin_button.addEventListener("submit",(event)=>{
    event.preventDefault();
let all_input = document.querySelectorAll("#signin_page input");
    let obj= {
        [all_input[0].id] : all_input[0].value,
        [all_input[1].id] : all_input[1].value,
    };       

       userdata(obj);
});

async function userdata(data){
    try {
        let res = await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/users");
        let out = await res.json();
        checkdata(data,out);
    }
    catch(error){
     // alert("error");
    }
}

function checkdata(input,data){
   //console.log(data);
   //console.log(input);
   let flag = false;
      for(let i=0;i<data.length;i++){
            if(input.email == data[i].emailId && input.password == data[i].password){
                    alert("Login Successfull");
                    flag=true;
                   // window.location.href="";
                     break;
            }
      };
    if(flag!=true)
    {
         alert("Wrong Codintioal");
    }
}







