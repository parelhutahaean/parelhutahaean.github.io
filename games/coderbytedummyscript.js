/*
    Program ini adalah simulasi dari CoderByte dan telah berhasil atau tidak error (30 point)
*/

// Tipe data Array (10 point)
var result = [];

// Tipe data Object (15 point)
function Point(a, b) {
  this.testCasePoint = a;
  this.timePeriodPoint = b;
  this.totalPoint = a + b;
}

// Function (10 point)
function calculatePoint(testCase) {
  var point = Math.round(Math.random() * 5);
  // Kondisional  if/else (5 point)
  if (testCase) {
    if (point == 5 || point == 0) {
      return point;
    } else {
      return point + 1;
    }
  } else {
    return point;
  }
}

function submit(){
  var innerhtml = "<span>Are you sure?</span> <input type='button' value='Yes' onclick='yes()' /> <input type='button' value='No' onclick='no()'>"
  document.getElementById("challenge").innerHTML = innerhtml;
}

function yes() {
  result.push(new Point(calculatePoint(true), calculatePoint(false)));
  var innerhtml = "", totalAllPoint = 0;
  // Looping for/while (5 point)
  for (var i = 0; i < result.length; i++) {
    totalAllPoint += result[i].totalPoint;
    innerhtml += "<p> Challenge ke-" + (i + 1) + ", test case point " + result[i].testCasePoint + ", time period point " + result[i].timePeriodPoint + ". <b>Total Point " + result[i].totalPoint + "</b>.</p>"
  }
  innerhtml += "<p>Anda telah mengerjakan <b>" + result.length + " challenge</b> dengan <b>nilai keseluruhan " + totalAllPoint + "</b>.</p>";
  document.getElementById("result").innerHTML = innerhtml;
  document.getElementById("challenge").innerHTML = "<input type='button' value='Submit' onclick='submit()' />"
}

function no() {
  document.getElementById("challenge").innerHTML = "<input type='button' value='Submit' onclick='submit()' />"
}
