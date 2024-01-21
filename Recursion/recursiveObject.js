let data = {
  name: "Anand",
  address: {
    town: "samastipur",
    po: {
      block: "patori",
    },
  },
};

function checkObject(data) {
  for (let item in data) {
    console.log(item, data[item], typeof data[item]);
    if (typeof data[item] == "object") {
      checkObject(data[item]);
    }
  }
}

checkObject(data);
