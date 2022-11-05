let img = document.querySelector('.image')
let btns = document.querySelectorAll('button[data-mac]')
let title = document.querySelector('.title')
let boxes = document.querySelectorAll('[data-addP]')
let bot = document.querySelector('.bot')

let macs = {
    white: "./img/white.png",
    grey: "./img/grey.png",
}
let originalPrice = 1999


btns.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-mac')

        img.style.backgroundImage =  `url("${macs[key]}")` // macs.grey

        title.innerHTML = btn.innerText

        btns.forEach(elem => elem.classList.remove('active'))
        btn.classList.add('active')
    }
})

boxes.forEach(box => {
    box.onclick = () => {
        let addP = +box.getAttribute('data-addP')


        let total = originalPrice + addP 

        total += ''
        let arr = total.split([""])
        total=''
        arr[0]+=','
        arr.forEach(e => {
            total += e
        });
         

        bot.innerHTML = `$${total}` 




        boxes.forEach(elem => elem.classList.remove('activeB'))
        box.classList.add('activeB')
    }
});
