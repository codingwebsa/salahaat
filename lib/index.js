async function getData() {
  const resp = await fetch("http://localhost:3000/strapiData.json");
  const data = await resp.json();
  return data.data.books.data;
}

export { getData };
