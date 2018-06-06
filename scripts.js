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

console.log(document);

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	console.log(close[i]);
	close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    // ev.target.classList.toggle('checked');
    console.log(ev);
    console.log(ev.target);
    console.log(ev.target.id);

    if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("here");
			console.log(this.responseText);
		}
	};
	xmlhttp.open("GET","completeTask.php?q="+ev.target.id, true);
	xmlhttp.send();
	loadTable();
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		document.getElementById("ToDoUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
	console.log(document);
}

function addTask() {
	console.log('plz add');
	var inputValue = document.getElementById("myInput").value;
	console.log('input: ', inputValue);

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("here");
			console.log(this.responseText);
		}
	};
	console.log("addTask.php?q='"+inputValue+"'");
	xmlhttp.open("GET","addTask.php?q="+inputValue, true);
	xmlhttp.send();
	loadTable();
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

