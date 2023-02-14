import displayJoke from './displayJoke.js';
import nextJoke from './nextJoke.js';

async function app() {
  await displayJoke();
  document.querySelector('button').addEventListener('click', nextJoke);
}

export default app;