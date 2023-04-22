const arr = []

document.getElementById("buy-btn").addEventListener("click", ()=>{
    const img = document.getElementById("img").src
    console.log(img, "img*************")
    localStorage.setItem("img",img)
   
})




