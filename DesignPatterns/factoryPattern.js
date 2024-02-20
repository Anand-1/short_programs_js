/*With the Factory Pattern, we can use a special function - 
the factory function - to create many of the same objects. */

const createUser = (firstname, lastname) => {
  let data = {
    createAt: Date.now(),
    userName: `${firstname}${lastname}`,
  };
  return data;
};

const user = createUser("Anand", "Raj");
console.log(user);
