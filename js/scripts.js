
function loadTable() {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("myTable").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","makeTable.php",true);
	xmlhttp.send();
	// sortTable(7);
	sortTable(7);
}

loadTable();

console.log(document);

// Tigger Add Button when enter is pressed
var taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});
var effortInput = document.getElementById("effortInput");
effortInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});
var urgencyInput = document.getElementById("urgencyInput");
urgencyInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});
var importanceInput = document.getElementById("importanceInput");
importanceInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});
var significanceInput = document.getElementById("significanceInput");
significanceInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});
var enjoyabilityInput = document.getElementById("enjoyabilityInput");
enjoyabilityInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});

// Create a new list item when clicking on the "Add" button
function addTask() {
	var taskInput = document.getElementById("taskInput").value;
	var effortInput = document.getElementById("effortInput").value;
	var urgencyInput = document.getElementById("urgencyInput").value;
	var importanceInput = document.getElementById("importanceInput").value;
	var significanceInput = document.getElementById("significanceInput").value;
	var enjoyabilityInput = document.getElementById("enjoyabilityInput").value;
	if (taskInput != "" & effortInput != "" & urgencyInput != "" & importanceInput != "" & significanceInput != "" & enjoyabilityInput != "") {
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET","addTask.php?task="+taskInput+"&effort="+effortInput+"&urgency="+urgencyInput+"&importance="+importanceInput+"&significance="+significanceInput+"&enjoyability="+enjoyabilityInput, true);
		xmlhttp.send();
		document.getElementById("taskInput").value = "";
		document.getElementById("effortInput").value = "";
		document.getElementById("urgencyInput").value = "";
		document.getElementById("importanceInput").value = "";
		document.getElementById("significanceInput").value = "";
		document.getElementById("enjoyabilityInput").value = "";
		loadTable();
	}
}

function deleteTask(id) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","deleteTask.php?q="+id, true);
	xmlhttp.send();
	loadTable();
}

function completeTask(id) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","completeTask.php?q="+id, true);
	xmlhttp.send();
	loadTable();
}

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
			if (y == undefined) {
				y = rows[i+1].getElementsByClassName("divTableCellChecked")[n];
			}
			/* Check if the two rows should switch place, based on the direction, asc or desc: */
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
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
