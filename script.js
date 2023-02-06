// Сеть фастфудов предлагает несколько видов гамбургеров:
// маленький (5$, 20 калорий)
// большой (10$, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:
// сыром (+ 1$, + 20 калорий)
// салатом (+ 2$, + 5 калорий)
// картофелем (+ 1,5$ , + 10 калорий)


// Можно добавить добавки:
// посыпать приправой (+ 1,5$, 0 калорий)
// полить майонезом (+ 2$, + 5 калорий).


// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
// Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик) 
// и методы для выбора опций и расчета нужных величин.

const HAMBURGER = {
    "bigSize":
    {
        calories: 40,
        price: 10,
    },

    "smallSize":
    {
        calories: 20,
        price: 5,
    }

    ,
    "cheeseFilling":
    {
        calories: 20,
        price: 1,
    },

    "saladFilling":
    {
        calories: 10,
        price: `1,5`,
    },

    "potatoFilling":
    {
        calories: 5,
        price: 2,
    },

    "spiceTopping":
    {
        calories: 5,
        price: 2,
    },
    
    "mayonnaiseTopping":
    {
        calories: 0,
        price: `1,5`,
    },
};



class Hamburger {
    constructor(size, filling, topping) {
        this.size = size;
        this.filling = filling;
        this.topping = topping;
    }



    getOrder() {
        console.log(`You choose a burger ${this.size} with ${this.filling} and sauce ${this.topping}.`);

        return this.order
    }

    setOrder(value) {
        this.order = value;
    }



    burgerPrice() {
        let price = parseInt(HAMBURGER[this.size].price);
        price += parseInt(HAMBURGER[this.filling].price);
        if (this.topping) {
            price += parseInt(HAMBURGER[this.topping].price);
        }
        return `The price of your hamburger ${price}`;
    }

    burgerCalories() {
        let cal = HAMBURGER[this.size].calories;
        cal += HAMBURGER[this.filling].calories;
        if (this.topping) {
            cal += HAMBURGER[this.topping].calories;
        }
        return `Calories ${cal}`;
    }
}

const burger = new Hamburger("bigSize", "saladFilling", "spiceTopping");
burger.getOrder(); // You chose a burger bigSize with saladFilling and sauce spiceTopping.
console.log(`${burger.burgerPrice()}$. ${burger.burgerCalories()}.`); // The price of your hamburger 13$. Calories 55.



const burgerNew = new Hamburger("smallSize", "cheeseFilling", "mayonnaiseTopping");
burgerNew.getOrder(); // You chose a burger smallSize with cheeseFilling and sauce mayonnaiseTopping.
console.log(`${burgerNew.burgerPrice()}$. ${burgerNew.burgerCalories()}.`); //The price of your hamburger 7$. Calories 40.