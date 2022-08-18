let name = document.querySelector('#name')
let date = document.querySelector('#date')
let btn = document.querySelector('.btn')
let avatar = document.querySelector('.avatar')

btn.addEventListener("click", () => {
    html = setAvatar(name.value, date.value)
    avatar.insertAdjacentHTML('beforeend', html);
})

function setAvatar(name, date) {
    size = date.split("-")
    size = 2022 - size[0]

    return `<div> <h3>${ name }: ${ size } y.o.</h3><img  width="${ size * 10 }px" src="ava.png" style="border-radius: 50%"></div>`
}