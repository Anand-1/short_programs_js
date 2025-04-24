let idValue = 0;
const id = () => {
  console.clear();
  idValue++;
  let timeNow = new Date();
  let time = timeNow.getSeconds();
  let setId = setTimeout(id, 2000);
  console.log(idValue);
  if (idValue >= 5) {
    clearTimeout(setId);
  }
};
id();
