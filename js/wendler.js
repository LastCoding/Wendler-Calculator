var valsTotal = [];
var invalid = false;

function calculate() {
	var routineSelected = routineType(); // Cojo la opcion de rutina (light/hard)
	var aproxSelected = aproxType(); // Cojo la opcion de redondeo
	var RM = getRM(); // Cojo el valor guardado en 1RM

	if (invalid) {
		var result = document.getElementById("result");
		result.style.display = "block";
		result.innerHTML = "El numero introducido no es válido, vuelve a intentarlo.";
	} else {

		var routine = getRoutine(); // Cojo la rutina que toca esta semana
		var vals = calculateRoutine(routineSelected,routine,RM); // Calculo el valor según las opciones
		var aproxVals = aproxRoutine(aproxSelected,vals,false); // Cojo el valor redondeado según la opción

		var result = document.getElementById("result");
		result.style.display = "block";
		result.innerHTML = "Primer levantamiento: <b>" + aproxVals[0] + "kgs</b> <br> Segundo levantamiento: <b>" + aproxVals[1] + "kgs</b><br> Tercer levantamiento: <b>" + aproxVals[2] + "kgs</b>";
	}
}

function calculate2() {
	var routineSelected = routineType();
	var aproxSelected = aproxType();
	var RM = getRM();

	if (invalid) {
		var result = document.getElementById("result");
		result.style.display = "block";
		result.innerHTML = "El numero introducido no es válido, vuelve a intentarlo.";
	} else {

		var vals = calculateRoutine(routineSelected,"5",RM);
		var aproxVals = aproxRoutine(aproxSelected,vals,true);

		var result = document.getElementById("result");
		var center = document.getElementById("center");

		result.style.display = "block";
		result.innerHTML = "Primera semana: <br><br> Primer levantamiento: <b>" + aproxVals[0] + "kgs</b> <br> Segundo levantamiento: <b>" + aproxVals[1] + "kgs</b><br> Tercer levantamiento: <b>" + aproxVals[2] + "kgs</b> <br><br>" +
		"Segunda semana: <br><br> Primer levantamiento: <b>" + aproxVals[3] + "kgs</b> <br> Segundo levantamiento: <b>" + aproxVals[4] + "kgs</b><br> Tercer levantamiento: <b>" + aproxVals[5] + "kgs</b> <br><br>" + 
		"Tercera semana: <br><br> Primer levantamiento: <b>" + aproxVals[6] + "kgs</b> <br> Segundo levantamiento: <b>" + aproxVals[7] + "kgs</b><br> Tercer levantamiento: <b>" + aproxVals[8] + "kgs</b> <br><br>" +
		"Cuarta semana: <br><br> Primer levantamiento: <b>" + aproxVals[9] + "kgs</b> <br> Segundo levantamiento: <b>" + aproxVals[10] + "kgs</b><br> Tercer levantamiento: <b>" + aproxVals[11] + "kgs</b> <br>";
	}
}

function routineType() {
	var x = document.getElementById("routineType");
	var selected = x.options[x.selectedIndex].value;

	return selected;  
}

function aproxType() {
	var x = document.getElementById("aprox");
	var selected = x.options[x.selectedIndex].value;

	return selected;  
}

function getRM() {
	var x = document.getElementById("1RM");
	var RM = x.value;

	if (RM <= 0 || RM > 1000) {
		invalid = true;
	} else {
		invalid = false;
	}

	return RM;
}

function getRoutine() {
	var x = document.getElementById("routine");
	var selected = x.options[x.selectedIndex].value;

	return selected;  
}

