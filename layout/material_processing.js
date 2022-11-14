'use strict';

// class Person {
//  в фигурных скобках определяется тело класса
// }

// существуют анонимные классы:
// const Person = class { }

// можно создать неанонимный класс и присвоить его переменной или константе
// const user = class Person { }

// Класс - это шаблон для объектов/сущностей.
// class Person { }

// const tom = new Person();
// const bob = new Person();

// для создания объекта с помощью конструктора ставится ключевое слово new. Далее идет вызов конструктора - по сути вызов функции по имени класса. По умолчанию классы имеют один конструктор без параметров.

// поля и свойства класса
// у меня есть класс Человека, у него есть отличительные признаки,
//например, имя и возраст, теперь я в классе Person определю
// поля для хранения этих данных:

/*class Person {
    name = 'John';
    age;
}

const tom = new Person();
console.log(tom.name); // John
tom.name = 'Tom';
tom.age = 27;
console.log(tom.name); // Tom
console.log(tom.age); // 27

// пока стоит понимать, что свойства и публичные поля - это одно и то же. И в примере выше поля name и age также можно назвать свойствами.
*/


// поведение класса и его методы
// помимо хранения данных, которые определяют состояние объекта, класс может иметь методы, которые определяют поведение объекта - действия, которые выполняет объект. 

class Person {
    name;
    age;
    move(place) {
        console.log(`Go to ${place}`);
    }
    eat() {
        console.log('Eat apples');
    }
}

const tom = new Person();
tom.move('Hospitel'); // Go to Hospitel
tom.move('Cinema'); // Go to Cinema
tom.eat(); // Eat apples

// обращение к полям и методам внутри класса. Слово this

class Person2 {
    name;
    age;
    print() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

const bob = new Person2();
bob.name = 'Bob';
bob.age = 21;
bob.print(); // Name: Bob Age: 21

// определение конструктора
// констуктор определяется с помощью метода с именем constructor. По сути это обычный метод, который модет принимать параметры. В данном случае конструктор просто выводит на консоль некоторое сообщение. Как правило, цель конструктора - инициализация объекта некоторыми начальными данными:

class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

const kary = new Person3('Kary', 28);
kary.print(); // Name: Kary Age: 28
kary.name = 'Mary';
kary.age = -10;
kary.print(); // Name: Mary Age: -10

// приватные поля (модификатор доступа), ставится решетка перед свойством - #name. Установить и получить значение свойства можно только внутри класса. Вне его они не доступны. При попытке обратиться к ним через объект, я получу ошибку.
// можно также делать приватные методы символом #

// asynchronous request
