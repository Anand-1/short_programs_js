//class implementation

class IB {
  name;
  constructor(message) {
    this.name = message;
  }
  greet() {
    return "Hello, " + this.name + "How are you";
  }
}
let msg = new IB("IB");
