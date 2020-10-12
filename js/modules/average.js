export default {
    form: (`
        <div class="content__title">
            <h1 class="content__h1">Mis Promedios</h1>
        </div>

        <div class="content__inputs">
            <label class="content__label">Asignatura</label>
            <input 
                type="text" class="content__input" id="subject" 
                name="input"
            >
        </div>

        <div class="content__inputs">
            <div class="content__notes">
                <label class="content__label">Nota 1</label>
                <input 
                    type="number" class="content__note" 
                    id="firstNote" name="input"
                >
            </div>

            <div class="content__weighings">
                <label class="content__label">Ponderación</label>
                <input 
                    type="number" class="content__weighing" 
                    id="firstWeighing" name="input"
                >
            </div>
        </div>

        <div class="content__inputs">
            <div class="content__notes">
                <label class="content__label">Nota 2</label>
                <input 
                    type="number" class="content__note" 
                    id="secondNote" name="input"
                >
            </div>

            <div class="content__weighings">
                <label class="content__label">Ponderación</label>
                <input 
                    type="number" class="content__weighing" 
                    id="secondWeighing" name="input"
                >
            </div>
        </div>

        <div class="content__inputs">
            <div class="content__notes">
                <label class="content__label">Nota 3</label>
                <input 
                    type="number" class="content__note" 
                    id="thirdNote" name="input"
                >
            </div>

            <div class="content__weighings">
                <label class="content__label">Ponderación</label>
                <input 
                    type="number" class="content__weighing" 
                    id="thirdWeighing" name="input"
                >
            </div>
        </div>

        <div class="content__buttons">
            <button class="content__button" onClick="calculate()">
                Calcular
            </button>
        </div>

        <div class="content__message">
            <p class="content__p" id="result"></p>
        </div>

        <div class="content__result">
            <table class="content__table" id="table">
                <thead>
                    <tr>
                        <th>Asignatura</th>
                        <th>Promedio</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody id="array"></tbody>
            </table>
        </div>
    `),
    loadAverages: function() {
        var array = document.getElementById("array");
        var table = document.getElementById("table");

        table.setAttribute("border", 1);
        table.style.visibility = "visible";
        array.innerHTML = "";

        window.average.forEach(item => {
            var tr = document.createElement("tr");
            var title = document.createElement("td");
            var average = document.createElement("td");
            var state = document.createElement("td");

            title.innerHTML = item.ramo;
            average.innerHTML = item.promedio;
            state.innerHTML = item.estado;

            if(state.innerHTML == "Reprobado") {
                tr.style.color = "red";
            }

            tr.appendChild(title);
            tr.appendChild(average);
            tr.appendChild(state);
            array.appendChild(tr);
        });
    },
    calculate: function() {
        var subject = document.getElementById("subject");
        var firstNote = document.getElementById("firstNote");
        var firstWeighing = document.getElementById("firstWeighing");
        var secondNote = document.getElementById("secondNote");
        var secondWeighing = document.getElementById("secondWeighing");
        var thirdNote = document.getElementById("thirdNote");
        var thirdWeighing = document.getElementById("thirdWeighing");
        var inputs = document.getElementsByName("input");
        var counter = 0;
        var error = "";

        inputs.forEach(item => {
            if(item.value == "") {
                counter++;
            }
        });

        if(counter == inputs.length) {
            error = "Verifica los Campos";
        } else {
            if(subject.value == "") {
                error = "Verifica la Asignatura" + "<br>";
            }

            if(
                firstNote.value == "" 
                || 
                firstNote.value < 1.0 
                || 
                firstNote.value > 7.0
            ) {
                error += "Verifica la Primera Nota" + "<br>";
            }

            if(
                firstWeighing.value == "" 
                || 
                firstWeighing.value < 1 
                || 
                firstWeighing.value > 100
            ) {
                error += "Verifica la Ponderación de la Primera Nota" + "<br>";
            }

            if(
                secondNote.value == "" 
                || 
                secondNote.value < 1.0 
                || 
                secondNote.value > 7.0
            ) {
                error += "Verifica la Segunda Nota" + "<br>";
            }

            if(
                secondWeighing.value == "" 
                || 
                secondWeighing.value < 1 
                || 
                secondWeighing.value > 100
            ) {
                error += "Verifica la Ponderación de la Segunda Nota" + "<br>";
            }

            if(
                thirdNote.value == "" 
                || 
                thirdNote.value < 1.0 
                || 
                thirdNote.value > 7.0
            ) {
                error += "Verifica la Tercera Nota" + "<br>";
            }

            if(
                thirdWeighing.value == "" 
                || 
                thirdWeighing.value < 1 
                || 
                thirdWeighing.value > 100
            ) {
                error += "Verifica la Ponderación de la Tercera Nota";
            }
        }

        var total = (
            parseInt(firstWeighing.value) + 
            parseInt(secondWeighing.value) + 
            parseInt(thirdWeighing.value)
        );
        var result = document.getElementById("result");

        if(total > 100 || total < 100) {
            error = "Verifica las Ponderaciónes";
        }

        result.style.color = "red";

        if(error == "") {
            var title = subject.value;
            var average = (
                ((parseInt(firstNote.value) * parseInt(firstWeighing.value)) / 100) +
                ((parseInt(secondNote.value) * parseInt(secondWeighing.value)) / 100) +
                ((parseInt(thirdNote.value) * parseInt(thirdWeighing.value)) / 100)
            ).toFixed(1);
            var state = "";

            if(average < 4.0) {
                state = "Reprobado";
            } else {
                state = "Aprobado";
            }
            
            window.average.push({
                ramo: title,
                promedio: parseFloat(average),
                estado: state
            });

            subject.value = "";
            firstNote.value = "";
            secondNote.value = "";
            thirdNote.value = "";
            firstWeighing.value = "";
            secondWeighing.value = "";
            thirdWeighing.value = "";

            result.style.color = "green";
            result.innerHTML = "Asignatura Agregada";

            window.loadAverages();
        } else {
            result.innerHTML = error;
        }
    }
};