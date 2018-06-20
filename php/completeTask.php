<?php

include 'password.php';

$q = $_GET['q'];

$servername = "127.0.0.1";
$username = "root";
$password = $PASSWORD;
$dbname = "ToDoListDB";
$con = mysqli_connect($servername, $username, $password, $dbname);
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}

// Get completion status
$sql = "SELECT completed FROM ToDos WHERE id=" . $q;
$result = $con->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Result: " . $row["completed"];
        if ($row["completed"]) {
        	$sql = "UPDATE ToDos SET completed=0 WHERE id=" . $q;
			if (mysqli_query($con, $sql)) {
			    echo "Record updated successfully";
			} else {
			    echo "Error updating record: " . mysqli_error($con);
			}
        }
        else {
        	$sql = "UPDATE ToDos SET completed=1 WHERE id=" . $q;
			if (mysqli_query($con, $sql)) {
			    echo "Record updated successfully";
			} else {
			    echo "Error updating record: " . mysqli_error($con);
			}
        }
    }
} else {
    echo "0 results";
}

mysqli_close($con);
?>