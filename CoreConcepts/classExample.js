//class implementation
const y = class {};
console.log(Object.getPrototypeOf(y));
console.log("////////////////////////////////////////////////");
class Anand {
  name;
  constructor(message) {
    this.name = message;
  }
  greet() {
    return "Hello, " + this.name + "How are you";
  }
}
class RailwayForm {
  constructor(givenName) {
    console.log("Constructor Called !");
    this.name = givenName;
  }
  submit() {
    console.log(this.name + "form Submitted !");
  }
  cancel() {
    console.log(this.name + "Form cancelled !");
  }
  fillForm(givenName) {
    console.log("Form filled for " + this.name);
  }
}

class RailwayReservation extends RailwayForm {
  constructor(fname) {
    super();
    this.newName = fname;
    this.name = fname;
  }
  onlineForm() {
    console.log("Online form for" + this.newName);
  }
}
let anandForm = new RailwayForm("Anand");
let onlineForm = new RailwayReservation("Rahul");
onlineForm.onlineForm();
onlineForm.cancel();
anandForm.fillForm();
anandForm.submit();
anandForm.cancel();

let msg = new Anand("Anand");
