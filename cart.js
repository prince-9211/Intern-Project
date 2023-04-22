const img = localStorage.getItem("img")
document.getElementById("img-cart").src = img

document.getElementById("pay-btn").addEventListener("click", ()=>{
    
document.getElementById("img-cart").src = ""
    
})