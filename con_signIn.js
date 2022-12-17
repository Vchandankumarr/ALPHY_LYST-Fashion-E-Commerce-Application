let signin_navbar = document.querySelector("#signin_navbr");
let signinContainer = document.querySelector("#signin_page");


{ 
   signinContainer.innerHTML = `
    <form>
            <h1>The only fashion site you need</h1><br>
               <p>
                   <label>Email</label>
                  <input id="email" type="email", placeholder="mysuperusername690" required="required"/>
                </p><br>
                  <p>
                   <label>Password</label>
                    <input id="password" type="password", placeholder="Enter you password" required="required"/>
                </p><br>
                <p class="login button">
                    <input id="button" type="submit", value="Sign In"/>
                </p><br>
                
                <p>Doesn't have a account ? <a id="sign_up_link" href="./cou_signUp.html">Sign Up</a></p>
     </form>
    `
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

}

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
                    alert("Login Successful");
                    flag=true;
                    // let signin_navbar = document.querySelector("#signin_navbr");
                    // signin_navbar.innerHTML = "Account";
                    window.location.href="./index.html";
            }
      };
    if(flag!=true)
    {
         alert("Wrong Credentials!");
    }
}







