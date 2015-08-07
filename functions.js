function makeTable(rows, cols) {
	var table = document.createElement("table");

	table.id = "table";

	var tbody = document.createElement("tbody");

	table.appendChild(tbody);

	for (var i = 0; i < rows; i++) {
		tbody.insertRow(i);
		map[i] = new Array();

		for (var j = 0; j <	 cols; j++) {
			map[i][j] = 0;

			tbody.rows[i].insertCell(j);
			tbody.rows[i].cells[j].id = i + "_" + j;
		}
	}

	document.body.appendChild(table);
	table = null;
	tbody = null;
}