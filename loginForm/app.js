var username = document.getElementById("h5-username");
var password = document.getElementById("h5-password");

var inputUsername = document.getElementById("input-username");
var inputPassword = document.getElementById("input-password");

function checkInput(query, target) {
  if (!query.value) {
    target.style.display = "";
  } else {
    target.style.display = "none";
  }
}

inputUsername.addEventListener("input", function () {
  checkInput(this, username);
});

inputPassword.addEventListener("input", function () {
  checkInput(this, password);
});
