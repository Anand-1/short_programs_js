let buttonProps = (borderRadius) => {
  const createVariants = (variant, color) => {
    const newProps = {
      borderRadius,
      variant,
      color,
    };
    return newProps;
  };
  return createVariants;
};

let primaryButton = buttonProps("irem");
console.log(primaryButton);
const primaryButtonProps = primaryButton("primary", "red");
console.log(primaryButtonProps);

const fetchUtility = (baseUrl, headers) => {
  const createFetchInstances = (route, requestMethod, data) => {
    const tempReq = new Request(`${baseUrl}${route}`, {
      method: requestMethod,
      headers,
      data: data || null,
    });
    return [fetch, tempReq];
  };
  return createFetchInstances;
};

const fetchInstance = fetchUtility("https://jsonplaceholder.typicode.com");
console.log(fetchInstance);

const [getFunc, getReq] = fetchInstance("/todos/1", "GET");

getFunc(getReq)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

const [postFunc, postReq] = fetchInstance(
  "/posts",
  "POST",
  JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  })
);

postFunc(postReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
