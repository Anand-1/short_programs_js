var data = {
  species: "great white",
  color: "white",
  numberOfTeeth: Infinity,
};

function iter(dat) {
  for (value in dat) {
    console.log(value, data[value]);
  }
}

iter(data);
