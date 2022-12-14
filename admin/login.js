let register_button = document.querySelector("#register form");

register_button.addEventListener("submit",(event)=>{
    event.preventDefault();
    let register_input = document.querySelectorAll("#register input");
   // console.log(register_input);
   let obj = {};
  for(let i=0;i<register_input.length-1;i++){
    obj[register_input[i].id]= register_input[i].value;
  }
  // console.log(obj);
  if(obj){
    register_form(obj);
  }

});

async function register_form(obj){
    try {
        let res = await fetch("http://localhost:3000/register",{
            method : "POST",
            headers : {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(obj),
        });
        if(res.ok){
            alert("Registation is Successful");
            localStorage.setItem("username",obj.username);
            localStorage.setItem("password",obj.password);
            window.location.href = "#tologin";
        }
        else
        {
            alert("Registation is not happening");
        }
    } catch (error) {
        alert("Something went wrong");
    }
}


let login_button = document.querySelector("#login form");


login_button.addEventListener("submit",login_input);

function login_input(event){
    event.preventDefault();
    let login_input_all = document.querySelectorAll("#login input");

    let obj = {};
    for(let i=0;i<login_input_all.length-1;i++){
        obj[login_input_all[i].id]=login_input_all[i].value;
    }
      loginformApi(obj);
}

async function loginformApi(obj){
     let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    console.log(username,password);
      if(username==obj.username||username=="admin"){
          if(password==+(obj.password)||password=="admin")
                {
                    alert("Login Successful");
                    let notify = document.querySelector(".notification_user");
                    window.location.href="admin.html";
                }
                else
                {
                    alert("Password is in correct");
                }
            }
            else
            {
                alert("Please fill the correct username");
            }
}
    