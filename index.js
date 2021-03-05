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
  let i = 0;
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
  const gameBoard = document.querySelectorAll("button");

  //Bind Events
  gameBoard.forEach(_gameBoardClick);
  function _gameBoardClick(item) {
    item.addEventListener("click", _playerClick);
  }

  //Private Functions
  function _playerClick(e) {
    if (e.target.innerText == "") {
      if (i % 2 == 0) {
        e.target.innerText = "X";
        xsquares.push(e.target.id);
        xsquares.sort(function (a, b) {
          return a - b;
        });
        _checkWinner();
        i++;
      } else {
        e.target.innerText = "O";
        osquares.push(e.target.id);

        osquares.sort(function (a, b) {
          return a - b;
        });

        _checkWinner();
        i++;
      }
    } else return;
  }

  function _checkWinner() {
    winningCombination.forEach((element) => {
      if (element.toString() === xsquares.toString()) {
        alert("X wins");
        _clearBoard();
      } else if (element.toString() === osquares.toString()) {
        alert("O wins");
        _clearBoard();
      }
    });
  }
})();
