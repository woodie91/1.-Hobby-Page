window.onload = function() {
    setInterval(function() {
      var now = new Date();
      var YY = now.getFullYear();
      var MM = (now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1);
      var DD = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      var hh = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    var mm = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    var ss = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  
      document.getElementById("showdate").innerHTML = `${DD} / ${MM} / ${YY}`;
      document.getElementById("showtime").innerHTML = `${hh} : ${mm} : ${ss}`;
    }, 1000);
  };