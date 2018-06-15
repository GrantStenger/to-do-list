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

echo "<div class='divTableRow'>";
echo "<div class='divTableHead' onclick='sortTable(0)'></div>";
echo "<div class='divTableHead' onclick='sortTable(1)'>Task</div>";
echo "<div class='divTableHead' onclick='sortTable(2)'>Effort</div>";
echo "<div class='divTableHead' onclick='sortTable(3)'>Urgency</div>";
echo "<div class='divTableHead' onclick='sortTable(4)'>Importance</div>";
echo "<div class='divTableHead' onclick='sortTable(5)'>Significance</div>";
echo "<div class='divTableHead' onclick='sortTable(6)'>Enjoyability</div>";
echo "<div class='divTableHead' onclick='sortTable(7)'>Rating</div>";
echo "<div class='divTableHead'></div>";
echo "</div>";

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        if ($row['completed']) {
            echo "<div class='divTableRow' id=" . $row['id'] . ">";
            echo "<div class='divTableCellChecked' onclick='completeTask(" . $row['id'] . ")'>" . "<span>&#10003;</span>" . "</div>";
            echo "<div class='divTableCellChecked' onclick='completeTask(" . $row['id'] . ")'><strike>" . $row['task'] . "</strike></div>";
            echo "<div class='divTableCellChecked' onclick='completeTask(" . $row['id'] . ")'>" . $row['effort'] . "</div>";
            echo "<div class='divTableCellChecked' onclick='completeTask(" . $row['id'] . ")'>" . $row['urgency'] . "</div>";
            echo "<div class='divTableCellChecked' onclick='completeTask(" . $row['id'] . ")'>" . $row['importance'] . "</div>";
            echo "<div class='divTableCellChecked' onclick='completeTask(" . $row['id'] . ")'>" . $row['significance'] . "</div>";
            echo "<div class='divTableCellChecked' onclick='completeTask(" . $row['id'] . ")'>" . $row['enjoyability'] . "</div>";
            echo "<div class='divTableCellChecked' onclick='completeTask(" . $row['id'] . ")'>" . $row['rating'] . "</div>";
            echo "<div class='divCloseChecked' onclick='deleteTask(" . $row['id'] . ")'>&times;</div>";
            echo "</div>";
        }
        else {
            echo "<div class='divTableRow' id=" . $row['id'] . ">";
            echo "<div class='divTableCell' onclick='completeTask(" . $row['id'] . ")'></div>";
            echo "<div class='divTableCell' onclick='completeTask(" . $row['id'] . ")'>" . $row['task'] . "</div>";
            echo "<div class='divTableCell' onclick='completeTask(" . $row['id'] . ")'>" . $row['effort'] . "</div>";
            echo "<div class='divTableCell' onclick='completeTask(" . $row['id'] . ")'>" . $row['urgency'] . "</div>";
            echo "<div class='divTableCell' onclick='completeTask(" . $row['id'] . ")'>" . $row['importance'] . "</div>";
            echo "<div class='divTableCell' onclick='completeTask(" . $row['id'] . ")'>" . $row['significance'] . "</div>";
            echo "<div class='divTableCell' onclick='completeTask(" . $row['id'] . ")'>" . $row['enjoyability'] . "</div>";
            echo "<div class='divTableCell' onclick='completeTask(" . $row['id'] . ")'>" . $row['rating'] . "</div>";
            echo "<div class='divClose' onclick='deleteTask(" . $row['id'] . ")'>&times;</div>";
            echo "</div>";
        }
    }
}

mysqli_close($con);
// <li id=3>"Feed Apollo"<span class='close' onclick='deleteTask(3)'>×</span></li>;
?>
