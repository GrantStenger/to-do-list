<?php
include 'password.php';
$servername = "127.0.0.1";
$username = "root";
$password = $PASSWORD;
$dbname = "ToDoListDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully\n";

// Create database
// $sql = "CREATE DATABASE ToDoListDB";
// if (mysqli_query($conn, $sql)) {
//     echo "Database created successfully\n";
// } else {
//     echo "Error creating database: " . mysqli_error($conn);
// }

// sql to create table
$sql = "CREATE TABLE ToDos (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
task TEXT(30) NOT NULL,
effort INT(30) NOT NULL,
urgency INT(30) NOT NULL,
importance INT(30) NOT NULL,
significance INT(30) NOT NULL,
enjoyability INT(30) NOT NULL,
rating DOUBLE(4,2) NOT NULL,
completed BOOLEAN NOT NULL
)";

if (mysqli_query($conn, $sql)) {
    echo "Table ToDos created successfully\n";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

// Calculate Rating Function
function calculateRating($effort, $urgency, $importance, $significance, $enjoyability) {
	return 10*((1 - $effort/10) + ($urgency/10) + ($importance/10) + 2*($significance/10) + ($enjoyability/10))/6;
}

function addRow($conn, $task, $effort, $urgency, $importance, $significance, $enjoyability, $completed) {
	$stmt = $conn->prepare("INSERT INTO ToDos (task, effort, urgency, importance, significance, enjoyability, rating, completed) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
	$stmt->bind_param("siiiiidi", $task, $effort, $urgency, $importance, $significance, $enjoyability, $rating, $completed);
	$rating = calculateRating($effort, $urgency, $importance, $significance, $enjoyability);
	$stmt->execute();
}

addRow($conn, "Do homework", 3, 8, 2, 3, 9, false);
addRow($conn, "Walk Apollo", 6, 8, 5, 3, 7, true);
addRow($conn, "BART home", 6, 8, 5, 2, 7, false);
addRow($conn, "Go for a run", 6, 8, 5, 3, 8, false);
addRow($conn, "Eat lunch", 6, 4, 5, 3, 7, false);

$conn->close();
?>

