let signup=document.querySelector(".signup");
let username=document.getElementById("username");
let password=document.getElementById("pass");
let usernamepattern=/^.{3,}$/;
let passwordpattern=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}$/
signup.addEventListener("submit",(e)=>
{
    e.preventDefault();
    let cookie=getCookie(username.value)
    if(cookie)
    {
        alert("This username already exists");
    }
    else
    {
        if(usernamepattern.test(username.value))
        {
            if(passwordpattern.test(password.value))
            {
                setCookie(username.value,password.value);
                open("./SignIn.html","_self");
            }
            else
            {
                alert("Invalid password");
            }
        }
        else
        {
            alert("Invalid username");
        }
    }
});