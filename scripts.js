// Queries MySQL and Loads Data
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
			document.getElementById("ToDoUL").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","makeTable.php",true);
	xmlhttp.send();
}

loadTable();

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","completeTask.php?q="+ev.target.id, true);
	xmlhttp.send();
	loadTable();
  }
}, false);

// Tigger Add Button when enter is pressed
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});

// Create a new list item when clicking on the "Add" button
function addTask() {
	var inputValue = document.getElementById("myInput").value;

	if (inputValue != "") {
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET","addTask.php?q="+inputValue, true);
		xmlhttp.send();
		document.getElementById("myInput").value = "";
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

