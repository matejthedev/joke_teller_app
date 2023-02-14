import getData from './getData.js';
import loader from './views/loader.js';

export default async function nextJoke() {
  const question = document.querySelector('.question');
  const answer = document.querySelector('.answer');
  const container = document.querySelector('.container');
  //create div child of a container
  const div = document.createElement('div');
  div.innerHTML = loader();
  //append div to container
  container.appendChild(div);
  question.innerHTML = '';
  answer.innerHTML = '';
  const {setup, delivery} = await getData();
  question.innerHTML = setup;
  answer.innerHTML = delivery;
  container.removeChild(div);
}