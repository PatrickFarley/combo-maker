// List of martial arts moves
const moves = [
  'jab',
  'jab (body)',
  'hook',
  'hook (body)',
  'lead uppercut',
  'lead elbow',
  'slip left',
  'reset',
  'switch kick',
  'teep',
  'switch knee',
  'cross',
  'cross (body)',
  'rear hook / overhand',
  'rear hook (body)',
  'rear uppercut',
  'rear elbow',
  'slip right',
  'rear kick',
  'rear teep',
  'rear knee'
];

// each move, and the set of moves that can follow it
const rulesDict = {
  'jab': {
    'jab': true, 'jab (body)': true, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'jab (body)': {
    'jab': true, 'jab (body)': true, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'hook': {
    'jab': false, 'jab (body)': false, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'hook (body)': {
    'jab': false, 'jab (body)': false, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'lead uppercut': {
    'jab': false, 'jab (body)': false, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'lead elbow': {
    'jab': false, 'jab (body)': false, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'slip left': {
    'jab': true, 'jab (body)': true, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': false, 'switch kick': true, 'teep': false, 'switch knee': true, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': false, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'reset': {
    'jab': true, 'jab (body)': true, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': false, 'switch kick': true, 'teep': true, 'switch knee': true, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'switch kick': {
    'jab': false, 'jab (body)': false, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': false, 'rear uppercut': true, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': true
  },
  'teep': {
    'jab': false, 'jab (body)': false, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': false, 'slip right': false, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'switch knee': {
    'jab': false, 'jab (body)': false, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': false, 'rear uppercut': true, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': true
  },
  'cross': {
    'jab': false, 'jab (body)': false, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': true, 'switch kick': true, 'teep': true, 'switch knee': true, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'cross (body)': {
    'jab': false, 'jab (body)': false, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': true, 'switch kick': true, 'teep': true, 'switch knee': true, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'rear hook / overhand': {
    'jab': false, 'jab (body)': false, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': true, 'switch kick': true, 'teep': true, 'switch knee': true, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'rear hook (body)': {
    'jab': true, 'jab (body)': true, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': true, 'switch kick': true, 'teep': true, 'switch knee': true, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'rear uppercut': {
    'jab': false, 'jab (body)': false, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': true, 'switch kick': true, 'teep': true, 'switch knee': true, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'rear elbow': {
    'jab': false, 'jab (body)': false, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': true, 'switch kick': true, 'teep': true, 'switch knee': true, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'slip right': {
    'jab': false, 'jab (body)': false, 'hook': false, 'hook (body)': false, 'lead uppercut': false, 'lead elbow': false, 'slip left': true, 'reset': true, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': true, 'cross (body)': true, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': true, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'rear kick': {
    'jab': false, 'jab (body)': false, 'hook': true, 'hook (body)': true, 'lead uppercut': true, 'lead elbow': true, 'slip left': false, 'reset': true, 'switch kick': true, 'teep': true, 'switch knee': true, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': false
  },
  'rear teep': {
    'jab': true, 'jab (body)': false, 'hook': true, 'hook (body)': true, 'lead uppercut': false, 'lead elbow': false, 'slip left': false, 'reset': false, 'switch kick': false, 'teep': false, 'switch knee': false, 'cross': false, 'cross (body)': false, 'rear hook / overhand': true, 'rear hook (body)': true, 'rear uppercut': false, 'rear elbow': true, 'slip right': false, 'rear kick': true, 'rear teep': true, 'rear knee': true
  },
  'rear knee': {
    'jab': true, 'jab (body)': true, 'hook': true, 'hook (body)': true, 'lead uppercut': false, 'lead elbow': true, 'slip left': false, 'reset': true, 'switch kick': false, 'teep': true, 'switch knee': false, 'cross': false, 'cross (body)': false, 'rear hook / overhand': false, 'rear hook (body)': false, 'rear uppercut': false, 'rear elbow': false, 'slip right': true, 'rear kick': false, 'rear teep': false, 'rear knee': false
  }
};

const generateCombination = (moves, rulesDict, comboLength) => {
  const combination = [];
  let prevMove = null;
  while (combination.length < comboLength) {
    const move = moves[Math.floor(Math.random() * moves.length)];
    if (prevMove === null) {
      combination.push(move);
      prevMove = move;
    } else if (rulesDict[prevMove][move]) {
      combination.push(move);
      prevMove = move;
    }
  }
  return combination;
};

const getCombo = () => {
    const comboLength = document.getElementById("combo-length").value;
    const includeReset = document.getElementById("include-reset").checked;
    const includeSlips = document.getElementById("include-slips").checked;

    // Filter moves based on toggles
    let filteredMoves = moves.filter(move => {
        if (!includeReset && move === "reset") return false;
        if (!includeSlips && (move === "slip left" || move === "slip right")) return false;
        return true;
    });

    // Generate combination using filtered moves
    const combination = generateCombination(filteredMoves, rulesDict, comboLength);

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