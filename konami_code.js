let x = document.body
let index = 0
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

x.addEventListener('keydown', init)
function init(event) {
  const key = parseInt(event.detail || event.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
