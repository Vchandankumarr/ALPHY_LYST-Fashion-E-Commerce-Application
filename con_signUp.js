
let signup_button = document.querySelector("#SignUp_page form");

signup_button.addEventListener("submit",(event)=>{
    event.preventDefault();
    let all_input = document.querySelectorAll("#SignUp_page input");
    let obj = {};
    for(let i=0;i<all_input.length-1;i++){
        obj[all_input[i].id]=all_input[i].value;
    }
    if(obj)
    {
      userdetails(obj);
    }
});

async function userdetails(obj){
    try {
        let res = await fetch("https://639aeab431877e43d67b3d7d.mockapi.io/users",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(obj),
        })
        if(res.ok){
            console.log(await res.json());
            alert("Sign Up Successful !");
            window.location.href="./cou_signIn.html"
        }
    } catch (error) {
        alert("something is wrong");
    }
}