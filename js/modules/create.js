export default {
    form: (`
        <div class="content__title">
            <h1 class="content__h1">Crear Producto</h1>
        </div>

        <div class="content__inputs">
            <label class="content__label">Código</label>
            <input type="text" class="content__input" id="code">
        </div>
        
        <div class="content__inputs">
            <label class="content__label">Nombre</label>
            <input type="text" class="content__input" id="name">
        </div>

        <div class="content__inputs">
            <label class="content__label">Precio</label>
            <input type="number" class="content__input" id="price">
        </div>

        <div class="content__inputs">
            <label class="content__label">Stock</label>
            <input type="number" class="content__input" id="stock">
        </div>

        <div class="content__buttons">
            <button class="content__button" onclick="create()">Crear</button>
        </div>

        <div class="content__result">
            <p class="content__p" id="result"></p>
        </div>
    `),
    create: function() {
        var code = document.getElementById("code");
        var name = document.getElementById("name");
        var price = document.getElementById("price");
        var stock = document.getElementById("stock");
        var result = document.getElementById("result");
        var products = window.products;
        var error = "";

        if(
            (code.value == "" || code.value < 1)
            && 
            name.value == "" 
            && 
            (price.value == "" || price.value < 1) 
            && 
            (stock.value == "" || stock.value < 1)
        ) {
            error = "Verifica los Campos";
        } else {
            if(code.value == "" || code.value < 1) {
                error = "Verifica el Código" + "<br>";
            }

            if(name.value == "") {
                error += "Verifica el Nombre" + "<br>";
            }

            if(price.value == "" || price.value < 1) {
                error += "Verifica el Precio" + "<br>";
            }

            if(stock.value == "" || stock.value < 1) {
                error += "Verifica el Stock";
            }
        }

        result.style.color = "red";

        if(error == "") {
            var include = products.some(item => item.id == code.value);
                
            if(include) {
                result.innerHTML = "El Código se Encuentra Registrado";
            } else {
                products.push({
                    id: code.value, 
                    nombre: name.value, 
                    precio: price.value, 
                    stock: stock.value
                });

                code.value = "";
                name.value = "";
                price.value = "";
                stock.value = "";

                result.innerHTML = "Producto Creado";
                result.style.color = "green";
            }
        } else {
            result.innerHTML = error;
        }
    }
};