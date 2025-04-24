// Object Flattening Loaded !
const obj = {
  name: "test",
  address: {
    personal: "abc",
    office: {
      building: "random",
      street: "some street",
    },
  },
};

/*
Output Expected: 
{
    name : "test",
    address_personal: "abc"
    address_office_building: "random"
    address_office_street: "some street"
} */

function flattenObj(obj, parent, res = {}) {
  for (let key in obj) {
    let propName = parent ? parent + "." + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      console.log(obj[key]);
      res[propName] = obj[key];
    }
  }
  console.log(res);
  return res;
}

// flattenObj(obj);
//////////////////////////////////////////////////////////////////////

let ob = {
  user: {
    key_value_map: {
      CreatedDate: "123424",
      Department: {
        Name: "XYZ",
      },
    },
  },
};

/*
Expected Output: 
{
    "user.key_value_map.CreatedDate": "123424",
    "user.key_value_map.Department.Name": "XYZ"
}
 */
function flattenObject(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (typeof ob[i] == "object" && ob[i] !== null) {
      var flatObject = flattenObject(ob[i]);
      console.log(flatObject);
      for (var x in flatObject) {
        toReturn[i + "." + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
}

console.log(flattenObject(ob));

////////////////////////////////////////////////
var object = { 0: [1, 2, 3, 4] },
  result = Object.keys(object).reduce(function (r, k) {
    return r.concat(k, object[k]);
  }, []);

// console.log(result);

// initialize the parent as empty
function flatObj(obj, parent = '') {
  const finalObj = {};
  const genrateFlats = (obj, parent) => {
    for (let key in obj) {
      // Create new Parent , by appending last parent with key, first time
      const newParent = parent + key;
      if (typeof obj[key] === 'object') {
        // now new parent is appended with '.'
        genrateFlats(obj[key], newParent + '.')
      } else {
        // It reaches a point where there are no more objects
        finalObj[newParent] = obj[key];
      }
    }
  }
  genrateFlats(obj, parent)
  return finalObj;
}
console.log(flatObj(obj))