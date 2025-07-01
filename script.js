let display = document.getElementById('display');

function appendChar(char) {
  if (display.innerText === '0') display.innerText = '';
  display.innerText += char;
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteChar() {
  if (display.innerText.length <= 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace('%', '/100'));
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}


document.addEventListener('keydown', function(e) {
  const key = e.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    appendChar(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteChar();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
