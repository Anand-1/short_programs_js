// Input
let input = "?Foo=baar&world=hello";
// Output :
let Output = {
  Foo: "baar",
  bar: "hello",
};

function formatQueryString(input) {
  const withoutAmpersand = input.slice(0, input.length - 1);
  let returnData = {};
}

console.log(formatQueryString(input));
