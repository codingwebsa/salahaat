async function getData() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000/"}` +
      "/strapiData.json"
  );
  const data = await resp.json();
  return data.data.books.data;
}

export { getData };
