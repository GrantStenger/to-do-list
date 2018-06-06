
<?php
// echo "YUUT";
// echo $_SERVER['REQUEST_URI'];
// echo "woah";
include 'password.php';

$q = $_GET['q'];
echo $q;


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



// $sql = "UPDATE ToDos SET completed=0 WHERE id=" . $q;
// echo $sql;

// if (mysqli_query($con, $sql)) {
//     echo "Record updated successfully";
// } else {
//     echo "Error updating record: " . mysqli_error($con);
// }

// sql to delete a record
// $sql = "DELETE FROM ToDos WHERE id = '".$q."'";

// echo $sql;

// if (mysqli_query($con, $sql)) {
//     echo "Record deleted successfully";
// } else {
//     echo "Error deleting record: " . mysqli_error($con);
// }

// $sql = "INSERT INTO ToDos (task, effort, urgency, importance, significance, enjoyability, rating, completed)
// VALUES ('" . $q . "', 3, 4, 5, 6, 7, 6, 0)";

// if (mysqli_query($con, $sql)) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . mysqli_error($con);
// }

mysqli_close($con);
?>