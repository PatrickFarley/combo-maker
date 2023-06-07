const moves = [
  'jab',
  'body jab',
  'hook',
  'body hook',
  'lead uppercut',
  'lead elbow',
  'slip left',
  'reset',
  'switch kick',
  'teep',
  'switch knee',
  'cross',
  'body cross',
  'rear hook (overhand)',
  'rear body hook',
  'rear uppercut',
  'rear elbow',
  'slip right',
  'reset',
  'rear kick',
  'rear teep',
  'rear knee',
  'roll'
];

const rules = [
  [true, true, false, false, false, false, true, true, false, false, false, true, true, true, true, true, true, false, true, true, true, true],
  [true, true, false, false, false, false, true, true, false, false, false, true, true, true, true, true, true, false, true, true, true, true],
  [false, false, false, false, false, false, true, true, false, false, false, true, true, true, true, true, true, false, true, true, true, true],
  [false, false, false, false, false, false, true, true, false, false, false, true, true, true, true, true, true, false, true, true, true, true],
  [false, false, false, false, false, false, true, true, false, false, false, true, true, true, true, true, true, false, true, true, true, true],
  [false, false, false, false, false, false, true, true, false, false, false, true, true, true, true, true, true, false, true, true, true, true],
  [true, true, true, true, true, true, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false],
  [true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, true],
  [false, false, false, false, false, false, true, true, false, false, false, true, true, true, true, false, true, false, false, true, false],
  [false, false, false, false, false, false, true, true, false, false, false, true, true, true, true, true, true, false, false, false, false],
  [false, false, false, false, false, false, true, true, false, false, false, true, true, true, true, false, true, false, false, true, false],
  [false, false, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true, false, false, false],
  [false, false, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true, false, false, false],
  [false, false, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true,true, true, false, false, false, false, true, true, false, false, false, true, true],
  [true, true, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true, false, false, false],
  [false, false, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true, false, false, false],
  [false, false, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true, false, false, false],
  [false, false, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true, false, false, false],
  [false, false, true, true, true, true, false, true, true, true, true, false, false, false, false, false, false, true, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, false, true, true, true, true],
  [true, true, true, true, false, true, false, true, false, true, false, false, false, false, false, false, false, true, false, false, false, false],
  [true, true, true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false],
  [true, true, true, true, false, true, false, true, false, true, false, false, false, false, false, false, false, true, false, false, false, false]
];

const generateCombination = (moves, rules, comboLength) => {
  const combination = [];
  let prevMove = null;
  while (combination.length < comboLength) {
    const move = moves[Math.floor(Math.random() * moves.length)];
    if (prevMove === null) {
      combination.push(move);
      prevMove = move;
    } else if (rules[moves.indexOf(prevMove)][moves.indexOf(move)]) {
      combination.push(move);
      prevMove = move;
    }
  }
  return combination;
};

const getCombo = () => {
    const comboLength = document.getElementById("combo-length").value;
    const combination = generateCombination(moves, rules, comboLength);

    // Update the result in the HTML
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";  // Clear previous result

    // Append each move to the result
    for (var i = 0; i < combination.length; i++) {
        var move = ""+(i+1) +". "+ combination[i];
        var moveElement = document.createElement("p");
        moveElement.innerText = move;
        resultDiv.appendChild(moveElement);
    }
}