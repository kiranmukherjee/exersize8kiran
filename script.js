let time = 0

button1 = document.getElementById("submission1")

button2 = document.getElementById("submission2")

button3 = document.getElementById("submission3")

button1.onclick = function() {
    let time = 5
}

button2.onclick = function() {
    let time = 15
}

button3.onclick = function() {
    let time = 25
}


if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }


console.log()
