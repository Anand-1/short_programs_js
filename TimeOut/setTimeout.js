let idValue = 0;
const id = () => {
  console.clear();
  idValue++;
  let timeNow = new Date();
  let time = timeNow.getSeconds();
  console.log("Time now is " + time);
  console.log("Literal String" + ` ${time}`);
  let setId = setTimeout(id, 2000);
  console.log(idValue);
  if (idValue >= 5) {
    clearTimeout(setId);
  }
};

id();
