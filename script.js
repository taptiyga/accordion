document.addEventListener("DOMContentLoaded", () => {
    //    Этот код ждет, пока весь HTML - документ будет загружен.После этого запускает анонимную функцию.Это позволяет убедиться, что все элементы DOM готовы к использованию.
    const headers = document.querySelectorAll(".accordion-header");
    //    Здесь мы выбираем все элементы с классом.accordion - header и сохраняем их в переменную headers.Это дает доступ ко всем заголовкам, по которым мы будем кликать.
    headers.forEach(header => {
        //    Этот код проходит через каждый заголовок и выполняет следующую функцию для каждого из них.
        header.addEventListener("click", () => {
            //    Мы добавляем обработчик событий для кликов на каждый заголовок.Когда заголовок будет кликнут, выполнится функция, описанная ниже.
            const content = header.nextElementSibling;
            //    Здесь мы получаем следующий элемент, который является содержимым аккордеона, находящимся непосредственно под заголовком(header).Это делается с помощью свойства nextElementSibling.
            if (content.style.display === "block") {
                content.style.display = "none";
                //    Мы проверяем, открыто ли текущее содержимое(т.е.видно ли оно).Если его стиль display равен "block", это означает, что содержимое открыто, и оно будет скрыто.В противном случае оно будет открыто.
            } else {
                // Скрыть все содержимое на том же уровне
                let parent = header.parentNode;
                let siblingContents = parent.querySelectorAll('.accordion-content');
                //    Если текущее содержимое закрыто, мы ищем всех "соседей" на том же уровне.Мы сначала определяем родительский элемент с помощью header.parentNode.Затем с помощью querySelectorAll выбираем все элементы с классом.accordion - content, которые находятся в том же родительском элементе.
                siblingContents.forEach(item => {
                    if (item !== content) {
                        item.style.display = "none";
                    }
                });
                //    Этот код проходит по всем соседям(другим содержимым) и скрывает их, если они не являются текущим содержимым(content).Это гарантирует, что только одно содержимое будет открыто в заданный момент времени.
                content.style.display = "block";
                //    После скрытия других содержимых текущее содержимое(которое соответствует заголовку) открывается, устанавливая его стиль display в "block".
            }

        });
    });
});

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // ['apple', 'banana', 'orange']
let allLongFruits = fruits.every(fruit => fruit.length > 2); // true или false
console.log(allLongFruits); // true
console.log(fruits); // ['orange', 'banana', 'apple']
