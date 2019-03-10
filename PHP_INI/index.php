<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$server   = "localhost";
$database = "kaizen";
$username = "root";
$password = "";
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'),true);
$conn = new mysqli($server, $username, $password, $database); 
mysqli_set_charset($conn ,'utf8');

if($conn->connect_error) {
    die("Error : " . $conn->connect_error);
} 
$failvalue [] = array("error" => "1", "num_rows" => "0", "data" => "no action found");
$passvalue [] = array("error" => "0", "num_rows" => "1", "data" => "data");

switch ($method) {
    case 'GET':
      $id = $_GET['id'];
      //$sql = "select * from policies".($id?" where id=$id":''); 
      $sql  = "SELECT SSAD_ID,ANNO,STD_NM,PERCENT FROM EMPLEADO".($id?" WHERE SSAD_ID=$id":''); 
      break;
    case 'PUT':
      $id = $input["id"];
      $number = $input["number"];
      $amount = $input["amount"];
      $sql = "update policies set number = '$number', amount = $amount where id=$id"; 
      break;
    case 'POST':
      $number = $input["number"];
      $amount = $input["amount"];
      $sql = "insert into policies (number, amount) values ('$number', '$amount')"; 
      break;
    case 'DELETE':
      $id = $_GET['id'];
      $sql = "delete from policies where id=$id"; 
      break;
  }
  
  // run SQL statement
  $result = mysqli_query($conn,$sql);
  
  // die if SQL statement failed
  if (!$result) {
    http_response_code(404);
    die(mysqli_error($conn));
  }
  // print results, insert id or affected row count
if ($method == 'GET') {
    $value=0;
    $num_fila = $result->num_rows; 
    if($num_fila > 0) {
        //$resultado->data_seek(0);
        while ($fila = $result->fetch_assoc()) {
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
  } elseif ($method == 'POST') {
    echo mysqli_insert_id($conn);
  } else {
    echo mysqli_affected_rows($conn);
  }
  //Close mysqli database connection
$conn->close();
?>