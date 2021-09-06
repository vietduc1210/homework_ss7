const container = document.getElementById("list");
for(let i = 0; i < 3; i++) {
  container.insertAdjacentHTML(`beforeend`, `<li>${i}</li>`)
}

//afterend: b
//beforebegin: d
//afterbegin: a
//beforeend: c
