if (localStorage.getItem("username")!=null){
    notify.innerHTML = `Welcome ${localStorage.getItem("username")} to Admin Panel`;
}
let notify = document.querySelector(".notification_user");


async function getProduct(){
    try {
        let res = await fetch("")
        
    } catch (error) {
        
    }
}