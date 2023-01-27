
// ! ДЗ 36. Shapes ❤️🟢🔷

// на странице находятся элементы:

// div - фигура, которая может принимать какие - то формы

// select - выбрать тип фигуры(квадрат, прямоугольник, круг).При изменении значения в нем, меняется фигура

// input для выбора цвета.При его изменении меняется цвет фигуры

// ! способ 1

const form = document.getElementById("form");
const color = document.getElementById("color");
const button = document.getElementById("button");
const div = document.getElementById("div");

button.addEventListener("click", e => {
    e.preventDefault();
});

form.addEventListener("mouseup", () => {
    document.querySelector("#div").className = "";

    if (select.value === "square") div.classList.add("square");
    if (select.value === "rectangle") div.classList.add("rectangle");
    if (select.value === "circle") div.classList.add("circle");

    div.style.backgroundColor = `${color.value}`
});

// color.addEventListener("mouseup", () => {
//     document.querySelector("#div").className = "";

//     if (select.value === "square") div.classList.add("square");
//     if (select.value === "rectangle") div.classList.add("rectangle");
//     if (select.value === "circle") div.classList.add("circle");

//     div.style.backgroundColor = `${color.value}`
// });

// ! способ 2

// const form = document.getElementById("form");
// const color = document.getElementById("color");
// const button = document.getElementById("button");
// const div = document.getElementById("div");

// form.addEventListener("click", e => {
//     e.preventDefault();
// });

// button.addEventListener("click", () => {
//     document.querySelector("#div").className = "";

//     if (select.value === "square") div.classList.add("square");
//     if (select.value === "rectangle") div.classList.add("rectangle");
//     if (select.value === "circle") div.classList.add("circle");

//     div.style.backgroundColor = `${color.value}`
// });
