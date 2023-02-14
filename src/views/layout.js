const layout = (question, answer) => `
  <div class="container">
    <div class="question">${question}</div>
    <div class="answer">${answer}</div>
    <select>
      <option value="programming">Programming</option>
      <option value="misc">Miscellaneous</option>
      <option value="spooky">Spooky</option>
    </select>
    <br>
    <button>Next Joke</button>
  </div>
   `;
export default layout;