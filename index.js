let id=1;
let img;
let title;
let productsnumber=20
let productsdiv = document.querySelector(".cards");
function getimg(id)
{
    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://dummyjson.com/products/"+id);
    xhr.send("");
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState===4 && xhr.status===200)
        {
            let data=xhr.responseText;
            data=JSON.parse(data);
            img=document.querySelector(".slider");
            title=document.querySelector(".title");
            img.src=data.thumbnail;
            title.innerText=data.title;
        }
    }
}
function getproduct(id)
{
    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://dummyjson.com/products/"+id);
    xhr.send("");
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState===4 && xhr.status===200)
        {
            let data=xhr.responseText;
            data=JSON.parse(data);
            console.log(data);
            let product=document.createElement("form");
            product.setAttribute("class","product"+id);
            product.innerHTML=`
            <h5>${data.title}</h5> 
            <img src="${data.thumbnail}" class="card">
            <button type="sumbit" class="btn${id}">details</button>`
            productsdiv.appendChild(product);
            button=document.querySelector(`.btn${id}`);
            product.addEventListener("submit",e=>
            {
                e.preventDefault();
                let detailspage=open(`./details.html`);
                detailspage.onload = function() {
                    let prodimage=detailspage.document.querySelector(".slider");
                    prodimage.src=data.thumbnail;
                    for(let i in data)
                    {
                        if(i!=="meta" && i!=="images" && i!=="thumbnail" && i!=="reviews" && i!=="id" && i!=="dimensions")
                        {
                          detailspage.document.body.innerHTML += 
                        `<p>${i}:${data[i]}</p>`;  
                        }
                    }
                    let backbtn=detailspage.document.createElement("button");
                    backbtn.innerText="back";
                    backbtn.setAttribute("id","backbtn");
                    detailspage.document.body.appendChild(backbtn);
                    let btn=detailspage.document.getElementById("backbtn");
                    btn.addEventListener("click",()=>{open("./index.html");})
                    };
            }
            )
        }
    }
}
getimg(id);
id++;
let slider=setInterval(()=>
{
    if(id>productsnumber)id=1;
    getimg(id);
    id++;
},1500)
for(let i=1;i<=productsnumber;i++)
{
    getproduct(i);
}
