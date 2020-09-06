function start() {
  document.getElementById("startWindow").remove();
  document.getElementById("gameWindow").style.visibility = "visible";
}

let hasla = [
  { haslo: "dupa", hint: "4 litery" },
  { haslo: "marchewka", hint: "warzywo,pomaranczowe" },
  { haslo: "woda", hint: "h2o" },
  { haslo: "alfabet", hint: "trzeci element na stronie" },
  { haslo: "kofeina", hint: "Maksim jest od niej uzależniony XD" },
];

let liczbaLosowa = Math.floor((Math.random() * 1000) % 5);
console.log(liczbaLosowa);
const heh = hasla[liczbaLosowa];
let dlugoscHasla = heh.haslo.length;

// podpowiedzGuzik
document.getElementById("podpowiedzTekst").innerHTML = heh.hint;

podpowiedzGuzik.addEventListener("click", () => {
  podpowiedzTekst.style.visibility = "visible";
});

const litery = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let linia1 = "";
let linia2 = "";
function klawiatura() {
  for (x in litery) {
    if (x < litery.length / 2) {
      linia1 =
        linia1 +
        '<div class="literka" id =' +
        x +
        " onclick = klikniecie(" +
        x +
        ") >" +
        litery[x] +
        "</div>";
    } else {
      linia2 =
        linia2 +
        '<div class="literka" id =' +
        x +
        " onclick = klikniecie(" +
        x +
        ") >" +
        litery[x] +
        "</div>";
    }
  }
  document.getElementById("literki1").innerHTML = linia1;
  document.getElementById("literki2").innerHTML = linia2;
}

function haslo(haslo) {
  for (x in haslo) {
    const div = `<div class ="literka-hasla" id = "${x}${haslo[x]}" > </div>`;
    document.getElementById("haslo").insertAdjacentHTML("beforeend", div);
  }
}

function klikniecie(t) {
  if (
    document.getElementById(t).style.backgroundColor != "red" &&
    document.getElementById(t).style.backgroundColor != "green"
  ) {
    let s = heh.haslo;
    let l = litery[t].toLowerCase();
    let jest = 0;
    for (x in heh.haslo) {
      if (s[x] === l) {
        dlugoscHasla--;
        document.getElementById(String(x + s[x])).innerHTML = s[x];
        document.getElementById(t).style.backgroundColor = "green";
        jest = 1;
        if (dlugoscHasla === 0) {
          document.getElementById("win").style.visibility = "visible";
          document.getElementById("gameWindow").style.opacity = "40%";
        }
      }
    }
    if (jest === 0) {
      document.getElementById(t).style.backgroundColor = "red";
      zycie = zycie - 1;
      if (zycie > 0) {
        document.getElementById("zycia").innerHTML =
          "zostało ci " + zycie + " prób";
      } else {
        document.getElementById("gameover").style.visibility = "visible";
        document.getElementById("gameWindow").style.opacity = "40%";
      }
    }
  }
}

let zycie = 0;

over2.addEventListener("click", () => {
  location.reload();
});

over.addEventListener("click", () => {
  location.reload();
});

zagrajPonownie.addEventListener("click", () => {
  location.reload();
});

function load() {
  klawiatura();
  haslo(heh.haslo);
  zycie = 10;
  document.getElementById("zycia").innerHTML = "zostało ci " + zycie + " prób";
  document.getElementById("gameWindow").style.opacity = "100%";
  document.getElementById("gameover").style.visibility = "hidden";
}

window.onload = load();
