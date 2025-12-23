let signin=document.querySelector(".signin");
let username=document.getElementById("username");
let password=document.getElementById("pass");
let signup=document.getElementById("signup");
console.log(allCookiesList());
signin.addEventListener("submit",(e)=>
{
    e.preventDefault();
    let cookie=getCookie(username.value)
    if(cookie)
    {
        if(decodeURIComponent(cookie)===password.value)
        {
            open("./index.html");
        }
        else
        {
           open("./signup.html"); 
        }
    }
    else
    {
       open("./signup.html"); 
    }
});
signup.addEventListener("click",()=>
{
    open("./signup.html");
});