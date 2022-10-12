const field = document.querySelector('.field');
const cellSize = 100;

let cells;
let empty;
function start() {
    field.innerHTML = "";
    empty = {
        top: 0,
        left: 0
    };
    cells = [];
    cells.push(empty);

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    arr.sort(() => Math.random() - 0.5);
//пишем цикл (цифры от 1 до 15)
    for (let i = 1; i <= 15; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerHTML = arr[i - 1];


        const left = i % 4; //позиция ячейки в ряду начиная слева
        const top = (i - left) / 4; // номер ряда

        cells.push({
            left: left,
            top: top,
            element: cell
        });
//  стилизируем наши ячейки
        cell.style.left = `${left * cellSize}px`;
        cell.style.top = `${top * cellSize}px`;

        field.append(cell);

        ///добавляем обработчик события;при клике на ячейку она должна передвинуться
        cell.addEventListener('click', () => {
            move(i);
        });
    }
}

function move(index) {
    const cell = cells[index];  // достаем ячейку по индексу
    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    if (leftDiff + topDiff > 1) {
        return;
    }

    cell.element.style.left = `${empty.left * cellSize}px`; //применяем стили к каждой ячейке
    cell.element.style.top = `${empty.top * cellSize}px`;  //применяем стили к каждой ячейке

    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = cell.left; // в координаты пустой клетки записываем координаты пустой ячейки
    empty.top = cell.top;  // в координаты пустой ...
    cell.left = emptyLeft; // в ячейку записываем временные значения
    cell.top = emptyTop;

}
start()
