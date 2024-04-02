// Sidebar
const sidebar = document.querySelector(".sidebar")
const menubtn = document.querySelector(".menubtn")
const closebtn = document.querySelector(".closebtn")

function openSidebar() {
    sidebar.style.display = "flex"
}
function closeSidebar() {
    sidebar.style.display = "none"
}

//Services carousel slider
const slides = document.querySelectorAll(".slide")
let counter = 0

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const goNext = () => {
    if (counter < 4) {
        counter++
        slideImage()
        gsap.from(".slide img", {
            y: "-100%",
            duration: 1
        })
        gsap.from(".slide .content", {
            y: "100%",
            opacity: 0,
            duration: 1
        })
    }
}

const goPrev = () => {
    if (counter > 0) {
        counter--
        slideImage()
        gsap.from(".slide img", {
            y: "-100%",
            duration: 1
        })
        gsap.from(".slide .content", {
            y: "100%",
            opacity: 0,
            duration: 1
        })
    }
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

//Contact form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


//Form Data send
const url = "https://script.google.com/macros/s/AKfycbwrY0e29vJZpMs24cI9-SrpVxm4_Q_K7WhLK6YMMp4ZqGObA8ctdtErDCJVcEB58m1G/exec"
const form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
    e.target.btn.innerHTML = "Sending...";
    let getData = new FormData(form)
    fetch(url, {
        method: "POST",
        body: getData
    }).then((res) => res.text())
        .then((finalRes) => {
            form.reset()
            e.target.btn.innerHTML = 'Sent <i class="ri-checkbox-circle-fill"></i>'
            setTimeout(() => {
                e.target.btn.innerHTML = "Send"
            }, 5000)
            console.log(finalRes)
        })
    e.preventDefault()
})

//GSAP Animation
const tlNav = gsap.timeline()
tlNav.from("nav .logo", {
    x: "-200%",
    delay: .5
})
tlNav.from("nav button", {
    x: 200,
    stagger: 0.1,
    opacity: 0
})
tlNav.from("ul li", {
    y: -100,
    stagger: 0.1,
    opacity: 0
})

const tlMain = gsap.timeline()
tlMain.from("main h1", {
    x: "-100%",
    delay: .5,
    opacity: 0
})
tlMain.from("main img", {
    scale: 0.5,
    opacity: 0
})
tlMain.from(".infinite-scroll", {
    y: "30%",
    opacity: 0
})
gsap.from("#about img", {
    y: "50%",
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: "#about img",
        scroller: "body"
    }
})
gsap.from(" .about-info", {
    y: "100%",
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: " .about-info",
        scroller: "body"
    }
})
gsap.from(".slide .slideImage", {
    y: "-100%",
    duration: 1.5,
    delay: .5,
    scrollTrigger: {
        trigger: ".slide .slideImage",
        scroller: "body"
    }
})
gsap.from(".slide .content", {
    y: "100%",
    delay: .5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".slide .content",
        scroller: "body"
    }
})

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);