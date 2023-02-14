import getData from './getData.js';
import render from './render.js';
import layout from './views/layout.js';

export default async function displayJoke() {
  render(layout(), document.getElementById('app'));
  const {setup, delivery} = await getData();
  render(layout(setup, delivery), document.getElementById('app'));
}