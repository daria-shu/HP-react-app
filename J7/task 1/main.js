// Фокус
// Создайте функцию, в которой есть двумерный массив карт 13 на 4(4 масти карт от 2 до туза).
// Функция возращает случайную карту из массива используя Math.random()
function getRandomCard() {
    let cards = [['d2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dJ', 'dQ', 'dK', 'dA'],
                ['h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hJ', 'hQ', 'hK', 'hA'],
                ['c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cJ', 'cQ', 'cK', 'cA'],
                ['s2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sJ', 'sQ', 'sK', 'sA']];

    let suit = Math.floor(Math.random() * 10) % 3;
    let card = Math.floor(Math.random() * 100) % 12;

    return cards[suit][card]
}

