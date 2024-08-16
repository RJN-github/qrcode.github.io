const btn = document.querySelector(".searchbtn")
const qr = "https://api.qrserver.com/v1/create-qr-code/?data="

const searchbar = document.querySelector(".search")
let image = document.querySelector(".image")

async function qrcode(data) {

    btn.addEventListener("click",()=>{
        qrcode(searchbar.value);
        let result = document.querySelector(".result")
        result.classList.toggle("animate")        
    })


    let response = await fetch(`${qr+ data}`);
    let res = await response;
    console.log(res);

    image.src = res.url
    
    image.addEventListener("change",()=>{
        
    })

    let result = document.querySelector(".result")
    result.innerHTML = "Here's Your QR Code"  
}

qrcode();