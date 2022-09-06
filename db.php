<?php
    $servername = "sql6.freemysqlhosting.net";
    $username = "sql6517630";
    $password = "UUEAi58YPY";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
?>