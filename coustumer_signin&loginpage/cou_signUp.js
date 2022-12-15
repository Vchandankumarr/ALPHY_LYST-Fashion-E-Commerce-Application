let signUp_button = document.querySelector("#SignUp_page form");

signUp_button.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(2);
    let all_input = document.querySelectorAll("#SignUp_page input");
    let obj ={};
    for(let i=0;i<all_input.length-1;i++){
        obj[all_input[i].id] = all_input[i].value;
    }
    console.log(obj);
})