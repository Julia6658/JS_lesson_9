# JS_lesson_9
1) Класс - шаблон, по которому создаются объекты. Объекты - это конкретные экземпляры класса.<br>
2) Примеры объектно-ориентированного подхода в реальной жизни: косметич. бренд в (год создания, основатель, капитализация, доля рынка, цена акций), фильм (жанр, год выпуска, режиссёр, кассовые сборы)<br>
3) <br>
Примеры объектно-ориентированного подхода в программировании: страница сайта (вес, description, title, количество ошибок в валидаторе)<br>
4) будет вывод: <br>
ninja<br>
pomidor<br>
site<br>
Из-за контекта вызова функции такой вывод:<br>
ninja - здесь Функция bike(); вызвана в глобальноой области видимости, поэтому выводит переменную, которая относится к этой области<br>
pomidor - Здесь уже вызывается как метод объекта obj1 и this.name ссылается на свойство объекта obj1<br>
site - Здесь уже вызывается как метод объекта obj2 и this.name ссылается на свойство объекта obj2<br>
6) Статические свойства и методы определяются для всего класса в целом, а не для отдельного объекта. Для их определения перед названием метода ставится оператор static. В отличие от обычных нестатических методов статические методы определяют поведение для всего класса.<br>
7) Потому что тип значения, записааного в переменную member, это объект<br>
8) Выведется {name: 'Valera', age: 23} Без свойства city, так как ему не было присвоено значение, а было переопределено значение переменной city.<br>


