export default async function getData() {
  //get data from select input
  const jokeType = document.querySelector('select').value;
  console.log(jokeType);
  const response = await fetch(`https://v2.jokeapi.dev/joke/${jokeType}?type=twopart`)
  const data = await response.json();
  return { setup: data.setup, delivery: data.delivery};
}