// Задание 1

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }     
    getSalary () {
       return this.rate * this.days;
    }
}
let worker1 = new Worker('John', 'Malkovich', 50, 21);
console.log(worker1.name); 
console.log(worker1.surname); 
console.log(worker1.rate); 
console.log(worker1.getSalary());



// Задание 2

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

const catalogWrap = document.getElementById('car-wrap');

class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }     
    getInfo()  {
       return `Тип: ${this.type}. Модель: ${this.brand}.`
    }
    getPrice() {
        return `Цена: ${this.price} `
    }
}

data.forEach(function(item, i) {
    let transportItem = new Transport(item.type, item.price, item.brand);
    
    class Bike extends Transport {
        constructor(type, price, brand) {
        super(type, price, brand);
        this.maxSpeed = item.maxSpeed;
        }
        getMaxSpeed() {
            return this.maxSpeed
      } 
    }
    class Car extends Transport {
        constructor(type, price, brand) {
        super(type, price, brand);
        this.doors = item.doors;
        }
        getDoorsCount() {
            return this.doors
      } 
    } 

    let bike = new Bike(item.maxSpeed);
    let car = new Car(item.doors);
   
    // Формирование разметки
    let mainInfo = document.createElement('div');
    catalogWrap.append(mainInfo);
    mainInfo.classList.add('item');
    let imgInfo = document.createElement('img');
    mainInfo.append(imgInfo);
    let mainInfoContent = document.createElement('div');
    mainInfo.append(mainInfoContent);
   
    // Вывод контента в разметку
    mainInfoContent.textContent = `${transportItem.getInfo()} ${transportItem.getPrice()}`;
    imgInfo.setAttribute('src', item.image);
    imgInfo.classList.add('image');
    
    // Вывод свойств
    if (item.type == 'bike') {
        let speed = document.createElement('span');
        mainInfo.append(speed);
        speed.textContent = `Скорость мотоцикла - ${bike.getMaxSpeed()}`;
       
    } else {
        let door = document.createElement('span');
        mainInfo.append(door);
        door.textContent = `Двери - ${car.getDoorsCount(car)}`;
    }
   
});




