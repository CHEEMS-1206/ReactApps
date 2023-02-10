const lnikedIn = document.getElementById("lnikedIn");
const instagram = document.getElementById("instagram");
const facebook = document.getElementById("facebook");
const siteVisitors = document.getElementById("siteVisitors");

function counters() {
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let paji = setInterval(function () {
    if (j < 1300) {
      instagram.innerHTML = j;
      j += 3;
    } else {
      clearInterval(paji);
    }
  });

  paji = setInterval(function () {
  if (i < 1283) {
    lnikedIn.innerHTML = i;
    i += 3;
  } else {
    clearInterval(paji);
  }
});

paji = setInterval(function () {
  if (k < 1830) {
    facebook.innerHTML = k;
    k += 3;
  } else {
    clearInterval(paji);
  }
});

paji = setInterval(function () {
  if (l < 2406) {
    siteVisitors.innerHTML = l;
    l += 3;
  } else {
    clearInterval(paji);
  }
});
}
counters();
