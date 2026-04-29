//Class is a template for creating objects. It encapsulates data and functions that operate on that data. In JavaScript, classes were introduced in ES6 as syntactical sugar over the existing prototype-based inheritance. They provide a more familiar and cleaner syntax for creating objects and handling inheritance.  
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
