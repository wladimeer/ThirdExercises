import search from "./modules/search.js";
import create from "./modules/create.js";
import view from "./modules/view.js";
import average from "./modules/average.js";

loadHeader();
var content = document.getElementById("content");

function loadHeader() {
    var header = document.getElementById("header");

    var myAverage = document.createElement("a");
    myAverage.innerHTML = "Mi Promedio";
    myAverage.setAttribute("href", "#");
    myAverage.setAttribute("id", "average");

    var view = document.createElement("a");
    view.innerHTML = "Ver Productos";
    view.setAttribute("href", "#");
    view.setAttribute("id", "view");

    var create = document.createElement("a");
    create.innerHTML = "Crear Productos";
    create.setAttribute("href", "#");
    create.setAttribute("id", "create");

    var search = document.createElement("a");
    search.innerHTML = "Buscar Productos";
    search.setAttribute("href", "#");
    search.setAttribute("id", "search");

    header.appendChild(myAverage);
    header.appendChild(view);
    header.appendChild(create);
    header.appendChild(search);
};

window.products = [
    {id: 1, nombre: "Producto A", precio: 1000, stock: 20},
    {id: 2, nombre: "Producto B", precio: 2000, stock: 10},
    {id: 3, nombre: "Producto C", precio: 3000, stock: 1},
    {id: 4, nombre: "Producto D", precio: 4000, stock: 0},
    {id: 5, nombre: "Producto E", precio: 5000, stock: 12}
];

window.average = [
    {ramo: "Matematica", promedio: 3.5, estado: "Reprobado"},
    {ramo: "Programación", promedio: 4.6, estado: "Aprobado"}
];

document.getElementById("average").addEventListener("click", function() {
    content.innerHTML = average.form;
    window.calculate = average.calculate;
    window.loadAverages = average.loadAverages;
    average.loadAverages();
});

document.getElementById("view").addEventListener("click", function() {
    content.innerHTML = view.table;
    view.loadTable();
});

document.getElementById("create").addEventListener("click", function() {
    content.innerHTML = create.form;
    window.create = create.create;
});

document.getElementById("search").addEventListener("click", function() {
    content.innerHTML = search.form;
    window.search = search.search;
});