const userDetails = {
  firstName: "Jane",
  lastName: "Daniels",
  userName: "jane.daniels",
  email: "jane.daniels@example.com",
  comapny: "Example Inc.",
  address: "1234 Example Street",
  age: 25,
  hobby: "Singing",
};

const userNames = Object.keys(userDetails)
  .filter((key) => key.includes("Name"))
  .reduce((object, key) => {
    return Object.assign(object, {
      [key]: userDetails[key],
    });
  }, {});

console.log(userNames);
