
var backgroundImg = 
[
    "assets/background.jpg", "assets/background1.jpg", "assets/background2.jpg", "assets/background3.jpg",
    "assets/background4.jpg", "assets/background5.jpg", "assets/background6.jpg", "assets/background7.jpg",
    "assets/background8.jpg", "assets/background9.jpg", "assets/background10.jpg", "assets/background11.jpg",
    "assets/background12.jpg", "assets/background13.jpg", "assets/background14.jpg", "assets/background15.jpg"
]
var i = 1
document.getElementById("changeBackground-btn").addEventListener("click", function(){
    document.getElementById("body").style.backgroundImage = `url(${backgroundImg[i]})`
    if(i<backgroundImg.length-1){
        i++
    }else{
        i=0
    }

}) 
document.getElementById("hideAllElemet").addEventListener("click", function(){
    var showcontet = false
    if(this.innerHTML == "Hide Content"){
        document.getElementById("content").style.display = "none"
        this.innerHTML = "Show Content"
    }else{
        document.getElementById("content").style.display = ""
        this.innerHTML = "Hide Content"
    }
    

})


