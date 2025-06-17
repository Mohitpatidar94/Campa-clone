let changeImg = document.querySelector("#Myimg");
let circle = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let circle4 = document.querySelector("#circle4");
let button = document.querySelector(".btn");
let text_span = document.querySelector(".campa");
let sidebar = document.querySelector(".sidebar");
let menubtn = document.querySelector(".menubtn");
let hidesidebar_btn = document.querySelector(".hidesidebar");

circle.addEventListener("click", () => {
    console.log("clicked");
    button.style.backgroundColor = "blueviolet"
    text_span.style.color = "blueviolet"
    changeImg.src = "purple.png"
})

circle2.addEventListener("click", () => {
    changeImg.src = "2nd_cane.png";
    text_span.style.color = "rgb(214, 176, 79)"
    button.style.backgroundColor = "rgb(214, 176, 79)"
})

circle3.addEventListener("click", () => {
    changeImg.src = "3rd cane.png";
    text_span.style.color = "rgb(219, 118, 35)"
    button.style.backgroundColor = "rgb(219, 118, 35)"
})
circle4.addEventListener("click", () => {
    changeImg.src = "4th cane.png";
    text_span.style.color = "rgb(164, 165, 167)"
    button.style.backgroundColor = "rgba(139, 139, 139, 0.72)"
})

menubtn.addEventListener("click", () => {
   sidebar.style.display = "flex"
});
hidesidebar_btn.addEventListener("click", () => {
   sidebar.style.display = "none"
});

document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-img');
        const centerImg = document.getElementById('Myimg');

        // Animate current center image out
        centerImg.classList.add('animate-out');
        setTimeout(() => {
            centerImg.src = imgSrc;
            centerImg.classList.remove('animate-out');
            centerImg.classList.add('animate-in');
            setTimeout(() => {
                centerImg.classList.remove('animate-in');
            }, 700);
        }, 400);
    });
});



