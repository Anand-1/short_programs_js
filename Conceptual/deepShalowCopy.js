/*
 Explaination: The deepClone function uses the structuredClone method 
to create a deep copy of the input object, ensuring that nested objects 
are also cloned. The shallowCopy function creates a shallow copy of the input
object using the spread operator, which copies only the top-level properties.

Other ways to create a deep copy include using JSON.parse(JSON.stringify(obj)),
but this method has limitations, such as not handling functions or special object types like Date or RegExp. 
The structuredClone method is a more robust solution for deep cloning objects in modern JavaScript.
*/

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