function calculateRoutine(rType,rSelected,valor) {
	if (rSelected == "5") { // si quiere mostrar todos los valores
// estos son los de la tercera y cuarta semana que no voy a variar escoja una o otra opcion
			valsTotal[6] = valor * 0.75;
			valsTotal[7] = valor * 0.85;
			valsTotal[8] = valor * 0.95;
			valsTotal[9] = valor * 0.40;
			valsTotal[10] = valor * 0.50;
			valsTotal[11] = valor * 0.60;

		if (rType == "light") {
			valsTotal[0] = valor * 0.65;
			valsTotal[1] = valor * 0.75;
			valsTotal[2] = valor * 0.85;
			valsTotal[3] = valor * 0.70;
			valsTotal[4] = valor * 0.80;
			valsTotal[5] = valor * 0.90;
			return valsTotal;
		}
			else {
				valsTotal[0] = valor * 0.75;
				valsTotal[1] = valor * 0.80;
				valsTotal[2] = valor * 0.85;
				valsTotal[3] = valor * 0.80;
				valsTotal[4] = valor * 0.85;
				valsTotal[5] = valor * 0.90;
				return valsTotal;
			}
	}
// Si quiere mostrar solo 1

	if (rSelected == "3") { // si selecciona 5-3-1 (Semana 3)
		valsTotal[0] = valor * 0.75;
		valsTotal[1] = valor * 0.85;
		valsTotal[2] = valor * 0.95;
		return valsTotal;
	}
	if (rSelected == "4") { // si selecciona Descarga 5-5-5 (Semana 4)
		valsTotal[0] = valor * 0.40;
		valsTotal[1] = valor * 0.50;
		valsTotal[2] = valor * 0.60;

		return valsTotal;
	}
	if (rType == "light") {
		if (rSelected == "1") { // si selecciona 5-5-5 (Semana 1)
			valsTotal[0] = valor * 0.65;
			valsTotal[1] = valor * 0.75;
			valsTotal[2] = valor * 0.85;

			return valsTotal;
		}

		if (rSelected == "2") { // si selecciona 3-3-3 (Semana 2)
			valsTotal[0] = valor * 0.70;
			valsTotal[1] = valor * 0.80;
			valsTotal[2] = valor * 0.90;

			return valsTotal;
		}
	}	else {
			if (rSelected == "1") {
				valsTotal[0] = valor * 0.75;
				valsTotal[1] = valor * 0.80;
				valsTotal[2] = valor * 0.85;

				return valsTotal;
			}

			if (rSelected == "2") {
				valsTotal[0] = valor * 0.80;
				valsTotal[1] = valor * 0.85;
				valsTotal[2] = valor * 0.90;

				return valsTotal;
			}
		}
}

function aproxRoutine(aprox,valor,allin) {

	if (allin) {
	if (aprox == "1") { // con decimal
		valor[0] = Math.round(valor[0]*100)/100;
		valor[1] = Math.round(valor[1]*100)/100;
		valor[2] = Math.round(valor[2]*100)/100;
		valor[3] = Math.round(valor[3]*100)/100;
		valor[4] = Math.round(valor[4]*100)/100;
		valor[5] = Math.round(valor[5]*100)/100;
		valor[6] = Math.round(valor[6]*100)/100;
		valor[7] = Math.round(valor[7]*100)/100;
		valor[8] = Math.round(valor[8]*100)/100;
		valor[9] = Math.round(valor[9]*100)/100;
		valor[10] = Math.round(valor[10]*100)/100;
		valor[11] = Math.round(valor[11]*100)/100;
		return valor;
	}

	if (aprox == "2") { // Sin decimal
		valor[0] = Math.round(valor[0]);
		valor[1] = Math.round(valor[1]);
		valor[2] = Math.round(valor[2]);
		valor[3] = Math.round(valor[3]);
		valor[4] = Math.round(valor[4]);
		valor[5] = Math.round(valor[5]);
		valor[6] = Math.round(valor[6]);
		valor[7] = Math.round(valor[7]);
		valor[8] = Math.round(valor[8]);
		valor[9] = Math.round(valor[9]);
		valor[10] = Math.round(valor[10]);
		valor[11] = Math.round(valor[11]);
		return valor;
	}
	if (aprox == "3") { // a la baja
		valor[0] = Math.floor(valor[0]);
		valor[1] = Math.floor(valor[1]);
		valor[2] = Math.floor(valor[2]);
		valor[3] = Math.floor(valor[3]);
		valor[4] = Math.floor(valor[4]);
		valor[5] = Math.floor(valor[5]);
		valor[6] = Math.floor(valor[6]);
		valor[7] = Math.floor(valor[7]);
		valor[8] = Math.floor(valor[8]);
		valor[9] = Math.floor(valor[9]);
		valor[10] = Math.floor(valor[10]);
		valor[11] = Math.floor(valor[11]);
		return valor;
	}
	}

	if (aprox == "1") { // con decimal
		valor[0] = Math.round(valor[0]*100)/100;
		valor[1] = Math.round(valor[1]*100)/100;
		valor[2] = Math.round(valor[2]*100)/100;
		return valor;
	}

	if (aprox == "2") { // Sin decimal
		valor[0] = Math.round(valor[0]);
		valor[1] = Math.round(valor[1]);
		valor[2] = Math.round(valor[2]);
		return valor;
	}
	if (aprox == "3") { // a la baja
		valor[0] = Math.floor(valor[0]);
		valor[1] = Math.floor(valor[1]);
		valor[2] = Math.floor(valor[2]);
		return valor;
	}
}