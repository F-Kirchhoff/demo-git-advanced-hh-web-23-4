async function fetchData(page) {
  const url = `https://reqres.in/api/users?page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function run() {
  await fetchData(1);
  await fetchData(2);
}

run();
