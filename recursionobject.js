var data = {
  a: {
    b: {
      c: {
        d: {
          name: "d",
        },
        e: {},
        f: {},
      },
    },
  },
  g: {
    h: {
      i: {},
    },
  },
  j: {
    k: {
      name: "k",
      l: {
        m: {},
        n: {
          name: "n",
        },
      },
    },
  },
};

// console.log(Object.entries(data));
function recur(data) {
  if (typeof data !== "object") {
    return;
  }
  if (Object.keys(data).length == 0) {
    return;
  } else {
    for (let key in data) {
      recur(data[key]);
    }
    return data;
  }
}

let newData = recur(data);
console.log(newData);
