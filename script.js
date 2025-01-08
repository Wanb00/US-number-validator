//Connects variables to Element ID's in HTML
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

//Function to check the number
const checkValidNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }

  //Capture regex for each segment of phone number
  const countryCode = '^(1\\s?)?'; // ^ matches beginning of string before matching an optional group of 1 and any white space after.
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})'; // \\matches the literal () into a capture group of 3 0-9 numbers with 2 brackets or just 3 numbers
  const spacesDashes = '[\\s\\-]?'; //Matches a white space or dash
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$'; //Matches another 3 numbers followed by optional white space or dash into the final 4 numbers, $ marks the end
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  ); //Creates a new regex to be followed as printed above


//Creation of P element to be appended to the parent resultsDiv
  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)
    ? (pTag.style.color = '#00471b')
    : (pTag.style.color = '#4d3800');
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.appendChild(pTag);
};

//Click event listener for the check button
checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

//Input event listener for enter
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

//Click event listener for clear button
clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
