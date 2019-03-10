<?php
header("Access-Control-Allow-Origin: *");
include('connection.php');

$mysqli = new mysqli($server, $username , $password, $database );
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
else{
 //   echo $mysqli->host_info . "\n";
    $mysqli->set_charset("utf8");
//error_reporting(0); // Apagar sql errors/warnings en producción
// error code 0=sin error, 1=no action, 2=no data
$failvalue [] = array("error" => "1", "num_rows" => "0", "data" => "no action found");
$passvalue [] = array("error" => "0", "num_rows" => "1", "data" => "data");
// g= get, p=profile, d=delete, n=none, v=validate, u=update
$action = isset($_GET["action"]) ? $_GET["action"] : '-';
switch ($action):
    case "v":
    // read data
        $successreturn [] = array("SSAD_ID" => "NULL", "STD_NM" => "NULL");
        $sql  = "SELECT SSAD_ID,ANNO,STD_NM,PERCENT FROM EMPLEADO";
        $value=0;
        $resultado = $mysqli->query($sql);
        $num_fila = $resultado->num_rows;
        if($num_fila > 0) {
            //$resultado->data_seek(0);
            while ($fila = $resultado->fetch_assoc()) {
                $successreturn[$value]['SSAD_ID']=$fila['SSAD_ID'];
                $successreturn[$value]['ANNO']=$fila['ANNO'];         
                $successreturn[$value]['STD_NM']=$fila['STD_NM'];
                $successreturn[$value]['PERCENT']=$fila['PERCENT'];
                $value++;    
            }
            $passvalue [] = array("error" => "0","num_rows" => $num_fila, "data" => $successreturn);
            echo json_encode($passvalue);
        }else {
            $failvalue [] = array("error" => "2", "num_rows" => "0", "data" => "no data found");
            echo json_encode($failvalue);
        }
        break;
    case "u":  
    // update data 
    // Asegurarse que Form HTML se vea como sigue 
    // <form action="your-php-domain/connection_api.php?action=u" method="post">
       // updateData();
        break;
    default:
        echo json_encode($failvalue);
endswitch;
mysqli_close($mysqli);
}
?>