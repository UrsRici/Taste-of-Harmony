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
        $rows = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $rows[] = $row;
        }
        echo json_encode($rows);
        if(isset($_POST)){
            $data = file_get_contents("php://input");
            $user = json_decode($data, true);
            echo json_encode($user);
        }
        ?>
    </body>

</html>