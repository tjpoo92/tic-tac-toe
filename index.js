let switcher = (function () {
  //DOM CACHE
  const player1select = document.querySelector("#player1select");
  const player2select = document.querySelector("#player2select");

  //Bind Events
  player1select.addEventListener("click", _player1Selection);
  player2select.addEventListener("click", _player2Selection);

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
