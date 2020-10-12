export default {
    form: (`
        <div class="content__title">
            <h1 class="content__h1">Buscar Producto</h1>
        </div>

        <div class="content__inputs">
            <label class="content__label">Código</label>
            <input type="text" class="content__input" id="code">
        </div>

        <div class="content__buttons">
            <button class="content__button" onclick="search()">
                Buscar
            </button>
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
    search: function() {
        var code = document.getElementById("code");
        var result = document.getElementById("result");
        var array = document.getElementById("array");
        var table = document.getElementById("table");
        var tr = document.createElement("tr");
        var products = window.products;
        var searched = [];    
        var error = "";
        
        if(code.value == "") {
            error = "Verifica el Código";
        } else {
            searched = products.filter(item => item.id == code.value);

            if(searched == "") {
                error = "El Producto no Existe";    
            }
        }

        code.value = "";
        array.innerHTML = "";
        table.setAttribute("border", 1);
        table.style.visibility = "visible";

        if(error == "") {
            var id = document.createElement("td");
            var name = document.createElement("td");
            var price = document.createElement("td");
            var stock = document.createElement("td");

            id.innerHTML = searched[0].id;
            name.innerHTML = searched[0].nombre;
            price.innerHTML = "$" + searched[0].precio;
            stock.innerHTML = searched[0].stock;

            tr.appendChild(id);
            tr.appendChild(name);
            tr.appendChild(price);
            tr.appendChild(stock);
            array.appendChild(tr);
            
            if(searched[0].stock < 10) {
                tr.style.color = "red";
            }
        } else {
            var result = document.createElement("td");

            result.setAttribute("colspan", 4);
            result.style.color = "red";
            result.innerHTML = error;

            tr.appendChild(result);
            array.appendChild(tr);
        }
    }
};