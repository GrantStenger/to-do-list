
<?php
include 'password.php';

$q = intval($_GET['q']);
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
$sql = "DELETE FROM ToDos WHERE id = '".$q."'";

echo $sql;

if (mysqli_query($con, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($con);
}

mysqli_close($con);
?>