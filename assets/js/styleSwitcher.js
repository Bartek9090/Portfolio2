// toggle style switcher

const styleSwitcherToggler = document.querySelector(".styleSwitcherToggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".styleSwitcher").classList.toggle("open");
});

// hide style switcher
window.addEventListener("scroll", () => {
  if (document.querySelector(".styleSwitcher").classList.contains("open")) {
    document.querySelector(".styleSwitcher").classList.remove("open");
  }
});

// darkLight mode

const dayNight = document.querySelector(".dayNight");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add(" fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// End of dark light mode

// Listen for clicks on .color-option elements, grab value from data attribute and update --primary-color

document.addEventListener("click", (e) => {
  const colorOption = e.target.closest(".color-option");
  if (!colorOption) return;

  // unselect currently selected color options
  document
    .querySelectorAll(".color-option")
    .forEach((colorOption) => colorOption.classList.remove("is-selected"));
  colorOption.classList.add("is-selected");

  const color = colorOption.dataset.color;

  let root = document.documentElement;
  let btn = document.querySelector(".btn");
  root.style.setProperty("--primary-color", color);
  btn.style.setProperty("--primary-color", color);
});

// Typing animation

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
// Aside

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);
  });
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
