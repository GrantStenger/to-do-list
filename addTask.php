
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

// sql to delete a record
// $sql = "DELETE FROM ToDos WHERE id = '".$q."'";

// echo $sql;

// if (mysqli_query($con, $sql)) {
//     echo "Record deleted successfully";
// } else {
//     echo "Error deleting record: " . mysqli_error($con);
// }

$sql = "INSERT INTO ToDos (task, effort, urgency, importance, significance, enjoyability, rating, completed)
VALUES ('" . $q . "', 3, 4, 5, 6, 7, 6, 0)";

if (mysqli_query($con, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

mysqli_close($con);
?>