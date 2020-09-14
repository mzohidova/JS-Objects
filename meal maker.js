const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) { 
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        console.log (randomIndex);
        return dishes[randomIndex];
        },
    generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is ${totalPrice}`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'salad', 4.60);
  menu.addDishToCourse('appetizers', 'wings', 4.55);
  menu.addDishToCourse('appetizers', 'fries', 4.50);
  
  menu.addDishToCourse('mains', 'fish soup', 5.60);
  menu.addDishToCourse('mains', 'beaf soup', 6.55);
  menu.addDishToCourse('mains', 'chicken soup', 4.50);
  
  menu.addDishToCourse('desserts', 'sweets', 1.60);
  menu.addDishToCourse('desserts', 'donats', 2.55);
  menu.addDishToCourse('desserts', 'ice cream', 3.50);
  
  const meal = menu.generateRandomMeal();
  console.log (meal);