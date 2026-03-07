window.addEventListener("load", () => {

    confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
    })

})

/* LOADING */

window.addEventListener("load", function(){

    const loader = document.getElementById("loader")

    loader.style.opacity = "0"

    setTimeout(()=>{
        loader.style.display = "none"
    },500)

})

const avatar = document.querySelector(".avatar")

avatar.addEventListener("click", () => {

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.5 }
    })

})

VanillaTilt.init(document.querySelector(".avatar"), {
    max: 15,
    speed: 400,
    glare:true,
    "max-glare":0.4
})

const text = "Chào bạn, tôi là Khoa còn dưới đây là thông tin về tui =)))."
let i = 0

function typing(){

    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i)
        i++
        setTimeout(typing,40)
    }

}

typing()

const toggle = document.getElementById("themeToggle")

toggle.addEventListener("click", () => {

    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark")
        document.body.classList.add("light")

        toggle.innerHTML = "🌙"
        localStorage.setItem("theme","light")

    }else{

        document.body.classList.remove("light")
        document.body.classList.add("dark")

        toggle.innerHTML = "☀️"
        localStorage.setItem("theme","dark")
    }

})

/* LOAD SAVED THEME */

window.onload = () => {

    const savedTheme = localStorage.getItem("theme")

    if(savedTheme === "dark"){
        document.body.classList.add("dark")
        toggle.innerHTML = "☀️"
    }else{
        document.body.classList.add("light")
    }

}