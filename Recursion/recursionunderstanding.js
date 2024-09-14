function anand() {
  console.log(rahul() + " It will call rahul");
  return true;
}
function rahul() {
  console.log(shekhar() + " It will call shekhar");
  return true;
}

function shekhar() {
  console.log(ajay() + " It will call ajay");
  return true;
}

function ajay() {
  // base case;
  return true;
}

console.log(anand() + " I will call Anand");
