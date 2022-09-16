

var dv = document.querySelectorAll("#dv")
var wd = document.querySelectorAll("#wd")
var inp = document.querySelectorAll("#inp")

var nd1 = document.querySelector(".nd1")
var nd2 = document.querySelector(".nd2")
var nd3 = document.querySelector(".nd3")
var nd4 = document.querySelector(".nd4")
var nd5 = document.querySelector(".nd5")
var nd6 = document.querySelector(".nd6")
var nd7 = document.querySelector(".nd7")
var nd8 = document.querySelector(".nd8")
var nd9 = document.querySelector(".nd9")
var nd10 = document.querySelector(".nd10")
var nd11 = document.querySelector(".nd11")
var nd12 = document.querySelector(".nd12")
var nd13 = document.querySelector(".nd13")
var nd14 = document.querySelector(".nd14")
var nd15 = document.querySelector(".nd15")
var nd16 = document.querySelector(".nd16")
var nd17 = document.querySelector(".nd17")
var nd18 = document.querySelector(".nd18")
var nd19 = document.querySelector(".nd19")
var nd20 = document.querySelector(".nd20")
var nd21 = document.querySelector(".nd21")
var nd22 = document.querySelector(".nd22")
var nd23 = document.querySelector(".nd23")
var nd24 = document.querySelector(".nd24")
var nd25 = document.querySelector(".nd25")
nd1.innerHTML = 1
nd2.innerHTML = 2
nd3.innerHTML = 3
nd4.innerHTML = 4
nd5.innerHTML = 5
nd6.innerHTML = 6
nd7.innerHTML = 7
nd8.innerHTML = 8
nd9.innerHTML = 9
nd10.innerHTML = 10
nd11.innerHTML = 11
nd12.innerHTML = 12
nd13.innerHTML = 13
nd14.innerHTML = 14
nd15.innerHTML = 15
nd16.innerHTML = 16
nd17.innerHTML = 17
nd18.innerHTML = 18
nd19.innerHTML = 19
nd20.innerHTML = 20
nd21.innerHTML = 21
nd22.innerHTML = 22
nd23.innerHTML = 23
nd24.innerHTML = 24
nd25.innerHTML = 25

var wd1 = document.querySelector(".wd1")
var wd2 = document.querySelector(".wd2")
var wd3 = document.querySelector(".wd3")
var wd4 = document.querySelector(".wd4")
var wd5 = document.querySelector(".wd5")

var inp1 = document.querySelector(".inp1")
var inp2 = document.querySelector(".inp2")
var inp3 = document.querySelector(".inp3")
var inp4 = document.querySelector(".inp4")
var inp5 = document.querySelector(".inp5")

var random = document.querySelector(".random")
var play = document.querySelector(".play")
var reset = document.querySelector(".reset")
var rr = document.querySelector(".rr")

// PLAY
play.addEventListener("click",function(){

    wd1.innerHTML = parseInt(Math.random()*26)
    wd2.innerHTML = parseInt(Math.random()*26)
    wd3.innerHTML = parseInt(Math.random()*26)
    wd4.innerHTML = parseInt(Math.random()*26)
    wd5.innerHTML = parseInt(Math.random()*26)

    for(var i of dv){
        if(i.innerHTML == wd1.innerHTML ||
            i.innerHTML == wd2.innerHTML ||
            i.innerHTML == wd3.innerHTML ||
            i.innerHTML == wd4.innerHTML ||
            i.innerHTML == wd5.innerHTML){
            i.style.visibility = "hidden"
        }
    }
    for(var j of wd){
        if(j.innerHTML == inp1.value ||
            j.innerHTML == inp2.value ||
            j.innerHTML == inp3.value ||
            j.innerHTML == inp4.value ||
            j.innerHTML == inp5.value){
            j.style.backgroundColor = "#70b3dd"
        }
        else{
            j.style.backgroundImage = "linear-gradient(to top left, #40375f, #787a9b)"
            for(var k of inp){
                k.disabled = true
            }
            random.disabled = true
            play.disabled = true
        }
    }  
    for (var k of inp){
        if(k.value == wd1.innerHTML ||
           k.value  == wd2.innerHTML ||
           k.value  == wd3.innerHTML ||
           k.value  == wd4.innerHTML ||
           k.value  == wd5.innerHTML){
           k.style.backgroundColor = "#70b3dd"
        }
    }          
})

// RANDOM
random.addEventListener("click",function(){

    inp1.value = parseInt(Math.random()*26)
    inp2.value = parseInt(Math.random()*26)
    inp3.value = parseInt(Math.random()*26)
    inp4.value = parseInt(Math.random()*26)
    inp5.value = parseInt(Math.random()*26)
})

// RESET
reset.addEventListener("click",function(){

    for(var i of dv){
        i.style.visibility = "visible"
    }
    for(var j of wd){
        j.innerHTML = ""
        j.style.backgroundColor = ""
        j.style.backgroundImage = ""
    }
    for(var k of inp){
        k.disabled = false
        k.value = ""
        k.style.backgroundColor = "#554786"
    }
    random.disabled = false
    play.disabled = false
    
})
