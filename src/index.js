const BAZE_URL = "https://voodoo-sandbox.myshopify.com/";

export async function getData() {
  const response = await axios.get(`${BAZE_URL}products.json?limit=12`);
  const data = response.data;
  return data;
}

getData()
  .then((resp) => console.log(resp.products))
  .catch((err) => console.log(err));
