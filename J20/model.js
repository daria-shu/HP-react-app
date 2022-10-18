const gender = document.querySelector('#gender')
const rank = document.querySelector('#rank')
const first = document.querySelector('#first')
const last = document.querySelector('#last')
const photo = document.querySelector('#photo')


function setData(data) {
    gender.innerHTML = data.results[0].gender
    rank.innerHTML = data.results[0].name.title
    first.innerHTML = data.results[0].name.first
    last.innerHTML = data.results[0].name.last
    photo.innerHTML = "<img src='" + data.results[0].picture.large + "' />"
}