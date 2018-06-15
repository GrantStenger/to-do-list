function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("myTable");
	switching = true;
	// Set the sorting direction to ascending:
	dir = "desc"; 
	/* Make a loop that will continue until no switching has been done: */
	while (switching) {
		// Start by saying: no switching is done:
		switching = false;
		rows = table.getElementsByClassName("divTableRow");
		/* Loop through all table rows (except the first, which contains table headers): */
		for (i = 1; i < (rows.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare, one from current row and one from the next: */
			x = rows[i].getElementsByClassName("divTableCell")[n];
			if (x == undefined) {
				x = rows[i].getElementsByClassName("divTableCellChecked")[n];
			}
			y = rows[i + 1].getElementsByClassName("divTableCell")[n];
			console.log("y divTableCell: ", y);
			if (y == undefined) {
				y = rows[i+1].getElementsByClassName("divTableCellChecked")[n];
				console.log("y divTableCellChecked: ", y);
				console.log("Rows: ", rows[i+1]);
				console.log(rows[i+1].getElementsByClassName("divTableCellChecked"));
				console.log("n: ", n);
				console.log();
			}
			/* Check if the two rows should switch place, based on the direction, asc or desc: */
			console.log(dir);
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
				console.log("x: ", x);
				console.log("y: ", y);
				console.log(x.innerHTML.toLowerCase());
				console.log(y.innerHTML.toLowerCase());
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/* If a switch has been marked, make the switch and mark that a switch has been done: */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			// Each time a switch is done, increase this count by 1:
			switchcount ++; 
		} else {
			/* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
			if (switchcount == 0 && dir == "desc") {
				dir = "asc";
				switching = true;
			}
		}
	}
}