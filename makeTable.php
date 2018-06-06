
<?php
include 'password.php';

$servername = "127.0.0.1";
$username = "root";
$password = $PASSWORD;
$dbname = "ToDoListDB";
$con = mysqli_connect($servername, $username, $password, $dbname);
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}

$sql = "SELECT * FROM ToDos";
$result = mysqli_query($con, $sql);
// $result = $con->query($sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
    	if ($row['completed']) {
    		echo "<li " . "id=" . $row['id'] . " class='checked'>" . $row['task'] . "<span class='close' onclick='deleteTask(" . $row['id'] . ")'>×</span></li>";
    	}
    	else {
    		echo "<li " . "id=" . $row['id'] . ">" . $row['task'] . "<span class='close' onclick='deleteTask(" . $row['id'] . ")'>×</span></li>";
    	}
    }
}

mysqli_close($con);
?>