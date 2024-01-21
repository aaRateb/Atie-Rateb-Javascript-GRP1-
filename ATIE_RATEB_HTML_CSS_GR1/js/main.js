function burgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Swiper slider
document.addEventListener('DOMContentLoaded', function(){

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000
        }
    });
})

// Dark mode
let darkMode = document.querySelector('.switch-mode')
darkMode.addEventListener('click', function() {
    let body = document.querySelector('body')
    body.classList.toggle('dark')
})

// Tab
let tabs = document.querySelectorAll(".tab")
let tabsLi = document.querySelectorAll(".tab-flex li")
let contents = document.querySelectorAll(".content")

tabs.forEach(function(itemTab) {

    itemTab.addEventListener('click', function() {

        contents.forEach(function(itemcontent) {
            itemcontent.classList.remove('content-active')
        })

        tabsLi.forEach(function(tabsli) {
            tabsli.classList.remove('tab-active')
        })

        this.classList.add('tab-active')

        if (this.classList.contains('tab-creation')) {
            let divcontent = document.querySelector(".content-creation")
            divcontent.classList.add('content-active')
        }
        if (this.classList.contains('tab-activite')) {
            let divcontent = document.querySelector(".content-activite")
            divcontent.classList.add('content-active')
        }
        if (this.classList.contains('tab-membres')) {
            let divcontent = document.querySelector(".content-membres")
            divcontent.classList.add('content-active')
        }
    })
})
