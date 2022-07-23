// Тут зберігатимуться координати вільної клітинки
let emptyX = 0;
let emptyY = 0;

// Ця функція переміщує цифру на вільне місце
function moveToEmptyPlace(cell) {
    // Міняємо місцями координати цифри та вільного місця
    const x = emptyX;
    const y = emptyY;

    emptyX = cell.x;
    emptyY = cell.y;

    cell.x = x;
    cell.y = y;

    // Задаємо нове положення за допомогою CSS
    cell.style.left = `${x * 25}%`;
    cell.style.top = `${y * 25}%`;
}

// Знайдемо та перемішаємо цифри
const cells = [...document.querySelectorAll('.cell')];
cells.sort(() => Math.random() - 0.5);

// Розставимо цифри від лівого верхнього краю
let x = 0; // ліворуч
let y = 0; // зверху

// Переберимо всі цифри
for (let cell of cells) {
    x += 1; // на 1 правіше за попередню цифру

    // Якщо вийшли за правий край
    if (x === 4) {
        x = 0; // ставимо на початок
        y += 1; // і переходимо на наступний ряд
    }

    // запишемо стартові координати
    cell.x = x;
    cell.y = y;

    // ставимо цифру на вільне місце
    moveToEmptyPlace(cell);

    // Тепер чекатимемо на клік
    cell.onclick = function() {
        // зайдемо відстань до вільного місця
        let dX = cell.x - emptyX; // може бути < 0, якщо лівіше
        let dY = cell.y - emptyY; // може бути < 0, якщо вище

        // беремо відсатні по модулю |dX| + |dY|
        let distance = Math.abs(dX) + Math.abs(dY);

        if (distance === 1) {
            moveToEmptyPlace(cell); // ставимо на вільне місце
        }
    };
}
