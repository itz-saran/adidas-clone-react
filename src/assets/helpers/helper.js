export const toINR = (price) => {
  const converted = price.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
  return converted.replace(",", " ");
};

export const fetchUrl = async (path, method, data) => {
  const BASE_URL = "http://localhost:3001";
  const OPTIONS = data
    ? {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    : {
        method: method,
        headers: {
          "Content-type": "application/json",
        },
      };
  const response = await fetch(`${BASE_URL}/${path}`, OPTIONS);
  const products = await response.json();
  return products;
};
