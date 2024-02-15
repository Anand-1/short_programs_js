String.prototype.isPalidrome = function () {
  console.log(this);
  let reversedString = this.split("").reverse().join("");
  if (this == reversedString) return true;
  return false;
};

console.log("annad".isPalidrome());
console.log("ana".isPalidrome());
