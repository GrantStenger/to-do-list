<?php
include 'password.php';

$task = $_GET['task'];
$effort = $_GET['effort'];
$urgency = $_GET['urgency'];
$importance = $_GET['importance'];
$significance = $_GET['significance'];
$enjoyability = $_GET['enjoyability'];

$rating = 10*((1 - $effort/10) + ($urgency/10) + ($importance/10) + 2*($significance/10) + ($enjoyability/20))/5.5;

$servername = "127.0.0.1";
$username = "root";
$password = $PASSWORD;
$dbname = "ToDoListDB";
$con = mysqli_connect($servername, $username, $password, $dbname);
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}

$sql = "INSERT INTO ToDos (task, effort, urgency, importance, significance, enjoyability, rating, completed)
VALUES ('" . $task . "', " . $effort . ", " . $urgency . ", " . $importance . ", " . $significance . ", " . $enjoyability . ", " . $rating . ", 0)";

if (mysqli_query($con, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

mysqli_close($con);
?>