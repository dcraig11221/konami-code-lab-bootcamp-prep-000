let x = document
let index = 0
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init(keydown) {
  const key = parseInt(keydown.detail || keydown.which);

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
