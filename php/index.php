<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Head content here -->
</head>

    <body>
        <?php
        require 'connect.php';

        $sql = "SELECT * FROM user";
        $result = mysqli_query($conn, $sql);
        $row = $result->fetch_assoc();
        echo json_encode($row["email"])
        ?>

        <div id="data" data-row='<?php echo json_encode($row['email']); ?>'></div>
        
        <!-- Include your Home.js script -->
        <script src="../assets/js/Home.js"></script>
    </body>

</html>