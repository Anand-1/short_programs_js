/* Interface Segregation Principle
This principle applies to interface and is similar to the Single Responsibility Principle , focusing
on keeping interfaces specified and well defined .

Examples: Suppose if you enter a restuarent and you are vegetarian . The waiter in that restuarent 
gave you the menu card which includes vegetarian , non-vegetarian items, drink , and sweets.

-- Customers should get relevant menu only
*/

class VegetarianMenu {
  getVegetarianItems() {
    return ["Vegetable Curry", "Paneer Tikka", "Salad"];
  }
}

class NonVegetarianMenu {
  getNonvegetarinMenu() {
    return ["Cicken Curry", "Fish Curry", "Egg Biryani"];
  }
}

class DrinkMenu {
  getDrinks() {
    return ["Sarbat", "Sikanji", "Cold Coffee"];
  }
}




function restuarentStarted(userType){
    const vegetarianMenu = new VegetarianMenu();
    const nonVegetarianMenu = new NonVegetarianMenu();
    const drinkMenu = new DrinkMenu;
    console.log('Hello ' + userType )
    switch (userType){
      case 'vegetarian': console.log(vegetarianMenu.getVegetarianItems())
      break;
      case 'nonVegetarian': console.log(nonVegetarianMenu.getNonvegetarinMenu())
      break;
      case 'drunkard': console.log(drinkMenu.getDrinks())
      default:
    }
}


function user(){
    restuarentStarted('vegetarian');
    restuarentStarted('nonVegetarian');
    restuarentStarted('drunkard')
}

user()

