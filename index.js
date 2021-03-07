let switcher = (function () {
  //DOM CACHE
  const player1select = document.querySelector("#player1select");
  const player2select = document.querySelector("#player2select");

  //Bind Events
  player1select.addEventListener("click", _player1Selection);
  player2select.addEventListener("click", _player2Selection);

  //Private Functions
  _player1Selection();
  function _player1Selection() {
    player1select.toggleAttribute("checked");
    if (player1select.checked == true) {
      player2select.checked = false;
      player2select.removeAttribute("checked");
    } else if (player1select.checked == false) {
      player2select.checked = true;
      player2select.setAttribute("checked", "");
    }
  }
  _player2Selection();
  function _player2Selection() {
    player2select.toggleAttribute("checked");
    if (player2select.checked == true) {
      player1select.checked = false;
      player1select.removeAttribute("checked");
    } else if (player2select.checked == false) {
      player1select.checked = true;
      player1select.setAttribute("checked", "");
    }
  }
})();

let gameBoard = (function () {
  let counter = 0;
  let xsquares = [];
  let osquares = [];
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //DOM Cache
  const gameBoard = document.querySelectorAll(".gameboard > button");
  const startButton = document.querySelector(".start-button > button");
  const player1text = document.querySelector("#player1");
  const player2text = document.querySelector("#player2");
  const player1select = document.querySelector("#player1select");
  const player2select = document.querySelector("#player2select");

  //Bind Events
  startButton.addEventListener("click", _initGame);

  //Bind Event Functions
  function _removegameboardClick(item) {
    item.removeEventListener("click", _playerClick);
  }
  function _gameBoardClick(item) {
    item.addEventListener("click", _playerClick);
  }

  //Bind event only if start button is clicked
  function _initGame() {
    if (startButton.innerText == "Start") {
      gameBoard.forEach(_gameBoardClick);
      _toggleButtonText();
      _commitPlayerNames();
    } else if (startButton.innerText == "Restart") {
      _toggleButtonText();
      gameBoard.forEach(_removegameboardClick);
      _clearBoard();
    }
  }

  //Private Functions
  function _clearBoard() {
    counter = 0;
    xsquares = [];
    osquares = [];
    for (let i = 0; i < gameBoard.length; i++) {
      gameBoard[i].innerText = "";
    }
    player1text.value = "";
    player2text.value = "";
  }

  function _playerClick(e) {
    if (e.target.innerText == "") {
      if (counter % 2 == 0) {
        e.target.innerText = "X";
        xsquares.push(e.target.id);
        xsquares.sort(function (a, b) {
          return a - b;
        });
        counter++;
        _checkWinner();
      } else {
        e.target.innerText = "O";
        osquares.push(e.target.id);

        osquares.sort(function (a, b) {
          return a - b;
        });
        counter++;
        _checkWinner();
      }
    } else return;
  }

  function _checkWinner() {
    console.log(player1);
    console.log(player1.gamePiece);
    console.log(player1.name);
    winningCombination.forEach((element) => {
      if (element.toString() === xsquares.toString()) {
        if (player1.gamePiece == "X") {
          alert(`${player1.name} wins`);
        } else {
          alert(`${player2.name} wins`);
        }
        _initGame();
      } else if (element.toString() === osquares.toString()) {
        if (player1.gamePiece == "O") {
          alert(`${player1.name} wins`);
        } else {
          alert(`${player2.name} wins`);
        }
        _initGame();
      }
    });
  }

  function _toggleButtonText() {
    if (startButton.innerText == "Start") {
      startButton.innerText = "Restart";
    } else {
      startButton.innerText = "Start";
    }
  }

  function _commitPlayerNames() {
    const playerFactory = (name, gamePiece) => {
      return { name, gamePiece };
    };

    const player1 = playerFactory(
      player1text.value == "" ? "Player 1" : player1text.value,
      player1select.checked ? "O" : "X"
    );
    const player2 = playerFactory(
      player2text.value == "" ? "Player 2" : player2text.value,
      player2select.checked ? "O" : "X"
    );

    return { player1: player1 };
  }
})();
