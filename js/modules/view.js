export default {
    table: (`
        <div class="content__title">
            <h1 class="content__h1">Ver Productos</h1>
        </div>

        <div class="content__result">
            <table class="content__table" id="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody id="array"></tbody>
            </table>
        </div>
    `),
    loadTable: function() {
        var array = document.getElementById("array");
        var table = document.getElementById("table");
        var products = window.products;

        table.setAttribute("border", 1);
        table.style.visibility = "visible";
        table.style.margin = 0;

        products.forEach(item => {
            var tr = document.createElement("tr");
            var id = document.createElement("td");
            var name = document.createElement("td");
            var price = document.createElement("td");
            var stock = document.createElement("td");

            id.innerHTML = item.id;
            name.innerHTML = item.nombre;
            price.innerHTML = "$" + item.precio;
            stock.innerHTML = item.stock;

            if(item.stock < 10) {
                tr.style.color = "red";
            }

            tr.appendChild(id);
            tr.appendChild(name);
            tr.appendChild(price);
            tr.appendChild(stock);
            array.appendChild(tr);
        });
    }
};