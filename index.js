let homeScore= 0
let guestScore = 0
function add1(){
    homeScore+=1
    document.getElementById("home-score").textContent=homeScore
}
function add2(){
    homeScore+=2
    document.getElementById("home-score").textContent=homeScore
}
function add3(){
    homeScore+=3
    document.getElementById("home-score").textContent=homeScore
}
function guestAdd1(){
    guestScore+=1
    document.getElementById("guest-score").textContent=guestScore
    console.log(guestScore)
}
function guestAdd2(){
    guestScore+=2
    document.getElementById("guest-score").textContent=guestScore
}
function guestAdd3(){
    guestScore+=3
    document.getElementById("guest-score").textContent=guestScore
}
function reset(){
    guestScore=0
    document.getElementById("guest-score").textContent=guestScore
    homeScore=0
    document.getElementById("home-score").textContent=homeScore
}