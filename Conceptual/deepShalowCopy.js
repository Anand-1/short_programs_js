// structured CLone
function deepClone(obj) {
  return structuredClone(obj);
}

export default deepClone;

//shallow copy
function shallowCopy(obj) {
  return { ...obj };
}

export { shallowCopy }; 