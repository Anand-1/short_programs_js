function anand() {
  console.log(rahul() + " response of rahul");
  return true;
}
function rahul() {
  console.log(shekhar() + " response of shekhar");
  return true;
}

function shekhar() {
  console.log(ajay() + " response of ajay");
  return true;
}

function ajay() {
  // base case;
  return true;
}

console.log(anand() + " response of anand");
