let i = 0;
function controls_1() {
  let push = (document.getElementById("button_1").innerHTML = Number(++i));
}

function controls_2() {
  if (i > 0) {
    let push = (document.getElementById("button_1").innerHTML = Number(--i));
  }
}

let x = 0;
function control_1() {
  let push = (document.getElementById("button_2").innerHTML = Number(++x));
}

function control_2() {
  if (x > 0) {
    let push = (document.getElementById("button_2").innerHTML = Number(--x));
  }
}

function rename_1() {
  let team = prompt("TAKIM ADI DEĞİŞTİR");

  if (team.length > 0) {
    document.getElementById("name_1").innerHTML = team;
  } else {
    alert("Lürfen Bir İsim Giriniz.");
  }
}

function rename_2() {
  let team = prompt("TAKIM ADI DEĞİŞTİR");

  if (team.length > 0) {
    document.getElementById("name_2").innerHTML = team;
  } else {
    alert("Lürfen Bir İsim Giriniz.");
  }
}

function change_1() {
  const scoreValue = prompt("Lütfen Skor Giriniz.");
  let score = parseInt(scoreValue);
  if (!isNaN(score)) {
    const teamScore = document.getElementById("button_1");
    teamScore.innerHTML = score;
  } else {
    alert("Lütfen Bir Sayı Giriniz.");
  }
}

function change_2() {
  const scoreValue = prompt("Lütfen Skor Giriniz.");
  let score = parseInt(scoreValue);
  if (!isNaN(score)) {
    const teamScore = document.getElementById("button_2");
    teamScore.innerHTML = score;
  } else {
    alert("Lütfen Bir Sayı Giriniz.");
  }
}
