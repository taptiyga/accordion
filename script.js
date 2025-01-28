document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;

            // Переключить текущее содержимое
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                // Скрыть все содержимое на том же уровне
                let parent = header.parentNode;
                let siblingContents = parent.querySelectorAll('.accordion-content');

                siblingContents.forEach(item => {
                    if (item !== content) {
                        item.style.display = "none";
                    }
                });

                content.style.display = "block";
            }
        });
    });
});
// Пошаговое объяснение

// Добавление обработчика события для загрузки страницы:


// javascript

//  Копировать код
// document.addEventListener("DOMContentLoaded", () => {

//    Этот код ждет, пока весь HTML - документ будет загружен.После этого запускает анонимную функцию.Это позволяет убедиться, что все элементы DOM готовы к использованию.
// Выбор всех заголовков аккордеона:


//     javascript

//  Копировать код
//     const headers = document.querySelectorAll(".accordion-header");

//    Здесь мы выбираем все элементы с классом.accordion - header и сохраняем их в переменную headers.Это дает доступ ко всем заголовкам, по которым мы будем кликать.
// Итерация по каждому заголовку:


//     javascript

//  Копировать код
//     headers.forEach(header => {

//    Этот код проходит через каждый заголовок и выполняет следующую функцию для каждого из них.
// Добавление обработчика клика к заголовку:


//         javascript

//  Копировать код
//         header.addEventListener("click", () => {

//    Мы добавляем обработчик событий для кликов на каждый заголовок.Когда заголовок будет кликнут, выполнится функция, описанная ниже.
// Получение соответствующего содержимого:


//             javascript

//  Копировать код
//             const content = header.nextElementSibling;

//    Здесь мы получаем следующий элемент, который является содержимым аккордеона, находящимся непосредственно под заголовком(header).Это делается с помощью свойства nextElementSibling.
// Переключение видимости содержимого:


//             javascript

//  Копировать код
//             if (content.style.display === "block") {
//                 content.style.display = "none";
//             } else {

//    Мы проверяем, открыто ли текущее содержимое(т.е.видно ли оно).Если его стиль display равен "block", это означает, что содержимое открыто, и оно будет скрыто.В противном случае оно будет открыто.
// Скрытие другого содержимого на том же уровне:


//                 javascript

//  Копировать код
//                 let parent = header.parentNode;
//                 let siblingContents = parent.querySelectorAll('.accordion-content');

//    Если текущее содержимое закрыто, мы ищем всех "соседей" на том же уровне.Мы сначала определяем родительский элемент с помощью header.parentNode.Затем с помощью querySelectorAll выбираем все элементы с классом.accordion - content, которые находятся в том же родительском элементе.
// Скрытие других содержимых:


//                 javascript

//  Копировать код
//                 siblingContents.forEach(item => {
//                     if (item !== content) {
//                         item.style.display = "none";
//                     }
//                 });

//    Этот код проходит по всем соседям(другим содержимым) и скрывает их, если они не являются текущим содержимым(content).Это гарантирует, что только одно содержимое будет открыто в заданный момент времени.
// Открытие текущего содержимого:


//                 javascript

//  Копировать код
//                 content.style.display = "block";

//    После скрытия других содержимых текущее содержимое(которое соответствует заголовку) открывается, устанавливая его стиль display в "block".
//                     Итог
// Таким образом, этот код создает аккордеон, позволяющий пользователю открывать и закрывать содержимое, скрывая все остальные открытые секции на том же уровне.Если пользователь кликнет по заголовку, соответствующее содержимое откроется или закроется, в зависимости от его текущего состояния.

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits)
const citrus = fruits.slice(1); // ['banana', 'cherry']
console.log(citrus)
console.log(fruits)