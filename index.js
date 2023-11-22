async function fetchData(page) {
  const url = `https://reqres.in/api/user?page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData(1);
fetchData(2);
