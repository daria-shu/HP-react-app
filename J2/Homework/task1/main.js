let height = prompt('Введите высоту цилиндра')
let diameter = prompt('Введите диаметр основания')
let radius = diameter / 2
let V = Math.PI * radius * radius * height
alert("Объем цилиндра: " + V)