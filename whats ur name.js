document.getElementById("submit").onclick = function() {
    document.getElementById("result").textContent = "Hello " + document.getElementById("name").value
};
document.getElementById("clear").onclick = function() {
    document.getElementById("result").textContent = "";
};
document.getElementById("goback").onclick = function () {
  window.alert("Well thats the end of it if u have visited the first site thanks for coming")
};
